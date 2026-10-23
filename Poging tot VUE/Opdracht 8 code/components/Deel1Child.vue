<script setup lang="ts">
defineProps({
    message: String,
});

const emit = defineEmits(['updateMessage']);

const emitEvent = () => {
    emit('updateMessage', 'Oooooh that life');
}

</script>

<template>

<p>{{ message }}</p>

<button @click="emitEvent">Het is tijd voor een nieuwe tekst</button>

</template>

<style></style>
