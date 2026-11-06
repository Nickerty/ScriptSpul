<script setup lang="ts">
import GroceryForm from '@/components/GroceryForm.vue';
import { addGrocery } from '../store';

const grocery = {id: 0, name: '', price: 0, amount: 0};

</script>

<template>

<GroceryForm :grocery="grocery" @submitEvent="addGrocery"/>


</template>

<style></style>
