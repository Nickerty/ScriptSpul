<script setup lang="ts">
import InventoryTable from '../components/InventoryTable.vue';
import { getAllProducts } from '../store';

const products = getAllProducts;

</script>

<template>

<InventoryTable v-model="products" />

</template>

<style></style>
