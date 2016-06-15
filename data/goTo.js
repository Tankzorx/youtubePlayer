alert("Hasdasd");
console.error("asd");
function derp() {

	setTimeout(function() {

	var searchResults = document.getElementsByClassName("yt-lockup yt-lockup-tile yt-lockup-video clearfix")
	if (searchResults.length === 0) {
		setTimeout(function() {
			derp();
		}, 50);
	} else {
		var id = searchResults[0].getAttribute("data-context-item-id");
		alert(id);
		self.port.emit("foundId",id);
		return;
	}
	}, 3000);
};
alert("Hasdasd2");
derp();