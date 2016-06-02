"use strict";

var player = {};


function play(tab) {
  tab.attach({
    contentScriptFile: ["./play.js"],
  });
}

function next(tab) {
  tab.attach({
    contentScriptFile: ["./next.js"],
  });
}


player.play = play;
player.next = next;



module.exports = player;