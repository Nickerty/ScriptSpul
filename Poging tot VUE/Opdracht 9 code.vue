<script setup lang="ts">
import { ref } from 'vue'

const throws = ref([])

const rollSomeDice = () => {
    throws.value = [];
    for (let i = 0; i < 5; i++) {
        throws.value.push(getThrow());
    }

}

const getThrow = () => Math.floor(Math.random() * 6) + 1;

</script>

<template>

<li>
    <li v-for="roll in throws"> {{ roll }} </li>
</li>
<p>&nbsp;</p>
<button @click="rollSomeDice">Gooi die vierkante vrienden maar weer</button>

</template>

<style></style>
