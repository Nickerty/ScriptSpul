const button = document.getElementById("button");
const worpen = [document.getElementById("worp1"), document.getElementById("worp2"), document.getElementById("worp3"), document.getElementById("worp4"), document.getElementById("worp5")]
const deelEenScores = [document.getElementById("ones"), document.getElementById("twos"), document.getElementById("threes"), document.getElementById("fours"), document.getElementById("fives"), 
    document.getElementById("ANDABUNCHOFSIXES"), ];
const deelTweeScores = [document.getElementById("threeOfAKind"), document.getElementById("fourOfAKind"), document.getElementById("threeOfAKind"), document.getElementById("fullHouse"), 
    document.getElementById("smallStraight"), document.getElementById("bigStraight"), document.getElementById("yatzhee"), document.getElementById("garbage")] //deze moet weg hoor
let diceScore = 0;
let shitDice = true;
    
const rollThemBones = () => {
    let count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    let throws = [0,0,0,0,0]
    for (let i = 0; i <throws.length; i++) {
        theThrow = getThrow();
        throws[i] = theThrow;
        worpen[i].textContent = theThrow;
        count[theThrow] = count[theThrow] + 1;
    } 
    console.log(throws);
    updateScore(count);
}

const updateScore = count => {
    updateTopScores(count);
    updateBottomScores(count);
}

const updateTopScores = count => {
    for (let i = 0; i < deelEenScores.length; i++) {
        deelEenScores[i].textContent = count[i + 1] * (i + 1); 
        diceScore = diceScore + count[i + 1] * (i + 1);
    }
    document.getElementById("totalOne").textContent = diceScore;
}

const updateBottomScores = count => {
    let total = 0;
    if (ofAKind(3, count)) {
        document.getElementById("threeOfAKind").textContent = diceScore;
    } else {
        document.getElementById("threeOfAKind").textContent = 0;
    }

}

const ofAKind = (amount, count) => {
    console.log(count.amount);
    let didWeManage = false;
    for (let i = 0; i < count.amount; i++) {
        console.log(count[i]);
        if (count[i] >= amount) {
            didWeManage = true;
            console.log("WE DID IT BOYS");
        }
    }
    return didWeManage;
}

const getThrow = () => Math.floor(Math.random() * 6) + 1;

button.addEventListener("click", rollThemBones);
