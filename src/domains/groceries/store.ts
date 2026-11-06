import { computed, ref } from "vue";

// State
const groceries = ref([]);
let nextId = 0;

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id: number) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery: Object) => {
    grocery.id = nextId++;
    groceries.value.push(grocery);
}

export const updateGrocery = (updatedGrocery: Object) => {
    const index = groceries.value.findIndex(grocery => grocery.id = updatedGrocery.id);
    groceries.value[index] = updateGrocery;
}
