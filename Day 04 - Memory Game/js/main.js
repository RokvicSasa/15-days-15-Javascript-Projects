var cards = document.getElementsByClassName('box');

var cardIsFliped = false;
var cardIsLocked = false;
var firstCard;
var secondCard;
var isWin = false;

for (i=0;i<cards.length;i++) {
  cards[i].addEventListener('click',flipCard);
}

function flipCard() {
  if(cardIsLocked) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if(!cardIsFliped) {
    cardIsFliped = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  cardMatch();
  
}

function cardMatch() {
  let cardsMatch = firstCard.dataset.id === secondCard.dataset.id
  cardsMatch ? disableCards() : unflipCards()
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetCards();
}

function unflipCards() {
  cardIsLocked = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetCards();
  }, 1000)
}

function resetCards() {
  cardIsFliped = false;
  cardIsLocked = false;
  firstCard = null
  secondCard = null;
}
