let btn = document.querySelector('.button');
let inputMovie = document.querySelector('.input-movie');
let inputRating = document.querySelector('.input-rating');

let movieWrapper = document.querySelector('.bottom-part');

btn.addEventListener('click', function() {

  //Create User Rating
  let ratingUserValue = document.createTextNode(inputRating.value);
  let ratingValue = document.createElement("H3");
  ratingValue.appendChild(ratingUserValue);
  let rating = document.createElement("div");
  rating.classList.add('rating');

  //create Star For Rating
  let star = document.createElement("IMG");
  star.src = "images/star.svg";
  rating.appendChild(star);
  rating.appendChild(ratingValue);

  //Create Tags
  let movieTagValue = document.createTextNode('Action,Adventure,Sci-Fi');
  let movieTag = document.createElement("H2");
  movieTag.appendChild(movieTagValue);
  movieTag.classList.add('movie-tags');

  //Create User Movie name
  let movieTitleValue = document.createTextNode(inputMovie.value);
  let movieTitle = document.createElement("H1");
  movieTitle.appendChild(movieTitleValue);
  movieTitle.classList.add('movie-title');

  //Create Movie Info
  let movieInfo = document.createElement("div");
  movieInfo.classList.add('movie-info');
  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(movieTag);
  movieInfo.appendChild(rating);

  //Create Movie Poster
  let poster = document.createElement("IMG");
  poster.src = "images/default.jpg";
  let moviePoster = document.createElement("div");
  moviePoster.classList.add('movie-poster');
  moviePoster.classList.add('shadow');
  moviePoster.appendChild(poster);


  let movieBox = document.createElement("div");
  movieBox.classList.add('movie-box');
  movieBox.classList.add('shadow');

  movieBox.appendChild(moviePoster);
  movieBox.appendChild(movieInfo);
  movieWrapper.appendChild(movieBox);

})

