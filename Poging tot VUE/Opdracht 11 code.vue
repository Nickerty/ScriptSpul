<script setup lang="ts">
import { computed, ref } from 'vue'

const producten = ref([]);
const pName = ref(null);
const pPrice = ref(null);

const addProduct = () => {
    if (pName.value && pPrice.value) {
        const product = {name: pName.value, cost: pPrice.value, amount: 1};
        producten.value.push(product);
        pName.value = null;
        pPrice.value = null;
    }
}

const more = product => product.amount = product.amount + 1;

const less = product => {
    if (product.amount > 0) {
        product.amount = product.amount - 1;
    }
}

const getTotal = computed(() => {
    let total = 0;
    for (let i = 0; i < producten.value.length; i++) {
        total += producten.value[i].cost * producten.value[i].amount;
    }
    return total;
});

</script>

<template>

<ol>
    <li v-for="product in producten">Naam: {{ product.name }}, Prijs: {{ product.cost }}, Aantal: {{ product.amount }} <button @click="more(product)">+</button><button @click="less(product)">-</button></li>
</ol>
<p>&nbsp;</p>
<p>Totaal: {{ getTotal }}</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<input v-model="pName" placeHolder="Naam van product" type="text">
<input v-model="pPrice" placeHolder="Prijs van product" type="number">
<button @click = "addProduct">Jas 'm erin</button>

</template>

<style></style>
