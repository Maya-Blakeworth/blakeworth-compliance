// ============================================================
// BLAKEWORTH COMPLIANCE DASHBOARD — DATA CONFIGURATION
// ============================================================
// No API key needed — uses Google Sheets publish-to-web CSV.
// To update the URL: open the Google Sheet → File → Share →
// Publish to web → MASTER tab → CSV → Publish → copy URL here.
// ============================================================

const CONFIG = {
  // Google Sheets publish-to-web CSV URL (MASTER tab)
  CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdz7JEUMdAGe2DESTUQfwzn3Tjg6TXFYaKDiPQMOgWneClgq3spBZGaQRBXHB6i1iK2_gK1MNldOky/pub?gid=1672074676&single=true&output=csv",

  // How often the dashboard auto-refreshes (milliseconds)
  // 300000 = 5 minutes
  REFRESH_INTERVAL: 300000,
};
