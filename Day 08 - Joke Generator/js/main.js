let joke = document.querySelector('.joke');
let punchline = document.querySelector('.punchline');
let button = document.querySelector('.button');
const spinner = document.getElementById("spinner");


function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}
function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}

function loadData() {
  showSpinner()
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      hideSpinner()
      joke.innerHTML = data.setup;
      punchline.innerHTML = data.punchline;
    });
}

loadData();
