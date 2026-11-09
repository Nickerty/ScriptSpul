<script setup lang="ts">
import { router } from '@/router';
import { ref } from 'vue';

const props = defineProps({
    grocery: Object
})

const groceryCopy = ref({...props.grocery});

const emit = defineEmits(['submitEvent']);

const submitEvent = () => {
    if (groceryCopy.value.name) {
        emit('submitEvent', groceryCopy.value);
        router.push('/overview');
    }
}

</script>

<template>

<input v-model="groceryCopy.name" placeHolder="Naam van product" type="text">
<input v-model="groceryCopy.price" type="number">
<input v-model="groceryCopy.amount" type="number">
<button @click="submitEvent">Bevestig</button>

</template>

<style></style>
