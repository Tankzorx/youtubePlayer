"use strict";

var obj = {};

var panel = require("sdk/panel").Panel({
	contentURL: "./panel.html",
	contentScriptFile: "./panel.js",
});

panel.port.on("text-entered", (text) => {
	console.log(text);
});

obj.panel = panel;
// Might need the below code.
// obj.panel.on("show", () => {
// 	self.port.emit("show");
// })

obj.initSearch = () => {
	obj.panel.show();
};



module.exports = obj;
