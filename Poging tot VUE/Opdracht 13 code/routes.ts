import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";
import Overview from "./pages/Overview.vue";

export const groceryRoutes = [
    { path: '/create', component: Create },
    { path: '/edit', component: Edit },
    { path: '/overview', component: Overview }
];
