var places = [
  {
    name: 'London',
    country: 'United Kingdom',
    img: 'images/london.png'
  },
  {
    name: 'San Francisko',
    country: 'United States',
    img: 'images/sanfranicsko.png',
  },
  {
    name: 'Paris',
    country: 'France',
    img: 'images/paris.png'
  },
  {
    name: 'New York',
    country: 'United States',
    img: 'images/newyork.png'
  },
  {
    name: 'Toronto',
    country: 'Canada',
    img: 'images/toronto.png'
  },
  {
    name: 'Madrid',
    country: 'Spain',
    img: 'images/madrid.png'
  },
];

//Steps for Slider
var step = 1;

//Slider Function
function slider() {

  //Give data to DOM
  document.querySelector(".slider-img").src = places[step].img;
  document.querySelector(".city").innerHTML = places[step].name;
  document.querySelector(".country").innerHTML = places[step].country;
  //Increase Step or return to begining
  if (step < places.length - 1) {
    step++;
  } else {
    step = 0;
  }
};

//Start Slider When Windows Load
window.onload = setInterval(slider, 3000);