import { createRouter } from 'vue-router'

const routes = [
    { path: '/pages', component: Create },
    { path: '/pages', component: Edit },
    { path: '/pages', component: Overview }
];

export const router = createRouter({
    routes
});
