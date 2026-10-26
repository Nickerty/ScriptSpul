<script setup lang="ts">
import { ref } from 'vue'

const dice = defineModel();

const rollSomeDice = () => {
    dice.value.length = 0;
    for (let i = 0; i < 5; i++) {
        dice.value.push(Math.floor(Math.random() * 6) + 1);
    }
}

</script>

<template>

<li>
    <li v-for="roll in dice"> {{ roll }} </li>
</li>
<p>&nbsp;</p>
<button @click="rollSomeDice">Gooi die vierkante vrienden maar weer</button>

</template>

<style></style>
