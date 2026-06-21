# Hexium

A **Pekora / Korone extension** — a Tampermonkey userscript that enhances your experience on [pekora.zip](https://www.pekora.zip) with custom themes, a frosted-glass redesign, item notifications, and quality-of-life tweaks across the site.

> **Beta** — actively in development.

## Features

- **Six themes** — Skeet, Void, Crimson, Arctic, Gold, and Matrix, with live switching (no reload).
- **Glass redesign** — modern frosted-glass restyle of the catalog, games, message, and profile pages.
- **Page customiser** — transparent sidebars, blurred navbars, custom backgrounds, hidden ads, and per-page frame styles.
- **Background effects** — rain, snow, stars, or matrix overlays plus custom background images.
- **Item monitor** — polls the catalog and fires notifications (and optional Discord webhooks) when new limited items drop.
- **Quick nav** — handy shortcuts injected straight into the sidebar.
- **Auto refresher** — configurable click + hard-refresh intervals, hotkey-toggled.
- **Watermark HUD** — draggable overlay showing session time, live ping, and username.
- **Config system** — export / import your full setup as JSON.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, or Safari).
2. Open the Tampermonkey dashboard → **+ New script**.
3. Paste the loader below and save with **Ctrl+S**.
4. Visit [pekora.zip](https://www.pekora.zip) — Hexium loads automatically.

```js
// ==UserScript==
// @name         Hexium / beta
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hexium Suite loader
// @author       @CardCounting
// @match        https://www.pekora.zip/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';
  GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/kk8g/Hexium/refs/heads/main/src.js?t=' + Date.now(),
    headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' },
    onload(res) {
      if (res.status < 200 || res.status >= 300) {
        console.error('[Hexium] Failed to fetch source:', res.status);
        return;
      }
      try { eval(res.responseText); }
      catch (e) { console.error('[Hexium] Error running source:', e); }
    },
    onerror(err) { console.error('[Hexium] Network error loading source:', err); },
  });
})();
```

The loader pulls the latest source from this repo each time, so you always run the newest version.

## Notes

- Settings are stored locally via Tampermonkey (`GM_setValue`) and persist across sessions.
- Hexium is a community project and is not affiliated with Pekora.

---

Made by **@CardCounting**
