<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">

      <nav class="bg-black h-12 items-center gap-6 justify-center flex text-2xl text-white font-medium">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Produtos</RouterLink>
        <RouterLink to="/suppliers">Fornecedores</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
