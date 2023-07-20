// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      
    ],
  },
  {
    path: '/produtos',
    component: AppLayout,
    children: [
      {
        path: 'lista',
        name: 'Produtos.Lista',
        component: () => import('@/views/Produtos/ListarProdutos.vue'),
      },
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
