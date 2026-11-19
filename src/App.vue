<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>

<nav>
    <RouterLink to ="/create">Voeg een spiksplinternieuw product toe</RouterLink>
    <RouterLink to ="/overview">Het overzicht wacht op ons</RouterLink>
    <RouterLink to ="/order">Scheiße man, is er wel genoeg van alles?</RouterLink>
</nav>

<RouterView></RouterView>

</template>

<style></style>
