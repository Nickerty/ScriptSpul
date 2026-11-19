<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { getProductById, updateProduct } from '../store';
import ProductForm from '../components/ProductForm.vue';

const route = useRoute();
const router = useRouter();

const product = getProductById(Number(route.params.id));

if (!product) {
    router.push('/overview');
}

</script>

<template>

<ProductForm v-if="product":product="product" @submitEvent="updateProduct"/>

</template>

<script></script>
