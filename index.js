var player
alert("Jasd")
console.log("Hej");


var player;

function onYouTubeIframeAPIReady() {
    console.log("lul")
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'Xa0Q0J5tOP0',
        playerVars: {
            color: 'white'
        },
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
  console.log("PLAYING")
      event.target.playVideo();
  }

browser.tabs.create({ url : "someHtml.html"})

browser.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);

  switch (command) {
    default : break;
  } 

});
