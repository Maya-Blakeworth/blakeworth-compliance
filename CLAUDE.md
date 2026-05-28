# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static compliance dashboard for Blakeworth Management's three real estate portfolios (JHU, SLP, DC). Reads the MASTER tab of a Google Sheet via the Sheets API and renders it as a filterable table with status tiles. Lives at https://maya-blakeworth.github.io/blakeworth-compliance/.

## Architecture

Single-page vanilla JS app — no build step, no framework, no package manager. Three files only:

- `index.html` — markup, CSS, and all dashboard JS in one file
- `config.js` — `CONFIG` global with `API_KEY`, `SHEET_ID`, `SHEET_NAME`, `REFRESH_INTERVAL`
- `.gitignore` — note: `config.js` is **intentionally committed** (see Security below)

Runtime flow: `index.html` loads `config.js`, then its inline `<script>` calls `fetchData()` against `https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/MASTER!A2:P200`, stores rows in the `allRows` global, and `render()` filters/sorts/paints the table. `setInterval` re-fetches every `REFRESH_INTERVAL` ms.

### Data contract with the Google Sheet

All status logic (Overdue / Due Soon / Upcoming / Current / Pending), days-until-due, and the `Row ID` are **computed inside the sheet**, not in the dashboard. The dashboard only reads, filters, and styles.

Column positions are pinned in the `COL` map at the top of the `<script>` in `index.html` (A=0 … P=15). Columns J, L, M, N, O are skipped in the map but the fetch range A2:P200 still pulls them. If the MASTER tab columns are reordered, **`COL` must be updated** — there is no header-based lookup.

Status strings the dashboard recognizes (exact spelling, capitalization matters): `Overdue`, `Due Soon`, `Upcoming`, `Current`, `Pending`. Anything else falls through to the "Pending" badge style and sort priority 5.

Portfolio codes are also exact strings: `JHU`, `SLP`, `DC`.

## Deploy

GitHub Pages serves `main` branch / root. There is no build, lint, or test command — pushing to `main` is the deploy. To preview locally, open `index.html` directly in a browser (the Sheets API call requires the live API key to be filled into `config.js` first).

## Security

- **The repo must stay PRIVATE.** GitHub Pages still serves the built site publicly; that is intentional. Do not toggle the repo to public.
- `config.js` holds the Google Sheets API key and is committed on purpose. The key is restricted server-side to (a) read-only Sheets API and (b) HTTP referrer `https://maya-blakeworth.github.io/*`. Do not loosen those restrictions, do not paste the key into chat/email/PRs, and do not move the key to an env var (it has to ship to the browser).
- `.gitignore` blocks `.env`, `secrets.js`, `private.js` as belt-and-suspenders — don't add real secrets to those paths either.
