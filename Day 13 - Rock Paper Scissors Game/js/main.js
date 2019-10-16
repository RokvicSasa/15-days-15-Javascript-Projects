this.onload = function () {
  //variables
  var start = document.getElementById('start');
  var modalFirst = document.getElementById('modal');
  var startGame = document.getElementById('start-btn');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');
  var rock = document.getElementById('rock');
  var modalSecond = document.getElementById('modal-second');
  var playAgain = document.getElementById('play-again');
  var winnerTitle = document.getElementById('winner-title');

  var userRock = document.getElementById('user-rock');
  var userPaper = document.getElementById('user-paper');
  var userScissors = document.getElementById('user-scissors');

  var computerRock = document.getElementById('computer-rock');
  var computerPaper = document.getElementById('computer-paper');
  var computerScissors = document.getElementById('computer-scissors');


  userScissors.classList.add('hide');
  userRock.classList.add('hide');
  userPaper.classList.add('hide');
  //first modall off
  start.addEventListener('click', function () {
    modalFirst.style.display = 'none';
  });
  paper.addEventListener('click', function () {
    scissors.classList.remove('active');
    rock.classList.remove('active');
    paper.classList.add('active');
    userPaper.classList.remove('hide');
  });
  scissors.addEventListener('click', function () {
    paper.classList.remove('active');
    rock.classList.remove('active');
    scissors.classList.add('active');
    userScissors.classList.remove('hide');
  });
  rock.addEventListener('click', function () {
    scissors.classList.remove('active');
    paper.classList.remove('active');
    rock.classList.add('active');
    userRock.classList.remove('hide');
  });

  //start game
  startGame.addEventListener('click', function () {
    var computer = Math.floor(Math.random() * 3) + 1;
    if (computer === 1) {
      computer = 'rock';
      computerRock.classList.remove('hide');
      if (scissors.classList.contains('active')) {
        modalSecond.style.display = 'none';
        winnerTitle.innerHTML = 'COMPUTER WIN!';
      } else if (rock.classList.contains('active')) {
        modalSecond.style.display = 'none';
        winnerTitle.innerHTML = 'TIE GAME!';
      } else if (paper.classList.contains('active')) {
        winnerTitle.innerHTML = 'USER WIN!';
        modalSecond.style.display = 'none';
      }
    } else if (computer === 2) {
      computer = 'paper';
      computerPaper.classList.remove('hide');
      if (scissors.classList.contains('active')) {
        winnerTitle.innerHTML = 'USER WIN!';
        modalSecond.style.display = 'none';
      } else if (rock.classList.contains('active')) {
        winnerTitle.innerHTML = 'COMPUTER WIN!';
        modalSecond.style.display = 'none';
      } else if (paper.classList.contains('active')) {
        winnerTitle.innerHTML = 'TIE GAME!';
        modalSecond.style.display = 'none';
      }
    } else {
      computer = 'scissors';
      computerScissors.classList.remove('hide');
      if (scissors.classList.contains('active')) {
        winnerTitle.innerHTML = 'TIE GAME!';
        modalSecond.style.display = 'none';
      } else if (rock.classList.contains('active')) {
        winnerTitle.innerHTML = 'USER WIN!';
        modalSecond.style.display = 'none';
      } else if (paper.classList.contains('active')) {
        winnerTitle.innerHTML = 'COMPUTER WIN!';
        modalSecond.style.display = 'none';
      }
    }
    playAgain.addEventListener('click', function () {
      modalSecond.style.display = 'block';
      scissors.classList.remove('active');
      paper.classList.remove('active');
      rock.classList.remove('active');
      computerScissors.classList.add('hide');
      computerRock.classList.add('hide');
      computerPaper.classList.add('hide');
      userScissors.classList.add('hide');
      userRock.classList.add('hide');
      userPaper.classList.add('hide');
    })
  });
  // end of code
};


