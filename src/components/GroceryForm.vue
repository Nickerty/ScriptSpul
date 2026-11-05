<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    grocery: Object
})

const groceryCopy = ref(structuredClone(props.grocery));

const emit = defineEmits(['submitEvent']);

const submitEvent = () => {
    emit('submitEvent', groceryCopy.value);
}

</script>

<template>

<input v-model="groceryCopy.name" placeHolder="Naam van product" type="text">
<input v-model="groceryCopy.price" type="number">
<input v-model="groceryCopy.amount" type="number">
<button @click="submitEvent">Voeg toe</button>

</template>

<style></style>

