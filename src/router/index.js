import { createRouter, createWebHistory } from 'vue-router'
import HomeFirefoxView from '../views/HomeFirefoxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeFirefoxView
    },
    {
      path: '/github',
      name: 'github',
      component: () => import('../views/GithubView.vue')
    },
    {
      path: '/instagram',
      name: 'instagram',
      component: () => import('../views/InstagramView.vue')
    },
    {
      path: '/linkedin',
      name: 'linkedin',
      component: () => import('../views/LinkedinView.vue')
    }
  ]
})

export default router
