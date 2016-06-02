"use strict";
/*
 * API requires
 */
var self = require("sdk/self");
var { Hotkey } = require("sdk/hotkeys");
var tabs = require("sdk/tabs");

/*
 * Library requires
 */
var config = require("lib/config");
var player = require("lib/player");

/*
 * Application wide variables.
 */
var playerTab = tabs.activeTab;
var playerFlag = false;

playerTab.on("close",function(tab) {
    setPlayerFlag(false);
});

function setPlayerFlag(val) {
  playerFlag = val;
  console.log("Toggled playerFlag to: " + playerFlag);
}


function bindPlayer() {
  setPlayerFlag(true);
  playerTab = tabs.activeTab;
  
}

/*
 * Bind functionality.
 */
var nextSongHotKey = Hotkey({
 combo: config.nextKey,
  onPress: () => {
    if (playerFlag) {
      player.next(playerTab)
    }
  },
});

var playHotKey = Hotkey({
  combo: config.playKey,
  onPress: () => {
    if (playerFlag) {
      player.play(playerTab);
    }
  }
});

var bindHotKey = Hotkey({
  combo: config.bindPlayerKey,
  onPress: bindPlayer,
});
