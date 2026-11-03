<script setup lang="ts">
import GroceriesTable from '@/components/GroceriesTable.vue';
import { getAllProducten } from '../store';

const producten = getAllProducten;

</script>

<template>

<GroceriesTable v-model="producten" />

</template>

<style></style>
