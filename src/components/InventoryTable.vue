<script setup lang="ts">
import type { Product } from '@/domains/inventory/store';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const inventory = defineModel<Product[]>();
const amount = ref()

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
        </tr>
    </tbody>
</table>

</template>

<style></style>
