<script setup lang="ts">
import { ref } from 'vue';
import deel1Child from './components/Deel1Child.vue'

const message = ref("Hier is een bericht");

const handleMessage = (newMessage) => {
    message.value = newMessage;
}
</script>

<template>

<ChildComponent :message="message" @updateMessage="handleMessage" />

</template>