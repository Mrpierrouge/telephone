import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'
import HomeView from '../views/HomeView.vue'
import JournalView from '../views/JournalView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/journal',
      name: 'Journal',
      component: JournalView
    },
    {
      path: '/clavier',
      name: 'Appeler',
      component: ClavierView
    }
  ]
})

export default router
