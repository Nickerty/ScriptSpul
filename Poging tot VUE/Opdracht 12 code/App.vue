<script setup lang="ts">
import { ref } from 'vue'
import GroceriesTable from './components/GroceriesTable.vue';

const producten = ref([]);

</script>

<template>

<GroceriesTable v-model="producten" />

</template>

<style></style>
