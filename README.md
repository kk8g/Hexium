# Hexium
If you think this version has a cookie logger your simply sped, you can run it through any ai to get a indepth analysis, the code is open sourced :sob:

# what a skid, happy skidding you low iq foid :sob:
https://cdn.discordapp.com/attachments/1519371136998047826/1534356154115817522/image.png?ex=6a73d406&is=6a728286&hm=14507f6e7f1f8937efbdf29e00af018d23ca9a5e279a72916be72157ae3ab2bf&

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
