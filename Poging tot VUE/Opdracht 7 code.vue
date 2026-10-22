<script setup lang="ts">
import { ref, computed } from 'vue';

const people = ref([
    { name: 'Jeaean', age: 2},
    { name: 'Pieieter', age: 35},
    { name: ' Eternal Clud', age: 9000000}
]);

const newName = ref(null);
const newAge = ref(null);

const addPerson = () => {
    if (newName.value && newAge.value) {
        people.value.push({ name: newName.value, age: newAge.value });
        newName.value = null;
        newAge.value = null;
    }
};

const poopyAssBabies = computed(() => {
    return people.value.filter(person => person.age < 18);
});

const stupidAssAdults = computed(() => {
    return people.value.filter(child => !poopyAssBabies.value.includes(child));
});

const totalPeople = computed(() => {
    return people.value.length;
});

const numberOfStinkyBabies = computed(() => {
    return poopyAssBabies.value.length;
});

</script>

<template>

<input v-model="newName" placeholder="Wo dis" type="text">
<input v-model.number="newAge" placeholder="How old" type="number">
<button @click="addPerson">Add</button>

<p>&nbsp;</p>

<ul>
    <b>Everybody ({{ totalPeople }} in total)</b>
    <li v-for="(guy, index) in people" :key="index">{{ guy }}</li>
    <b>Dumb Children ({{ numberOfStinkyBabies }} in total)</b>
    <li v-for="(dumbChild, index) in poopyAssBabies" :key="index">{{ dumbChild }}</li>
    <b>The Adults™</b>
    <li v-for="(dumbAdult, index) in stupidAssAdults" :key="index">{{ dumbAdult }}</li>
</ul>

</template>

<style></style>
