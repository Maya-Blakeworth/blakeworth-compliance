// ============================================================
// BLAKEWORTH COMPLIANCE DASHBOARD — API CONFIGURATION
// ============================================================
// SECURITY: This file lives in a PRIVATE GitHub repo only.
// Never paste this key into chat, email, or any public file.
// API key is restricted to: Read-only, Sheets API,
// HTTP referrer: https://maya-blakeworth.github.io/*
// ============================================================

const CONFIG = {
  // Replace with your Google Sheets API key (see Phase 1.10 setup)
  API_KEY: "YOUR_API_KEY_HERE",

  // The ID from the Blakeworth_Compliance_Template sheet URL
  SHEET_ID: "15Bzb9VQ4RsBvGZxZUzTpBWPyhi8uXf9Kfp-lln0_rKM",

  // Which tab to read (MASTER tab)
  SHEET_NAME: "MASTER",

  // How often the dashboard auto-refreshes (milliseconds)
  // 300000 = 5 minutes
  REFRESH_INTERVAL: 300000,
};
