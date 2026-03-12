// ==UserScript==
// @name         GeoGuessr Better Leaderboards
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A Tampermonkey script that improves GeoGuessr map leaderboards.
// @author       Inoemis
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        none
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/Inoemis/geoguessr-better-leaderboards/main/geoguessr-better-leaderboards.user.js
// @updateURL    https://raw.githubusercontent.com/Inoemis/geoguessr-better-leaderboards/main/geoguessr-better-leaderboards.user.js
// ==/UserScript==

(function () {
    'use strict';

    function switchLeaderboard(gameMode) {
        // Find the first leaderboard button matching the selected game mode, skipping the one already selected
        const item = [...document.querySelectorAll(
            '[class*="map-highscore_switchContainer"] [class*="switch_switchItem"]'
        )].find(btn => {
            const label = btn.querySelector('[class*="switch_label"]');
            if (!label) return false;

            return label.textContent.trim().toLowerCase() === gameMode && label.ariaSelected !== "true";
        });

        item?.click();
    }

    function moveMyScore() {
        // Select the container holding the leaderboard entries
        const list = document.querySelector('[class*="map-highscore_listBody"]');
        if (!list) return;

        // Find the entry corresponding to the player's own score
        const myScore = list.querySelector('[class*="map-highscore_highlighted"]');
        if (!myScore) return;

        // Move the personal highscore to the top
        if (list.firstElementChild !== myScore) {
            list.prepend(myScore);
        }
    }

    // Listener for switching game modes
    document.addEventListener("click", ({target}) => {
        // Get the game mode of the button pressed
        const button = target.closest('[class*="play-setting-button_root"]');
        if (!button) return;

        let gameMode = button.textContent.trim().toLowerCase();
        if (gameMode === "moving") gameMode = "move";

        // Switch to the corresponding leaderboard
        switchLeaderboard(gameMode);
    });

    // Watching for leaderboard updates
    const observer = new MutationObserver(moveMyScore);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
