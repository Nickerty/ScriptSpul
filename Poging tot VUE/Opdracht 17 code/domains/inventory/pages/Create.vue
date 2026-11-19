<script setup lang="ts">
import ProductForm from '../components/ProductForm.vue';
import { addProduct } from '../store';


const product = {id: 0, name: '', actualAmount: 0, minimumAmount: 0};

</script>

<template>

<ProductForm :product="product" @submitEvent="addProduct"/>

</template>

<style></style>
