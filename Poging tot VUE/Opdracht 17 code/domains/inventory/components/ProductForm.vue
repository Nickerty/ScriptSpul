<script setup lang="ts">
import { router } from '@/router';
import { ref } from 'vue';
import type { Product } from '../store';

const props = defineProps<{
    product: Product;
}>();

const productCopy = ref<Product>({...props.product});

const emit = defineEmits(['submitEvent']);

const submitEvent = () => {
    if (productCopy.value.name) {
        emit('submitEvent', productCopy.value);
        router.push('/overview');
    }
}

</script>

<template>

<input v-model="productCopy.name" placeHolder="Naam van product" type="text">
<input v-model="productCopy.actualAmount" type="number">
<input v-model="productCopy.minimumAmount" type="number">
<button @click="submitEvent">Bevestig</button>
<button @click="router.push('/overview')">Annuleer</button>

</template>

<style></style>
