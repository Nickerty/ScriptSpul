import { createMemoryHistory, createRouter } from 'vue-router';
import { groceryRoutes } from '../domains/groceries/routes';

const routes = groceryRoutes

export const router = createRouter({
      history: createMemoryHistory(),

    routes
});
