import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Edit from "./pages/Edit.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/:id/edit", name: "Edit", component: Edit, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
