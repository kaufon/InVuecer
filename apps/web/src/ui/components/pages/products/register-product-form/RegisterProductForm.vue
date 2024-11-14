<template>

  <form @submit.prevent="createProduct">
    <div class="grid grid-cols-2 gap-4 w-full">

      <InputText v-model="newProduct.name" placeholder="Nome" type="text" />


      <InputNumber v-model="newProduct.price" placeholder="Preco" type="number" />


      <InputText v-model="newProduct.description" type="tel" name="phone" placeholder="Descriçao" />


      <Dropdown v-model="newProduct.supplierId" :options="suppliers" option-value="id" option-label="name"
        placeholder="Fornecedor" />
    </div>
    <Button label="Cadastrar" class=" mt-4" type="submit" />
  </form>
</template>
<script setup lang="ts">

import type { SupplierDto, ProductDto } from '@core/dto';
import { onMounted, ref } from 'vue';
const newProduct = ref<ProductDto>({} as ProductDto)
const suppliers = ref<SupplierDto[]>({} as SupplierDto[])
async function createProduct() {
  try {
    const reponse = await fetch('http://localhost:3333/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct.value)
    })
    if (!reponse.ok) throw new Error("Api error")
  } catch (err) {
    console.error(err)
  }
}
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3333/suppliers');
    const result = await response.json()
    const data = result._body

    suppliers.value = data.map((item: any) => ({
      id: item.id,
      ...item.props
    }))
  } catch (err) {
    throw new Error("api error");
  }

})
</script>
