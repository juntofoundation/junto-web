import { createRouter, createWebHistory } from 'vue-router'
import AppView from './../views/app-view/AppView.vue';
import WelcomeView from './../views/welcome-view/WelcomeView.vue';

const routes = [
  {
    name: '/',
    component: WelcomeView
  },
  {
    path: '/home',
    name: 'home',
    component: AppView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
