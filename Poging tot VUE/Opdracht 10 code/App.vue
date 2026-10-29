<script setup lang="ts">
import ThrownDice from './components/ThrownDice.vue';
import ScoreTable from './components/ScoreTable.vue';
import { ref } from 'vue'

const dice = ref([]);

</script>

<template>

<ThrownDice v-model="dice" />
<p>&nbsp;</p>
<ScoreTable v-model="dice" />

</template>

<style></style>
