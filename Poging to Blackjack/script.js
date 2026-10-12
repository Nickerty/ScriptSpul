let deck;
let playerCards;
let dealerCards;
let playerScore;
let dealerScore;

const setupGame = () => {
    //reset all waardes
    deck = [];
    playerCards = [];
    dealerCards = []
    playerScore = 0;
    dealerScore = 0;

    //vul het deck
    const kleuren = ["harten", "schoppen", "klaver", "ruiten"];
    const plaatjes = ["aas", "boer", "koningin", "koning"];
    for (let i = 0; i < 4; i++) {
        for (let j = 2; j < 11; j++) { // standaard kaarten
            let kaart = "" + kleuren[i] + " " + j;
            deck.push(kaart);
        }
        for (let j = 0; j < plaatjes.length; j++) { // plaatjes
            let kaart = "" + kleuren[i] + " " + plaatjes[j];
            deck.push(kaart);
        }
    }
}

const deal = () => {
    dealerCards.push(draw());
    dealerCards.push(draw());
    playerCards.push(draw());
    playerCards.push(draw());

    show("player");
    show("dealer");

    document.getElementById("playerHand").textContent = playerCards;
    document.getElementById("dealerHand").textContent = dealerCards[1] + " and a second, hidden card";

    playerScore = calculateScore(playerCards);
    dealerScore = calculateScore(dealerCards.slice(1, 2));

    document.getElementById("playerScore").textContent = "Score: " + playerScore;
    document.getElementById("dealerScore").textContent = "Score: " + dealerScore;

    if (playerScore === 21) {
        result("Holy SHIT you got the Blackjack within the game of Blackjack!!!!!!!");
        gameOver();
    }

    show("hit");
    show("pass");
}

const calculateScore = cards => {
    let score = 0;
    let aceCount = 0;
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let cardValue = card.slice(card.indexOf(" ") + 1);
        switch (cardValue) {
            case "boer":
            case "koningin":
            case "koning":
                score = score + 10;
                break;
            case "aas":
                aceCount = aceCount + 1;
                score = score + 11;
                break;
            default:
                score = score + parseInt(cardValue);
        }
    }

    while (score > 21 && aceCount > 0) {
        score = score - 10;
        aceCount = aceCount - 1;
    }

    return score;
}

const hit = () => {
    playerCards.push(draw());
    document.getElementById("playerHand").textContent = playerCards;
    playerScore = calculateScore(playerCards);
    document.getElementById("playerScore").textContent = "Score: " + playerScore;
    // update html met spelerscore
    if (playerScore === 21) {
        result("You got 21 that's a win. What does Blackjack have to do with Jack Black anyway?");
        document.getElementById("dealerScore").textContent = "score: " + calculateScore(dealerCards);
        document.getElementById("dealerHand").textContent = dealerCards;
        gameOver();
    } else if (playerScore > 21) {
        result("lmaaaao busted dickhead");
        document.getElementById("dealerScore").textContent = "score: " + calculateScore(dealerCards);
        document.getElementById("dealerHand").textContent = dealerCards;
        gameOver();
    }
}

const pass = () => { //beurt van de dealer
    dealerScore = calculateScore(dealerCards);
    document.getElementById("dealerScore").textContent = "score: " + dealerScore; //laat de ware dealerscore zien
    document.getElementById("dealerHand").textContent = dealerCards; //laat de verborgen kaart zien
    let dealerPlaying = true;
    while (dealerPlaying) {
        if (dealerScore <= 16) {
            if (dealerScore === 16 && playerScore === 16) {
                dealerPlaying = false;
            }
            dealerCards.push(draw());
            document.getElementById("dealerHand").textContent = dealerCards;
            dealerScore = calculateScore(dealerCards);
            document.getElementById("dealerScore").textContent = "score: " + dealerScore;
        } else if (dealerScore >= 17) {
            dealerPlaying = false;
        }
    }
    if (dealerScore > 21) {
        result("Eyyy dealer got busted YOU WON, GREAT INNIT?");
        gameOver();
    } else if (dealerScore === 21) {
        result("Dealer got 21 eat shit dumbass");
        gameOver();
    } else if (playerScore > dealerScore) {
        result("You have outblackjacked the dealer, John Blackjack - Master of blackjack. Well done!");
        gameOver();
    } else if (playerScore === dealerScore) {
        result("boring tie");
        gameOver();
    } else {
        result("You're not going to believe this but the dealer got more points than you, resulting in a crushing defeat");
        gameOver();
    }
}

const gameOver = () => {
    hide("hit");
    hide("pass");
    show("again");
}

const replay = () => {
    document.getElementById("result").textContent = "";
    hide("again");
    setupGame();
    deal();
}

const draw = () => deck.splice(Math.floor(Math.random() * deck.length), 1)[0];

const hide = element => document.getElementById(element).style.display = "none";

const show = element => document.getElementById(element).style.display = "";

const result = text => document.getElementById("result").textContent = text;


setupGame();

document.getElementById("start").addEventListener("click", function() {
    deal();
    this.style.display = "none"
});
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("pass").addEventListener("click", pass);
document.getElementById("again").addEventListener("click", function() {
    replay();
    this.style.display = "none"
});
