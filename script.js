const rollThemBones = () => {
    let dice = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    let throws = [0,0,0,0,0]
    const worpen = [document.getElementById("worp1"), document.getElementById("worp2"), document.getElementById("worp3"), document.getElementById("worp4"), document.getElementById("worp5")];
    for (let i = 0; i <throws.length; i++) {
        theThrow = getThrow();
        throws[i] = theThrow;
        worpen[i].textContent = theThrow;
        dice[theThrow] = dice[theThrow] + 1;
    } 
    console.log(throws);
    updateScore(dice);
}

const updateScore = dice => {
    updateTopScores(dice);
    updateBottomScores(dice);
}

const updateTopScores = dice => {
    const scores = [document.getElementById("ones"), document.getElementById("twos"), document.getElementById("threes"), document.getElementById("fours"), document.getElementById("fives"), 
    document.getElementById("ANDABUNCHOFSIXES")];

    for (let i = 0; i < scores.length; i++) {
        scores[i].textContent = dice[i + 1] * (i + 1); 
    }
    document.getElementById("totalOne").textContent = getDiceScore(dice);
}

const updateBottomScores = dice => {
    let total = 0;
    let shitDice = true;
    const diceScore = getDiceScore(dice);

    if (isOfAKind(3, dice)) { //Three of a Kind
        document.getElementById("threeOfAKind").textContent = diceScore;
        total = total + diceScore;
        shitDice = false;
    } else {
        document.getElementById("threeOfAKind").textContent = 0;
    }

    if (isOfAKind(4, dice)) { //Four of a kind
        document.getElementById("fourOfAKind").textContent = diceScore;
        total = total + diceScore;
    } else {
        document.getElementById("fourOfAKind").textContent = 0;
    }

    if (isFullHouse(dice)) { //Full house
        document.getElementById("fullHouse").textContent = 25;
        total = total + 25;
        shitDice = false;
    } else {
        document.getElementById("fullHouse").textContent = 0;
    }

    if (isStraight(4, dice)) { //Small straight
        document.getElementById("smallStraight").textContent = 30;
        total = total + 30;
        shitDice = false;
    } else {
        document.getElementById("smallStraight").textContent = 0;
    }

    if (isStraight(5, dice)) { //Large straight
        document.getElementById("bigStraight").textContent = 40;
        total = total + 40;
    } else {
        document.getElementById("bigStraight").textContent = 0;
    }

    if (isOfAKind(5, dice)) { //Yatzhee
        document.getElementById("yathzee").textContent = 50;
        total = total + 50;
    } else {
        document.getElementById("yatzhee").textContent = 0;
    }

    if (shitDice) { //Chance
        document.getElementById("garbage").textContent = diceScore;
        total = total + diceScore;
    } else {
        document.getElementById("garbage").textContent = 0;
    }

    document.getElementById("totalTwo").textContent = total;
    document.getElementById("totalOneAgain").textContent = diceScore;

    document.getElementById("grandTotal").textContent = total + diceScore;
}

const isOfAKind = (amount, dice) => {
    for (let i = 1; i <= 6; i++) {
        if (dice[i] >= amount) {
            return true;
        }
    }
    return false;
}

const isFullHouse = (dice) => {
    if (isOfAKind(3, dice)) {
        for (let i = 1; i <= 6; i++) {
            if (dice[i] === 2) {
                return true;
            }
        }
    }
    return false;
}

const isStraight = (amount, dice) => {
    let count = 0;
    for (let i = 1; i <= 6; i++) {
        if (dice[i] > 0) {
            count++;

            if (count === amount) {
                return true;
            }
        } else {
            count = 0;
        }
    }
    return false;
}

const getThrow = () => Math.floor(Math.random() * 6) + 1;

const getDiceScore = dice => {
    let diceScore = 0;
    let amountOfDice = Object.keys(dice).length;
    for (let i = 0; i < amountOfDice; i++) {
        diceScore = diceScore + dice[i + 1] * (i + 1);
    }
    return diceScore;
}

document.getElementById("button").addEventListener("click", rollThemBones);
