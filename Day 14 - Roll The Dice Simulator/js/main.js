this.onload = function () {

  var number = document.querySelector("#number");
  var btn = document.querySelector("#btn");

  rollTheDice = function () {
    var result = Math.floor(Math.random() * 6 + 1);
    number.innerHTML = result;
  };
  btn.addEventListener("click", rollTheDice);
};