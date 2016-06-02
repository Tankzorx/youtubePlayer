var buttons = document.getElementsByClassName("ytp-play-button")
if(buttons.length) {
    for (var i = buttons.length - 1; i >= 0; i--) {
    	buttons[i].click();
    }
}