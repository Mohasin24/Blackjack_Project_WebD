let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let isStarted = false;

let messageEl = document.getElementById("msg-elm");
let message = "";

let sumEl = document.getElementById("sum_el");

let cardsEl = document.getElementById("cards_el");

let cards = [];

function startGame() {


    if (! isStarted) {
        isStarted = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();

        cards = [firstCard, secondCard];

        sum = firstCard + secondCard;

        isAlive = true;

        renderGame();
    }
    else
    {
        alert("Game is already started!");
    }
}

function getRandomCard() {

    let num = Math.floor(13 * Math.random()) + 1;

    if (num === 1) {
        return 11;
    }

    if (num > 10) {
        return 10;
    }

    return num;
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card!😊";
    } else if (sum === 21) {
        message = "Wohoo! You have got blackjack.🥳";
        hasBlackJack = true;
    } else {
        message = "You are out of the game! 😭";
        isAlive = false;
    } cardsEl.textContent = "Card's : "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }


    sumEl.textContent = "Sum :  " + sum;
    messageEl.textContent = message;
}


function newCard() {

    if (isAlive && ! hasBlackJack) {
        let thirdCard = getRandomCard();
        cards.push(thirdCard);

        sum += thirdCard;

        renderGame();
    }
    else if(!isStarted){
        alert("Please start the game first!")
    }
    else if(hasBlackJack)
    {
        alert("You have got blackjack. Please restart the game!");
    }
    else if(!isAlive)
    {
        alert("Sorry, you are out of the game!");
    }
}

function restartGame() 
{
    isStarted = false;
    hasBlackJack = false;
    isAlive = false;

    messageEl.textContent = "Want to play a round?";
    cardsEl.textContent = "Card's : ";
    sumEl.textContent = "Sum : ";

}

