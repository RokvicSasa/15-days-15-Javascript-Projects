this.onload = function () {
  var title = document.querySelector("#title");
  var input = document.querySelector("#input");
  var btn = document.querySelector("#btn");
  var output = document.querySelector(".output")
  var outputValue = document.querySelector(".output-value");
  var change = document.querySelector("#change");


  change.addEventListener("click", function () {
    input.value = "";
    outputValue.innerHTML = "";
    if (title.innerHTML == "Celsius to Fahrenheit") {
      title.innerHTML = "Fahrenheit to Celsius";
    } else {
      title.innerHTML = "Celsius to Fahrenheit";
    }
  });

  btn.addEventListener("click", function () {

    if (title.innerHTML == "Celsius to Fahrenheit") {
      outputValue.innerHTML = input.value * 1.8 + 32 + "\u00B0" + " Fahrenheit";
    } else {
      outputValue.innerHTML = (input.value - 32) / 1.8 + "\u00B0" + " Celsius";
    }
  });
};