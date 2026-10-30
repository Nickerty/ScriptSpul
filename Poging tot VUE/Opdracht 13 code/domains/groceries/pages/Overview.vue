<script setup lang="ts">
import GroceriesTable from '@/components/GroceriesTable.vue';
import { ref } from 'vue'

const producten = ref([]);

</script>

<template>

    <p>test</p>

<GroceriesTable v-model="producten" />

</template>

<style></style>
