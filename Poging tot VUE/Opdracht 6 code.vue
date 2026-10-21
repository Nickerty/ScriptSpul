<script setup lang="ts">
import { ref } from 'vue';

const index = ref(0);

const tasks = ref([
    { name: 'boodschappen doen', completed: true },
    { name: 'Oh mijn god ik moet nog de afwas doen neeeeeee', completed: false },
    { name: 'ook nog die stinkhond uitlaten', completed: false }
]);

</script>

<template>

<ol>
    <li v-for="task in tasks" :key="index">{{ task.name }}, {{  task.completed ? 'klaar mee' : 'moet nog' }} <button @click="task.completed = !task.completed">toggle</button></li>
</ol>

</template>

<style></style>
