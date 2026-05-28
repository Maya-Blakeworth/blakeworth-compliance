# Blakeworth Compliance Dashboard

**Live dashboard:** https://maya-blakeworth.github.io/blakeworth-compliance/
**Data source:** [Blakeworth_Compliance_Template](https://docs.google.com/spreadsheets/d/15Bzb9VQ4RsBvGZxZUzTpBWPyhi8uXf9Kfp-lln0_rKM/edit)
**Owner:** Maya (Blakeworth Management)

---

## What this is

A live compliance tracking dashboard for Blakeworth Management's three real estate portfolios:
- **JHU** — 11 Baltimore City properties (64 units)
- **SLP** — 25 Southlight Properties (Bethlehem, PA)
- **DC** — 1 DC property (3538 Parkwood Flats)

The dashboard reads from the MASTER tab of the Google Sheet and displays compliance status (Overdue / Due Soon / Upcoming / Current / Pending) for LLC filings, property taxes, loans, insurance, rental licenses, inspections, and lead paint.

---

## Security rules

- **This repo must remain PRIVATE at all times**
- `config.js` contains the Google Sheets API key — never share it
- The API key is restricted to: read-only Sheets API + HTTP referrer `https://maya-blakeworth.github.io/*`
- GitHub Pages serves the dashboard publicly — that is intentional and by design
- Dallas can view the dashboard at the public URL without a GitHub account

---

## File structure

```
/
├── index.html      — the dashboard (Phase 2 build)
├── config.js       — API key + Sheet ID (PRIVATE — never share)
├── .gitignore      — protects against accidental secret commits
└── README.md       — this file
```

---

## Setup (Phase 1.10 — API key)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project → Enable **Google Sheets API**
3. Create an API key → Restrict to:
   - **API restrictions:** Google Sheets API only
   - **HTTP referrers:** `https://maya-blakeworth.github.io/*`
4. Paste the key into `config.js` → replace `YOUR_API_KEY_HERE`
5. Commit and push → GitHub Pages will serve the update

---

## Enabling GitHub Pages

1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** | Folder: **/ (root)**
4. Save — dashboard goes live at `https://maya-blakeworth.github.io/blakeworth-compliance/`

---

## Project phases

- ✅ Phase 1 — Foundation (Google Sheet, data entry, LLC corrections)
- 🔨 Phase 1.9–1.10 — GitHub setup + API key ← YOU ARE HERE
- ⬜ Phase 2 — Dashboard HTML/CSS/JS build
- ⬜ Phase 3 — Google Apps Script weekly email digest
- ⬜ Phase 4 — Polish + handoff

---

*Built by: Maya + Claude (AI)*
*Project started: May 28, 2026*
