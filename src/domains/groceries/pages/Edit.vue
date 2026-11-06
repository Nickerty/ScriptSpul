<script setup lang="ts">
import GroceryForm from '@/components/GroceryForm.vue';
import { getGroceryById, updateGrocery } from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const grocery = getGroceryById(route.params.id);

</script>

<template>
    
<p>hey wat is dit? {{ grocery }}</p>

<GroceryForm :grocery="grocery" @submitEvent="updateGrocery"/>

</template>

<script></script>
