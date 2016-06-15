"use strict";

var obj = {};

module.exports.init = (player) => {

	// Variables
	obj.player = player;
	obj.panel = panel;

	// Events
	obj.panel.port.on("text-entered", (text) => {
		console.log("Searching for: " + text);
		player.goTo(text);
		obj.panel.hide();
	});

	obj.panel.on("show", () => {
		obj.panel.port.emit("show");
	});

	// Functions
	obj.initSearch = initSearch;

	return obj;
};

var panel = require("sdk/panel").Panel({
	contentURL: "./panel.html",
	contentScriptFile: "./panel.js",
});

// Might need the below code.
// obj.panel.on("show", () => {
// 	self.port.emit("show");
// })

function initSearch () {
	if (obj.player.playerFlag) {
		obj.panel.show();
		return;
	} else {
		return;
	}
};




