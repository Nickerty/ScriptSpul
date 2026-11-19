<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import type { Product } from '../store';

const inventory = defineModel<Product[]>();

</script>
<template>

<table>
    <thead>
        <tr>
            <th>Naam:</th>
            <th>Aantal:</th>
            <th>Gewenst Aantal:</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in inventory" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
                <input v-model="item.actualAmount" type="number"/>
            </td>
            <td>{{ item.minimumAmount }}</td>
            <RouterLink :to="`/edit/${item.id}`" custom v-slot="{ navigate }"><button @click="navigate">Bewerk</button></RouterLink>
        </tr>
    </tbody>
</table>

</template>

<style></style>
