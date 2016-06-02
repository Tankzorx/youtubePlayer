var buttons = document.getElementsByClassName("ytp-next-button")
if(buttons.length) {
    for (var i = buttons.length - 1; i >= 0; i--) {
    	buttons[i].click();
    }
}