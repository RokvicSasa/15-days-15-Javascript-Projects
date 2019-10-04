var audio1 = new Audio('./music/2019-04-20_-_Quiet_Time_-_David_Fesliyan.mp3');
var audio2 = new Audio('../music/2019-04-06_-_Deep_Meditation_-_David_Fesliyan.mp3');

var playingInfo = document.querySelector('.playing');
var opt1 = document.querySelector('.opt1');
var opt2 = document.querySelector('.opt2');
var opt3 = document.querySelector('.opt3');
var opt4 = document.querySelector('.opt4');
var opt5 = document.querySelector('.opt5');
var opt6 = document.querySelector('.opt6');

var play = document.querySelector('.play');

var song1 = document.querySelector('.song1');
var song2 = document.querySelector('.song2');

var playBtn = document.querySelector('.playbtn');
var pauseBtn = document.querySelector('.pausebtn');

var timer = document.querySelector('.timer');

var selectedTime = 59;

// Add Class Active to element that is clicked
function addCLickFunction(btn,time) {
  btn.addEventListener('click', function() {
    var btns = [opt1,opt2,opt3,opt4,opt5,opt6];
    for(i=0;i<btns.length;i++) {
      if (btns[i].classList.contains('active')) {
        btns[i].classList.remove('active');
      }
    }
    btn.classList.add('active');
    selectedTime = time;
  });
}

addCLickFunction(opt1, 59);
addCLickFunction(opt2, 299);
addCLickFunction(opt3, 599);
addCLickFunction(opt4, 1799);
addCLickFunction(opt5, 2699);
addCLickFunction(opt6, 3599);


// Add Class Active to element that is clicked
function addCLickFunctionToSong(btn) {
  btn.addEventListener('click', function () {
    var songs = [song1, song2];
    for (i = 0; i < songs.length; i++) {
      if (songs[i].classList.contains('song-active')) {
        songs[i].classList.remove('song-active');
      }
    }
    btn.classList.add('song-active');
  });
}

addCLickFunctionToSong(song1);
addCLickFunctionToSong(song2);

var playing = false;

playBtn.addEventListener('click', function() {
  if(song1.classList.contains('song-active')) {
    playing = true;
    if (playing) {
      audio1.play();
      playingInfo.innerHTML = "Playing: Quiet Time";
      startTimer(selectedTime, timer);
      playBtn.classList.add('hide');
      pauseBtn.classList.remove('hide');
      setTimeout(function () { 
        audio1.pause();
      }, selectedTime * 1000 + 1000);
    };
  }
  else if (song2.classList.contains('song-active')) {
    playing = true;
    if (playing) {
      audio2.play();
      playingInfo.innerHTML = "Playing: Deep Meditation";
      startTimer(selectedTime, timer);
      playBtn.classList.add('hide');
      pauseBtn.classList.remove('hide');
      setTimeout(function () {
        audio1.pause();
      }, selectedTime * 1000 + 1000);
    }
  }
});
pauseBtn.addEventListener('click', function () {
  playing = false;
  audio1.pause();
  playBtn.classList.remove('hide');
  playBtn.classList.add('show');
  pauseBtn.classList.add('hide');
});
pauseBtn.addEventListener('click', function () {
  playing = false;
  audio2.pause();
  playBtn.classList.remove('hide');
  playBtn.classList.add('show');
  pauseBtn.classList.add('hide');
  if (timerEnd === true) {
    audio2.stop();
  }
});

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 00;
    }
  }, 1000);
}

audio1.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
audio2.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
