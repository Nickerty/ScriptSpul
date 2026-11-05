<script setup lang="ts">
import GroceriesTable from '@/components/GroceriesTable.vue';
import { getAllGroceries } from '../store';

const groceries = getAllGroceries;


</script>

<template>

<GroceriesTable v-model="groceries" />

</template>

<style></style>
