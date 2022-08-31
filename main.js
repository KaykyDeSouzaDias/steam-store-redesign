


const setSpecialOffer_BackgroundImage = () => {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`offer-${i}`).style.backgroundImage = `url("imgs/backgrounds/special-offers/background_${i}.png")`;
    }
}

setSpecialOffer_BackgroundImage();

const setRecommended_BackgroundImage = () => {
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`recommended-${i}`).style.backgroundImage = `url("imgs/backgrounds/recommended/recommended_${i}.png")`;
    }
}

setRecommended_BackgroundImage();



/*var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('trailer', {
    height: '100%',
    width: '100%',
    videoId: '53MyR_Z3i1w',
    startSeconds: 6,
    endSeconds: 10,
    playerVars: { 'autoplay': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady
    }
  });
}

/*var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 10);
      done = true;
    }
}*/

/*function stopVideo() {
    player.stopVideo();
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady (event) {

    player.setVolume(0);
}*/