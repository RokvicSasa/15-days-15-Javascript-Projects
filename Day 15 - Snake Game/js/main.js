this.onload = function () {

  // GET VARIABLES

  var canvas = document.getElementById('snake-canvas');
  var ctx = canvas.getContext('2d');

  var btnLeft = document.getElementById('left');
  var btnTop = document.getElementById('top');
  var btnRight = document.getElementById('right');
  var btnDown = document.getElementById('down');
  var reset = document.getElementById('reset');
  var modal = document.getElementById('modal');

  // LOAD IMAGES

  var bgImage = new Image();
  var foodImg = new Image();
  var snakePart = new Image();
  var snakeHead = new Image();

  bgImage.src = 'https://i.imgur.com/Mi7mLoS.png';
  foodImg.src = 'https://i.imgur.com/tC29lKU.png';
  snakePart.src = 'https://i.imgur.com/3hwSUwr.png';
  snakeHead.src = 'https://i.imgur.com/LHkeEkD.png';

  // SET GAME

  var box = 16;

  var snake = [];
  //Get position of snake head
  snake[0] = {
    x: 9 * box,
    y: 10 * box
  }

  //Get radom food positions
  var food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
  }

  var score = 0;
  var direction;

  //Setup controls
  document.addEventListener('keydown', controls);
  //Setup controls
  btnLeft.addEventListener('click', function () {
    if (direction != 'RIGHT') {
      direction = "LEFT";
    }
  });
  btnTop.addEventListener('click', function () {
    if (direction != 'DOWN') {
      direction = "UP";
    }
  });
  btnRight.addEventListener('click', function () {
    if (direction != 'LEFT') {
      direction = "RIGHT";
    }
  });
  btnDown.addEventListener('click', function () {
    if (direction != 'UP') {
      direction = "DOWN";
    }
  });

  function controls(event) {
    if (event.keyCode == 37 && direction != 'RIGHT') {
      direction = "LEFT";
    } else if (event.keyCode == 38 && direction != 'DOWN') {
      direction = "UP";
    } else if (event.keyCode == 39 && direction != 'LEFT') {
      direction = "RIGHT";
    } else if (event.keyCode == 40 && direction != 'UP') {
      direction = "DOWN";
    }
  }
  function collision(head, array) {
    for (var i = 0; i < array.length; i++) {
      if (head.x == array[i].x && head.y == array[i].y) {
        return true;
      }
    }
    return false;
  }

  // DRAW FUNCTION

  function draw() {
    //draw background
    ctx.drawImage(bgImage, 0, 0);
    //draw snake
    for (var i = 0; i < snake.length; i++) {
      if ([i] == 0) {
        ctx.drawImage(snakeHead, snake[i].x, snake[i].y, box, box)
      } else {
        ctx.drawImage(snakePart, snake[i].x, snake[i].y, box, box)
      }
    }

    //draw food
    ctx.drawImage(foodImg, food.x, food.y);

    //old head position
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    //Change direction
    if (direction == 'LEFT') snakeX -= box;
    if (direction == 'UP') snakeY -= box;
    if (direction == 'RIGHT') snakeX += box;
    if (direction == 'DOWN') snakeY += box;

    //Colision with food
    if (snakeX == food.x && snakeY == food.y) {
      score++;
      food = {
        x: Math.floor(Math.random() * 17 + 1) * box,
        y: Math.floor(Math.random() * 15 + 3) * box
      }
    } else {
      snake.pop();
    }

    var newHead = {
      x: snakeX,
      y: snakeY
    }

    if (snakeX < box - 16 || snakeX > 18 * box || snakeY < 2 * box || snakeY > 18 * box || collision(newHead, snake)) {
      clearInterval(game);
      modal.style.display = "block";

      reset.addEventListener('click', function () {
        modal.style.display = "none";
        document.write(document.documentElement.outerHTML); document.close();
      })
    };

    snake.unshift(newHead);

    ctx.fillStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText(score, 5.5 * box, 1.6 * box);
  };

  // START GAME
  var game = setInterval(draw, 110);

  // end of code
};


