import { createRouter, createWebHistory } from 'vue-router'
import SupplierPage from '@/ui/components/pages/supplier/SupplierPage.vue' 
import ProductsPage from '@/ui/components/pages/products/ProductsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/suppliers',
      name: 'suppliers',
      component: SupplierPage,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsPage,
    }
  ],
})

export default router
