<script setup lang="ts">
import { getAllProducten } from '@/domains/groceries/store';
import { ref } from 'vue';

const props = defineProps({
    grocery: Object
})

const groceryCopy = ref(structuredClone(props.grocery));

// const addProduct = () => {
//     if (pName.value && pPrice.value && pAmount.value) {
//         const product = {name: pName.value, cost: pPrice.value, amount: pAmount.value};
//         producten.value.push(product)
//         pName.value = null;
//         pPrice.value = null;
//         pAmount.value = null;
//     }
// }



</script>

<template>

<input v-model="pName" placeHolder="Naam van product" type="text">
<input v-model="pPrice" placeHolder="Prijs van product" type="number">
<input v-model="pAmount" placeHolder="Aantal producten" type="number">

</template>

<style></style>

