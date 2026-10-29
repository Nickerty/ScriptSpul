<script setup lang = 'ts'>
import { computed, ref } from 'vue'

const dice = defineModel();

const countDice = computed(() => {
    const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    dice.value.forEach(die => {
        count[die]++;
    });

    return count;
});

const ones = computed(() => countDice.value[1] * 1);
const twos = computed(() => countDice.value[2] * 2);
const threes = computed(() => countDice.value[3] * 3);
const fours = computed(() => countDice.value[4] * 4);
const fives = computed(() => countDice.value[5] * 5);
const sixes = computed(() => countDice.value[6] * 6);

const diceTotal = computed(() => {
    return ones.value + twos.value + threes.value + fours.value + fives.value + sixes.value;
});

const threeOfAKind = computed(() => isOfAKind(3, countDice.value) ? diceTotal.value : 0);

const fourOfAKind = computed(() => isOfAKind(4, countDice.value) ? diceTotal.value : 0);

const fullHouse = computed(() => isFullHouse(countDice.value) ? 25 : 0);

const smallStraight = computed(() => isStraight(4, countDice.value) ? 30 : 0);

const bigStraight = computed(() => isStraight(5, countDice.value) ? 40 : 0);

const yathzee = computed(() => isOfAKind(5, countDice.value) ? 50 : 0);

const partTwoTotal = computed(() => threeOfAKind.value + fourOfAKind.value + fullHouse.value + smallStraight.value + bigStraight.value + yathzee.value + diceTotal.value);


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

</script>

<template>
<table id = scoreDeelEen>
    <tr>
        <th>Deel 1</th>
        <th>Punten telling</th>
        <th>1e spel</th>
        <th>2e spel</th>
        <th>3e spel</th>
        <th>4e spel</th>
        <th>5e spel</th>
        <th>6e spel</th>
    </tr>
    <tr>
        <td>Enen</td>
        <td>Tel alle Enen</td>
        <td>{{ ones }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Tweeën</td>
        <td>Tel alle Tweeën</td>
        <td >{{ twos }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Drieën</td>
        <td>Tel alle Drieën</td>
        <td >{{ threes }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Vieren</td>
        <td>Tel alle Vieren</td>
        <td >{{ fours }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Vijven</td>
        <td>Tel alle Vijven</td>
        <td >{{ fives }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Zessen</td>
        <td>Tel alle Zessen</td>
        <td>{{ sixes }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Totaal aantal punten</td>
        <td></td>
        <td >{{ diceTotal }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
<table id = scoreDeelTwee>
    <tr>
        <th>Deel 2</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td>Three of a kind</td>
        <td>3 dezelfde</td>
        <td>Totaal v.d. 5 stenen</td>
        <td >{{ threeOfAKind }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Carré</td>
        <td>4 dezelfde</td>
        <td>Totaal v.d. 5 stenen</td>
        <td >{{ fourOfAKind }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Full House</td>
        <td>2 + 3 dezelfde</td>
        <td>25 punten</td>
        <td>{{ fullHouse }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Kleine straat</td>
        <td>4 opeenvolgende nummers</td>
        <td>30 punten</td>
        <td>{{ smallStraight }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Grote Straat</td>
        <td>5 opeenvolgende nummers</td>
        <td>40 punten</td>
        <td>{{ bigStraight }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Yathzee</td>
        <td>5 dezelfde</td>
        <td>50 punten</td>
        <td> {{ yathzee }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Change</td>
        <td>vrije keuze</td>
        <td>Totaal v.d. 5 stenen</td>
        <td>{{ diceTotal }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Totaal</td>
        <td>van de onderste helft</td>
        <td></td>
        <td >{{ partTwoTotal }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Totaal</td>
        <td>van de bovenste helft</td>
        <td></td>
        <td>{{ diceTotal }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Totaal Generaal</td>
        <td></td>
        <td></td>
        <td>{{ diceTotal + partTwoTotal }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

</template>

<style></style>
