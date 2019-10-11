let content = document.querySelector('.content');
let button = document.querySelector('.button');

let key = 'AIzaSyCd2u2JknFi4F1tSJOiZwVAnxYPIIou0Dk';
let playlistId = 'PLI_7Mg2Z_-4I-W_lI55D9lBUkC66ftHMg';
let playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${key}`;


function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}
function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}

function getVideo() {
  showSpinner(); 
  fetch(playlistUrl)
    .then(response => response.json())
    .then(data => {
      hideSpinner();
      let videosList = data.items;
      let randomNumber = Math.floor(Math.random() * videosList.length + 1);
      let randomVideo = videosList[randomNumber]
      let randomVideoId = randomVideo.snippet.resourceId.videoId;
      content.innerHTML =
        `<iframe
        width="672"
        height="378"
        src="https://www.youtube.com/embed/${randomVideoId}"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>`;
    })
}

getVideo();