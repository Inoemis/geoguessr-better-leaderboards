# GeoGuessr Better Leaderboards

A Tampermonkey script that improves GeoGuessr map leaderboards.

## Features

- Automatically switches the leaderboard when selecting a **game mode** (Moving / No Move / NMPZ)
- Moves your personal highscore to the **top of the leaderboard**

This removes the need to manually scroll to find your current highscore or manually change the leaderboard after selecting a game mode.

---

## Installation

### 1. Install Tampermonkey

Install the Tampermonkey browser extension:

- https://www.tampermonkey.net/

### 2. Install the script

Click the link below:

**[Install GeoGuessr Better Leaderboards](https://raw.githubusercontent.com/Inoemis/geoguessr-better-leaderboards/main/geoguessr-better-leaderboards.user.js)**

Tampermonkey will automatically detect the userscript and prompt you to install it.

---

## How it works

The script improves two interactions on GeoGuessr map pages:

### Automatic leaderboard switching

When selecting a game mode:

- Moving
- No Move
- NMPZ

the leaderboard will automatically switch to the corresponding mode.

### Personal score always visible

Your own highscore entry is automatically moved to the top of the leaderboard so you don't need to scroll down to find it.

---

## Compatibility

This script works on:

https://geoguessr.com/*

It relies on GeoGuessr's current page structure and may stop working if the site layout changes in the future.

---

## Contributing

Feel free to open an issue or submit a pull request if you have suggestions or improvements.