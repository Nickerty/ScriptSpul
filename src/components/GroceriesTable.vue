<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router';

const producten = defineModel();

const more = product => product.amount = product.amount + 1;

const less = product => {
    if (product.amount > 0) {
        product.amount = product.amount - 1;
    }
}

const getTotal = computed(() => {
    let total = 0;
    for (let i = 0; i < producten.value.length; i++) {
        total += producten.value[i].price * producten.value[i].amount;
    }
    return total;
});

</script>

<template>

<ol>
    <li v-for="product in producten">Naam: {{ product.name }}, Prijs: {{ product.price }}, 
        Aantal: {{ product.amount }} <button @click="more(product)">+</button><button @click="less(product)">-</button>
        Subtotaal: {{ product.amount * product.price }}<RouterLink :to="`/edit/${product.id}`" custom v-slot="{ navigate }"><button @click="navigate">Edit</button></RouterLink></li>
</ol>
<p>&nbsp;</p>
<p>Totaal: {{ getTotal }}</p>

</template>

<style></style>
