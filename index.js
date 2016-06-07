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
var player = require("lib/player").init();
var panel = require("lib/panel").init(player);

/*
 * Bind functionality.
 */
var nextSongHotKey = Hotkey({
  combo: config.nextKey,
  onPress: player.next,
});

var playHotKey = Hotkey({
  combo: config.playKey,
  onPress: player.play,
});

var bindHotKey = Hotkey({
  combo: config.bindPlayerKey,
  onPress: player.bindPlayer,
});

var searchHotKey = Hotkey({
  combo: config.startSearchKey,
  onPress: panel.initSearch,
});