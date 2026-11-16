import { computed, ref } from "vue";

// State
export interface Product {
    id: number;
    name: string;
    actualAmount: number;
    minimumAmount: number;
}

let nextId = 0;

const defaultProducts: Product[] = [
    { id: nextId++, name: 'Boerenkool', actualAmount: 6, minimumAmount: 5 },
    { id: nextId++, name: 'Hutspot', actualAmount: 3, minimumAmount: 10 },
    { id: nextId++, name: 'Sputspot', actualAmount: 6, minimumAmount: 2 },
    { id: nextId++, name: 'Kolenboer', actualAmount: 20, minimumAmount: 20 },
    { id: nextId++, name: 'Stampot boernkool', actualAmount: 12, minimumAmount: 13 },
    { id: nextId++, name: 'Boernkool met worst', actualAmount: 2, minimumAmount: 253 },
    { id: nextId++, name: 'Ik kan geen goede producten meer bedenken', actualAmount: 52145673, minimumAmount: 1 },

]

const products = ref<Product[]>(defaultProducts);


// Getters
export const getAllProducts = computed(() => products.value);


// Actions

