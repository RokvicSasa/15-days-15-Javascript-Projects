const questions = [
  {
    question: 'Who created The Simpsons?',
    answers: ['Matt Groening', 'Steave Jobs', 'Mark Johnson', 'Steave Nicks'],
    correct: 'Matt Groening',
  },
  {
    question: 'How many quarters are there in an NFL football game?',
    answers: ['1', '3', '4', '2'],
    correct: '4',
  },
  {
    question: 'Which year did Hurricane Katrina occur in?',
    answers: ['2001', '2006', '2007', '2005'],
    correct: '2005',
  },
  {
    question: 'Who hosted the summer olympics in 1932?',
    answers: ['Sapporo', 'Los Angeles', 'Tokyo', 'London'],
    correct: 'Los Angeles',
  },
  {
    question: 'Elvis Presley collected this item from nearly every city he performed in.',
    answers: ['Concert tickets', 'Banana Sandwiches', 'Peanut Butter', 'Police Badges'],
    correct: 'Police Badges',
  },
  {
    question: 'Earth is closest to the size of...',
    answers: ['Venus', 'Mercury', 'Jupiter', 'Mars'],
    correct: 'Venus',
  },
  {
    question: 'How many years did it take to build the Taj Mahal?',
    answers: ['30', '23', '19', '22'],
    correct: '22',
  },
  {
    question: 'Which animal is known to kill more people than plane crashes?',
    answers: ['Donkeys', 'Lions', 'Camels', 'Tigers'],
    correct: 'Donkeys',
  },
  {
    question: 'What date was Gmail launched by Google?',
    answers: ['Jan. 1st, 2004', 'April 1st, 2004', 'May 1st, 2004', 'Nov. 1st 2004'],
    correct: 'April 1st, 2004',
  },
  {
    question: 'What year was the first Sneaker invented?',
    answers: ['1919', '1923', '1918', '1917'],
    correct: '1917',
  }              
];

let questionInput = document.querySelector('.questionInput');
let progress = document.querySelector('.progress');

let choiceInput = document.querySelectorAll('.choiceInput');
let choice = document.querySelectorAll('.choice');

let correctModal = document.querySelector('.correct-modal');
let wrongModal = document.querySelector('.wrong-modal');
let overModal = document.querySelector('.over-modal');
let score = document.querySelector('.score');

let questionNumber = 0;
let userScore = 0;

function getQuestion() {

  if (questionNumber === questions.length) {

    overModal.classList.remove('hide');
    score.innerHTML = 'Your Score is: ' + userScore + ' / ' + questions.length;

  }else {
    questionInput.innerHTML = questions[questionNumber].question;

    choiceInput[0].innerHTML = questions[questionNumber].answers[0];
    choiceInput[1].innerHTML = questions[questionNumber].answers[1];
    choiceInput[2].innerHTML = questions[questionNumber].answers[2];
    choiceInput[3].innerHTML = questions[questionNumber].answers[3];
  }

}

for (i = 0; i < choice.length; i++) {

  let index = i;
  choice[index].addEventListener('click', function () {

    if (choiceInput[index].textContent === questions[questionNumber].correct) {

      correctModal.classList.remove('hide');
      setTimeout(function () { 
        correctModal.classList.add('hide');
        userScore++;
        questionNumber++;

        progress.innerHTML = questionNumber + 1 + ' / ' + questions.length;
        getQuestion();
      }, 1000);

    } else {

      wrongModal.classList.remove('hide');
      setTimeout(function () {
        wrongModal.classList.add('hide');
        questionNumber++;
        progress.innerHTML = questionNumber + 1 + ' / ' + questions.length;
        getQuestion();
      }, 1000);
    }

  })
}

getQuestion();

progress.innerHTML = questionNumber + 1 + ' / ' + questions.length;  









