<script setup lang="ts">
import { ref, reactive } from 'vue';

const clicks = ref(0);

const person = reactive({
    firstName: "",
    country: ''
});

const incrementClicks = () => {
    clicks.value++;
}

const changeCountry = newCountry => {
    person.country = newCountry;
}

</script>

<template>

<p>Het is {{ person.firstName }} uit {{ person.country }}, en die heeft {{ clicks }} keer op het knopje gedrukt</p>

<p>&nbsp;</p>

<button @click="incrementClicks">Klik hier</button>
<button @click="changeCountry('Nederland')">Nederland</button>
<button @click="changeCountry('België')">Een vies land onder ons</button>

<input v-model="person.firstName" placeholder="Wat is je naam">

</template>

<style></style>
