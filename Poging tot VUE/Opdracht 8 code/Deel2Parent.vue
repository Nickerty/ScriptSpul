<script setup lang="ts">
import { ref } from 'vue';
import Deel2Child from './components/Deel2Child.vue'

const sharedMessage = ref('');

</script>

<template>

<ChildComponent v-model="sharedMessage" />
<p>Het bericht is {{ sharedMessage }}</p>

</template>

<style></style>
