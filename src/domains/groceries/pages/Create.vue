<script setup lang="ts">
import GroceryForm from '@/components/GroceryForm.vue';

const grocery = {name: '', price: 0, amount: 0};

// const addProduct = (grocery) => {
//     if (grocery.name && grocery.price && grocery.amount) {
//         // const product = {name: pName.value, cost: pPrice.value, amount: pAmount.value};
//         // emit('submitEvent', grocery);
//         // producten.value.push(grocery) //en wat is product
//         // pName.value = null; //moet dit nog? Het is een kopie kan ik hem niet gewoon wegjatsen op dit punt?
//         // pPrice.value = null;
//         // pAmount.value = null;
//     }
// } 

</script>

<template>

<GroceryForm :grocery="grocery" @submitEvent="addGrocery"/>

</template>

<style></style>
