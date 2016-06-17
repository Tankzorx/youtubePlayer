"use strict";

var tabs = require("sdk/tabs");

var player = {};

// Export the constructor.
module.exports.init = () => {

	// Variables
	player.playerTab = tabs.activeTab;
	player.playerFlag = false;

	// Events
	player.playerTab.on("close",(tab) => {
	    setPlayerFlag(false);
	});

	// Functions
	player.bindPlayer = bindPlayer;
	player.setPlayerFlag = setPlayerFlag;
	player.play = play;
	player.next = next;
	player.goTo = goTo;
	player.test = test;

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

function test() {
	setPlayerFlag(false);
	if (player.playerTab.url.indexOf("www.youtube.com/results")  === -1) {
		console.error("DID NOT GO TO /RESULTS.")
		setPlayerFlag(true);
		return;
	} else {
		console.log("ON SEARCH PAGE.");
		var goToWorker = player.playerTab.attach({
	   			contentScriptFile: ["./goTo.js"],		
		});
	
		goToWorker.port.on("foundId", (id) => {
			console.log("foundIdBackend");
			player.playerTab.url = "https://www.youtube.com/watch?v=" + id;
			setPlayerFlag(true);
		})
		return;
	}
}

function goTo(query) {
	let url = "https://www.youtube.com/results?search_query=" + query;
	player.playerTab.url = url;
	// This event listener HAS to be added here, instead of the constructor.
	player.playerTab.on("ready", (tab) => {
		readyFunc();
	})
	return;
}

function readyFunc(tab) {
	setPlayerFlag(false);
	if (player.playerTab.url.indexOf("www.youtube.com/results")  === -1) {
		setPlayerFlag(true);
		return;
	} else {
		var goToWorker = player.playerTab.attach({
	   			contentScriptFile: ["./goTo.js"],		
		});
		goToWorker.port.on("foundId", (id) => {
			player.playerTab.url = "https://www.youtube.com/watch?v=" + id;
			setPlayerFlag(true);
			return;
		})
	}
}