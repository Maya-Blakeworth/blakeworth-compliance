# Blakeworth Compliance Dashboard

**Live dashboard:** https://maya-blakeworth.github.io/blakeworth-compliance/
**Data source:** Blakeworth_Compliance (Google Sheet — CSV feeds)
**Owner:** Maya (Blakeworth Management)
**Last updated:** July 9, 2026

---

## What this is

A live compliance tracking dashboard for Blakeworth Management's four real estate portfolios:

- **JHU** — 11 Baltimore City properties (64 units)
- **SLP** — 25 Southlight Properties (Bethlehem, PA)
- **HOLDING** — Holding company LLCs (entity-level compliance only)
- **DC** — 1 DC property (3538 Parkwood Flats)

The dashboard reads from the **Blakeworth_Compliance** Google Sheet via published CSV feeds and displays compliance status (Overdue / Filing Needed / Due Soon / Current / Cleared) for LLC filings, property taxes, loans, insurance, rental licenses, inspections, lead certification, and registered agents.

---

## Security rules

- This repo must remain **PRIVATE** at all times
- `config.js` contains CSV feed URLs and the status-write token — never share it
- GitHub Pages serves the dashboard publicly — that is intentional and by design
- Dallas can view the dashboard at the public URL without a GitHub account

---

## File structure

```
/
├── index.html     — the full compliance dashboard (live build)
├── config.js      — CSV feed URLs + status write token (PRIVATE — never share)
├── .gitignore     — protects against accidental secret commits
└── README.md      — this file
```

---

## Data feeds (config.js)

The dashboard pulls from four endpoints:

| Config key | What it reads |
|---|---|
| `MASTER_CSV_URL` | MASTER tab — all compliance rows |
| `DOCS_CSV_URL` | DOCS tab — document proof links |
| `LINKS_CSV_URL` | LINKS tab — action URLs |
| `STATUS_WRITE_URL` | Apps Script endpoint — writes status changes back to sheet |

---

## Dashboard features

- **Portfolio overview cards** — flagged count + outstanding balance for each portfolio
- **Filterable table** — All / Flagged / Current+Active / Cleared views
- **Status badges** — color-coded: Overdue, Filing Needed, Due Soon, Current, Cleared, Pending
- **Detail panel** — click any row to see full contact info (managing agent name, title, email, phone), action URL, and doc proof links
- **Contact lookup** — managing agents for JHU (Pat / Patricia Weaver), SLP (Ramonia Hines), HOLDING, DC (Zachary Basha) with clickable email/phone

---

## Project history

| Date | What changed |
|---|---|
| May 28, 2026 | Initial scaffold — CSV-based architecture, no API key needed |
| May 29, 2026 | Compliance badges, doc proof buttons, action URLs, outstanding balances |
| Jun 17, 2026 | Switched to Blakeworth_Compliance_Template sheet (18 new rows) |
| Jun 29, 2026 | CSV feed URL updates |
| Jul 1, 2026 | Redesigned balances section, paid/cleared status, repointed to Blakeworth_Compliance sheet |
| Jul 9, 2026 | Replaced with fully revamped dashboard; fixed contact card rendering (Pat, Ramonia, Zachary Basha) |

---

Built by: Maya + Claude (AI) · Project started: May 28, 2026
