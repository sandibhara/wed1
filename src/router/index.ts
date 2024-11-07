import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Preview from '../views/Preview.vue'
import CreateInvitation from '../views/CreateInvitation.vue'
import EditInvitation from '../views/EditInvitation.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/create',
      name: 'create',
      component: CreateInvitation
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditInvitation
    },
    {
      path: '/preview/:id',
      name: 'preview',
      component: Preview
    },
    {
      path: '/invitation/:id',
      name: 'public-invitation',
      component: Preview
    }
  ]
})

export default router