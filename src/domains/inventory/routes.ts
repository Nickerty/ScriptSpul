import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";
import Overview from "./pages/Overview.vue";

export const inventoryRoutes = [
    { path: '/create', component: Create },
    { path: '/edit/:id', component: Edit },
    { path: '/overview', component: Overview }
];
