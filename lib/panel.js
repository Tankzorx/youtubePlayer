"use strict";

var obj = {};

module.exports.init = (player) => {

	// Variables
	obj.panel = panel;

	// Events
	obj.panel.port.on("text-entered", (text) => {
		console.log("Searching for: " + text);
		player.goTo(text);
		obj.panel.hide();
	// https://www.youtube.com/results?search_query=asd
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
	obj.panel.show();
};




