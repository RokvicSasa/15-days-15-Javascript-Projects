let latitude = 45.2517;
let longitude = 19.8369;
const darkSkyLink = "https://api.darksky.net/forecast/";
const ApiKey = "108e46eaaac12a21361655ad2ba5cc56";
const corsAvoid = 'https://cors-anywhere.herokuapp.com/';

var buildUrl = `${corsAvoid}${darkSkyLink}${ApiKey}/${latitude},${longitude}?lang=sr&units=si`;

var datum = document.querySelector(".datum");
var mesec = document.querySelector(".mesec");
var currentTemp = document.querySelector('.current-temperature');
var currentIcon = document.querySelector(".current-icon");

var day1Temp = document.querySelector('.day1temp');
var day2Temp = document.querySelector('.day2temp');
var day3Temp = document.querySelector('.day3temp');
var day4Temp = document.querySelector('.day4temp');
var day5Temp = document.querySelector('.day5temp');
var day6Temp = document.querySelector('.day6temp');
var day7Temp = document.querySelector('.day7temp');

var weekday1 = document.querySelector('.weekday1');
var weekday2 = document.querySelector('.weekday2');
var weekday3 = document.querySelector('.weekday3');
var weekday4 = document.querySelector('.weekday4');
var weekday5 = document.querySelector('.weekday5');
var weekday6 = document.querySelector('.weekday6');
var weekday7 = document.querySelector('.weekday7');


var data;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

if(mm === '01') {
  mm = 'January';
} else if (mm === '02') {
  mm = 'February';
} else if (mm === '03') {
  mm = 'March';
} else if (mm === '04') {
  mm = 'April';
} else if (mm === '05') {
  mm = 'May';
} else if (mm === '06') {
  mm = 'June';
} else if (mm === '07') {
  mm = 'July';
} else if (mm === '08') {
  mm = 'August';
} else if (mm === '09') {
  mm = 'September';
} else if (mm === '10') {
  mm = 'October';
} else if (mm === '11') {
  mm = 'November';
} else if (mm === '12') {
  mm = 'December';
}

today = n + ' ' + dd;

datum.innerHTML = today;
mesec.innerHTML = mm;

fetch(buildUrl)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    // Read the response as json.
    return response.json();
  })
  .then(function (responseAsJson) {
    data = responseAsJson;
    //console.log(responseAsJson);
    currentTemp.innerHTML = Math.floor(responseAsJson.currently.temperature) + "°";

    currentIcon.innerHTML = "<i class='wi wi-forecast-io-" + responseAsJson.currently.icon + "'></i>";

    day1Temp.innerHTML = Math.floor(data.daily.data[0].temperatureMax) + "°";
    day2Temp.innerHTML = Math.floor(data.daily.data[1].temperatureMax) + "°";
    day3Temp.innerHTML = Math.floor(data.daily.data[2].temperatureMax) + "°";
    day4Temp.innerHTML = Math.floor(data.daily.data[3].temperatureMax) + "°";
    day5Temp.innerHTML = Math.floor(data.daily.data[4].temperatureMax) + "°";
    day6Temp.innerHTML = Math.floor(data.daily.data[5].temperatureMax) + "°";
    day7Temp.innerHTML = Math.floor(data.daily.data[6].temperatureMax) + "°";

    weekday1.innerHTML = weekday[0].substring(0, 3);
    weekday2.innerHTML = weekday[1].substring(0, 3);
    weekday3.innerHTML = weekday[2].substring(0, 3);
    weekday4.innerHTML = weekday[3].substring(0, 3);
    weekday5.innerHTML = weekday[4].substring(0, 3);
    weekday6.innerHTML = weekday[5].substring(0, 3);
    weekday7.innerHTML = weekday[6].substring(0, 3);

  })
  .catch(function (error) {
    console.log('Looks like there was a problem: \n', error);
  });

