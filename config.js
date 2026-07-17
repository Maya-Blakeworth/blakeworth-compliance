// ============================================================
// BLAKEWORTH COMPLIANCE DASHBOARD — DATA CONFIGURATION (live)
// ============================================================
// Three gviz/tq CSV feeds from the "Blakeworth_Compliance" Sheet
// (doc id 1e5vJd30ZMxj7WTQW__B4QDrwYYh0xMluAmsuRlakYHs). Tabs: MASTER / DOCS / LINKS.
// gviz/tq is used instead of publish-to-web because the sheet is publicly
// shared (anyone with link can view), so the feed always reflects live data.
// ============================================================

window.CONFIG = {
  MASTER_CSV_URL: "https://docs.google.com/spreadsheets/d/1e5vJd30ZMxj7WTQW__B4QDrwYYh0xMluAmsuRlakYHs/gviz/tq?tqx=out:csv&gid=1135568484",
  DOCS_CSV_URL:   "https://docs.google.com/spreadsheets/d/1e5vJd30ZMxj7WTQW__B4QDrwYYh0xMluAmsuRlakYHs/gviz/tq?tqx=out:csv&gid=672067850",
  LINKS_CSV_URL:  "https://docs.google.com/spreadsheets/d/1e5vJd30ZMxj7WTQW__B4QDrwYYh0xMluAmsuRlakYHs/gviz/tq?tqx=out:csv&gid=367798854",

  // ---- Status write-back (Mark paid / Mark cleared) ----
  STATUS_WRITE_URL: "https://script.google.com/macros/s/AKfycbxOavoP_ng6ThR1ZI_fdSLynkEE25qtWN9qQX1qY4W0W9fZYhFRcvj_waq-eJ4QbEMh/exec",
  STATUS_TOKEN: "bw-KUF1d7Owbd9PiX-r-56MtQ",
};
