<script setup lang="ts">
import { removeGrocery } from '@/domains/groceries/store';
import { computed } from 'vue'
import { RouterLink } from 'vue-router';

const groceries = defineModel();

const more = grocery => grocery.amount = grocery.amount + 1;

const less = grocery => {
    if (grocery.amount > 0) {
        grocery.amount = grocery.amount - 1;
    }
}

const getTotal = computed(() => {
    let total = 0;
    for (let i = 0; i < groceries.value.length; i++) {
        total += groceries.value[i].price * groceries.value[i].amount;
    }
    return total;
});

</script>

<template>

<ol>
    <li v-for="grocery in groceries">Naam: {{ grocery.name }}, Prijs: {{ grocery.price }}, 
        Aantal: {{ grocery.amount }} <button @click="more(grocery)">+</button><button @click="less(grocery)">-</button>
        Subtotaal: {{ grocery.amount * grocery.price }}<RouterLink :to="`/edit/${grocery.id}`" custom v-slot="{ navigate }"><button @click="navigate">Edit</button></RouterLink>
        <button @click="removeGrocery(grocery.id)">Delete</button>
    </li>
</ol>
<p>&nbsp;</p>
<p>Totaal: {{ getTotal }}</p>

</template>

<style></style>
