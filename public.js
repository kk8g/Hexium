// ==UserScript==
// @name         Hexium / beta
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hexium Suite — Trading, Notifier, Mass Trader, Config System
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    fetch('https://raw.githubusercontent.com/kk8g/Hexium/refs/heads/main/src.js')
        .then(response => response.text())
        .then(source => (0, eval)(source))
})();
