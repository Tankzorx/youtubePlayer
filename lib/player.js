"use strict";

var tabs = require("sdk/tabs");

var player = {};

// Export the constructor.
module.exports.init = () => {

	// Variables
	player.playerTab = tabs.activeTab;
	player.playerFlag = false;

	// Events
	player.playerTab.on("close",function(tab) {
	    setPlayerFlag(false);
	});

	// Functions
	player.bindPlayer = bindPlayer;
	player.setPlayerFlag = setPlayerFlag;
	player.play = play;
	player.next = next;
	player.goTo = goTo;

	return player;
};

function setPlayerFlag(val) {
	player.playerFlag = val;
	console.log("Toggled playerFlag to: " + player.playerFlag);
}


function bindPlayer() {
	console.log("Bound player");
	setPlayerFlag(true);
	player.playerTab = tabs.activeTab;
}

function play() {
	if (player.playerFlag) {
		player.playerTab.attach({
			contentScriptFile: ["./play.js"],
		});
	}
}

function next() {
	if (player.playerFlag) {
		player.playerTab.attach({
			contentScriptFile: ["./next.js"],
	  	});
	}
}

function goTo(query) {
	/*TEMP: */ query = "landslide oh wonder";

	let url = "https://www.youtube.com/results?search_query=" + query;
	player.playerTab.url = url;
}