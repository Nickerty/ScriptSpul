<script setup lang="ts">
import { computed } from 'vue';
import InventoryTable from '../components/InventoryTable.vue';
import { getAllProducts } from '../store';
import { router } from '@/router/index.ts';

const products = getAllProducts;

const filteredProducts = computed(() => {
    return products.value.filter(product => product.actualAmount < product.minimumAmount);
});

</script>

<template>

<InventoryTable v-model="filteredProducts" />
<button @click="router.push('/overview')">Bestel alles bij met deze placebo knop</button>

</template>

<style></style>
