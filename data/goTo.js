function goToVid() {
	var searchResults = document.getElementsByClassName("yt-lockup yt-lockup-tile yt-lockup-video clearfix")
	if (searchResults.length < 4) {
		setTimeout(function() {
			console.log("Recurse");
			goToVid();
		}, 50);
	} else {
		var id = searchResults[1].getAttribute("data-context-item-id");
		console.log(id);
		self.port.emit("foundId",id);
		return;
	}

};
goToVid();
