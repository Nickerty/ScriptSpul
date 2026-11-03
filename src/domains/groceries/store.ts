import { computed, ref } from 'vue'

//state

const producten = ref([]);

//getters

export const getAllProducten = computed(() => producten.value);

//actions
