import { createRouter, createWebHistory } from 'vue-router'
import SupplierPage from '@/ui/components/pages/supplier/SupplierPage.vue' 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/suppliers',
      name: 'suppliers',
      component: SupplierPage,
    },
  ],
})

export default router
