var result = document.getElementById('result');

var pushBtn = function (obj) {
  var pushed = obj.innerHTML;

  if (pushed == '=') {
    //Calculate
    result.innerHTML = eval(result.innerHTML);
  } else if (pushed == 'C') {
    //Clear
    result.innerHTML = '0';
  } else {
    if (result.innerHTML == '0') {
      result.innerHTML = pushed;
    } else {
      result.innerHTML += pushed;
    }
  }
}