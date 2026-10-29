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

<!-- <script setup lang="ts">
import { ref } from 'vue'
import GroceriesTable from './components/GroceriesTable.vue';

const producten = ref([]);

</script>

<template>

<GroceriesTable v-model="producten" />

</template>

<style></style> -->
