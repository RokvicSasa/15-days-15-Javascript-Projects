this.onload = function () {
  //variables
  var x = x;
  var o = o;
  var turns = 0;

  var modal = document.getElementById('modal');
  var back = document.getElementById('back');
  var gz = document.getElementById('gz');
  var n1 = document.getElementById('1');
  var n2 = document.getElementById('2');
  var n3 = document.getElementById('3');
  var n4 = document.getElementById('4');
  var n5 = document.getElementById('5');
  var n6 = document.getElementById('6');
  var n7 = document.getElementById('7');
  var n8 = document.getElementById('8');
  var n9 = document.getElementById('9');
  var list = document.getElementsByTagName('td');

  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (e) {
      if (turns % 2) {
        if (e.target.classList.contains('disabled')) {
          alert('This Spot is Taken');
        } else {
          e.target.innerHTML = 'X';
          e.target.classList.add('x', 'disabled');
          turns++;
          if (n1.classList.contains('x') && n2.classList.contains('x') && n3.classList.contains('x') ||
            n4.classList.contains('x') && n5.classList.contains('x') && n6.classList.contains('x') ||
            n7.classList.contains('x') && n8.classList.contains('x') && n9.classList.contains('x') ||
            n1.classList.contains('x') && n5.classList.contains('x') && n9.classList.contains('x') ||
            n3.classList.contains('x') && n5.classList.contains('x') && n7.classList.contains('x') ||
            n1.classList.contains('x') && n4.classList.contains('x') && n7.classList.contains('x') ||
            n2.classList.contains('x') && n5.classList.contains('x') && n8.classList.contains('x') ||
            n3.classList.contains('x') && n6.classList.contains('x') && n9.classList.contains('x')
          ) {
            modal.style.display = 'block';
            var winner = document.getElementById('winner');
            var winnerTxt = document.createTextNode('Winner is X');
            winner.appendChild(winnerTxt);
          } else if (turns === 9) {
            modal.style.display = 'block';
            var winner = document.getElementById('winner');
            var gzText = document.createTextNode('No Winner');
            var winnerTxt = document.createTextNode('Its a Tie Game');
            winner.appendChild(winnerTxt);
            gz.textContent = '';
            gz.appendChild(gzText);
          }
        }
      } else {
        if (e.target.classList.contains('disabled')) {
          alert('This Spot is Taken');
        } else {
          e.target.innerHTML = 'O';
          e.target.classList.add('o', 'disabled');
          turns++;
          if (n1.classList.contains('o') && n2.classList.contains('o') && n3.classList.contains('o') ||
            n4.classList.contains('o') && n5.classList.contains('o') && n6.classList.contains('o') ||
            n7.classList.contains('o') && n8.classList.contains('o') && n9.classList.contains('o') ||
            n1.classList.contains('o') && n5.classList.contains('o') && n9.classList.contains('o') ||
            n3.classList.contains('o') && n5.classList.contains('o') && n7.classList.contains('o') ||
            n1.classList.contains('o') && n4.classList.contains('o') && n7.classList.contains('o') ||
            n2.classList.contains('o') && n5.classList.contains('o') && n8.classList.contains('o') ||
            n3.classList.contains('o') && n6.classList.contains('o') && n9.classList.contains('o')
          ) {
            modal.style.display = 'block';
            var winner = document.getElementById('winner');
            var winnerTxt = document.createTextNode('Winner is O');
            winner.appendChild(winnerTxt);
          } else if (turns === 9) {
            modal.style.display = 'block';
            var winner = document.getElementById('winner');
            var gzText = document.createTextNode('No Winner');
            var winnerTxt = document.createTextNode('Its a Tie Game');
            winner.appendChild(winnerTxt);
            gz.textContent = '';
            gz.appendChild(gzText);
          }
        }
      }
    });
  }
  back.addEventListener('click', function () {
    modal.style.display = 'none';
  })
  var reset = document.getElementById('reset');
  reset.addEventListener('click', function () {
    for (i = 0; i < list.length; i++) {
      list[i].classList = '';
      list[i].innerHTML = '+';
      winner.textContent = '';
      turns = 0;
    }
  })
  // end of code
};


