import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //PAGES THAT DOESNT REQUIRE AUTH
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Welcome.vue')
    },
  ]
})

export default router
