import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layout/MainLayout.vue";
import MainPage from "@/views/MainPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'main',
        component: MainPage,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
