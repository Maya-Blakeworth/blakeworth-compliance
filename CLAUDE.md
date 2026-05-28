# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static compliance dashboard for Blakeworth Management's three real estate portfolios (JHU, SLP, DC). Reads the MASTER tab of a Google Sheet via the Sheets API and renders it as a filterable table with status tiles. Lives at https://maya-blakeworth.github.io/blakeworth-compliance/.

## Architecture

Single-page vanilla JS app — no build step, no framework, no package manager. Three files only:

- `index.html` — markup, CSS, and all dashboard JS in one file
- `config.js` — `CONFIG` global with `CSV_URL` and `REFRESH_INTERVAL`
- `.gitignore` — note: `config.js` is **intentionally committed** (see Security below)

Runtime flow: `index.html` loads `config.js`, then its inline `<script>` calls `fetchData()` against `CONFIG.CSV_URL` (a Google Sheets **publish-to-web** CSV URL for the MASTER tab), pipes the response text through the local `parseCSV()` function, drops the header row with `rows.slice(1)`, stores the result in the `allRows` global, and `render()` filters/sorts/paints the table. `setInterval` re-fetches every `REFRESH_INTERVAL` ms.

`parseCSV()` is a small custom parser that handles `"…"`-quoted fields and `""` escapes. It splits the whole response on `\n` **before** parsing rows, so a cell containing a literal newline (most likely the Notes column) will break row alignment — keep multi-line content out of the sheet, or replace the parser if that changes.

### Data contract with the Google Sheet

All status logic (Overdue / Due Soon / Upcoming / Current / Pending), days-until-due, and the `Row ID` are **computed inside the sheet**, not in the dashboard. The dashboard only reads, filters, and styles.

Column positions are pinned in the `COL` map at the top of the `<script>` in `index.html` (A=0 … P=15). Columns J, L, M, N, O are skipped in the map but the CSV still contains them. If the MASTER tab columns are reordered, **`COL` must be updated** — there is no header-based lookup.

Status strings the dashboard recognizes (exact spelling, capitalization matters): `Overdue`, `Due Soon`, `Upcoming`, `Current`, `Pending`. Anything else falls through to the "Pending" badge style and sort priority 5.

Portfolio codes are also exact strings: `JHU`, `SLP`, `DC`.

To rotate or replace the data source: in the Sheet, **File → Share → Publish to web → MASTER tab → CSV → Publish**, then paste the new URL into `CONFIG.CSV_URL`. Unpublishing immediately revokes access for everyone (see Security).

## Deploy

GitHub Pages serves `main` branch / root. There is no build, lint, or test command — pushing to `main` is the deploy. To preview locally, open `index.html` directly in a browser; the published CSV URL is public so the fetch will work without any extra setup.

## Security

There is **no API key** in this codebase anymore — auth was replaced by a published-to-web CSV URL. The threat model is now:

- `CONFIG.CSV_URL` is a **capability URL**: anyone who has it can read the entire MASTER tab. There is no per-request auth, no IP/referrer restriction, no logging.
- The URL ships to the browser as part of `config.js`, so anyone who loads the public GitHub Pages dashboard can read it from page source. Treat the URL as effectively public.
- Keep the GitHub repo **PRIVATE** anyway — there's no upside to making it easier to discover, and the repo also exposes the sheet structure (`COL` map, column letters) which is a hint to an attacker.
- If the URL ever needs to be revoked, **File → Share → Publish to web → Stop publishing** in the Sheet. This invalidates the URL for everyone, including the live dashboard, until a new one is published and pasted into `config.js`.
- `.gitignore` blocks `.env`, `secrets.js`, `private.js` as belt-and-suspenders — don't add real secrets to those paths either.
