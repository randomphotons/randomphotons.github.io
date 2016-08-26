// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  var target = document.getElementById("player");
  var videoId = target.dataset.videoId;
  player = new YT.Player('player', {
    videoId: videoId
    , height: '100%'
    , width: '100%'
    , playerVars: { 'showinfo': 0, 'rel': 0, 'controls': 0 }
    , events: {
      //'onReady': onPlayerReady //,
    }
  });
}

function skipTo(time) {
  if (!time)
    return false;

  var matches = time.match(/([0-9]+)\:([0-9]{2}(?:\.[0-9]+)?)/);
  if (matches) {
    var mins = parseInt(matches[1]);
    var secs = parseFloat(matches[2]);
    player.seekTo(mins * 60 + secs, true);
  }
  return false;
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

function stopVideo() {
  player.stopVideo();
}
