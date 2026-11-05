import { computed, ref } from "vue";

// State
const groceries = ref([]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id: number) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery: Object) => groceries.value.push(grocery);
