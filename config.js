// ============================================================
// BLAKEWORTH COMPLIANCE DASHBOARD — DATA CONFIGURATION (live)
// ============================================================
// Publish-to-web CSV feeds from the "Blakeworth_Compliance" Sheet.
// Tabs: MASTER (gid=1135568484) / DOCS (gid=672067850) / LINKS (gid=367798854).
// ============================================================

window.CONFIG = {
      MASTER_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNae-sHgBR0y3X1VUQlOwl-gQsR8D9GqB6SS79Nd_5eFqpXp4V9G5GD-Zmhth22TBfsnZU5nUVGFyf/pub?gid=1135568484&single=true&output=csv",
      DOCS_CSV_URL:   "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNae-sHgBR0y3X1VUQlOwl-gQsR8D9GqB6SS79Nd_5eFqpXp4V9G5GD-Zmhth22TBfsnZU5nUVGFyf/pub?gid=672067850&single=true&output=csv",
      LINKS_CSV_URL:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNae-sHgBR0y3X1VUQlOwl-gQsR8D9GqB6SS79Nd_5eFqpXp4V9G5GD-Zmhth22TBfsnZU5nUVGFyf/pub?gid=367798854&single=true&output=csv",

      // ---- Status write-back (Mark paid / Mark cleared) ----
      STATUS_WRITE_URL: "https://script.google.com/macros/s/AKfycbxOavoP_ng6ThR1ZI_fdSLynkEE25qtWN9qQX1qY4W0W9fZYhFRcvj_waq-eJ4QbEMh/exec",
      STATUS_TOKEN: "bw-KUF1d7Owbd9PiX-r-56MtQ",
};
