let deck = {};
let playerCards = [];
let dealerCards = [];

const fillDeck = () => {
    const kleuren = ["harten", "schoppen", "klaver", "ruiten"];
    const plaatjes = ["aas", "boer", "koningin", "koning"];
    for (let i = 0; i < 4; i++) {
        for (let j = 2; j < 11; j++) { // standaard kaarten
            let kaart = "" + kleuren[i] + " " + j;
            deck[kaart] = 1;
        }
        for (let j = 0; j < plaatjes.length; j++) { // plaatjes
            let kaart = "" + kleuren[i] + " " + plaatjes[j];
            deck[kaart] = 1;
        }
    }
    deck = Object.entries(deck);
}

const deal = () => {
    let drawn = false;
    let card;
    while (!drawn) {
        card = draw();
        if (card[1] === 1) {
            card[1] = 0;
            drawn = true;
        }
    }
}

const draw = () => {
    let card;
    let drawn = false;
    while (!drawn) { //mogelijke infinite loop, niks kan misgaan
        const rand = Math.floor(Math.random() * 52) + 1;
        card = deck[rand];
        if (card[1] === 1) {
            deck[rand][1] = 0;
            drawn = true;
        }
    }
    return card;
}

fillDeck();
document.getElementById("start").addEventListener("click", deal);
