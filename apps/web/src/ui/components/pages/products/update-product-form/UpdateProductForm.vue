<template>

  <form @submit.prevent="updateProduct">
    <div class="grid grid-cols-2 gap-6">
      <InputText v-model="localProduct.name" placeholder="Nome" type="text" />
      <InputText v-model="localProduct.description" placeholder="Descricao" type="text" />
      <InputNumber v-model="localProduct.price" placeholder="Preco" type="number" />
      <Dropdown v-model="localProduct.supplierId" :options="suppliers" option-value="id" option-label="name"
        placeholder="Fornecedor" />
    </div>
    <Button label="Cadastrar" class=" mt-4" type="submit" />
  </form>
</template>
<script setup lang="ts">

import type { ProductDto, SupplierDto } from '@core/dto';
import type { PropType } from 'vue';
import { onMounted, ref } from 'vue';
const props = defineProps({
  product: {
    type: Object as PropType<ProductDto>,
    required: true
  }
})
const localProduct = ref({ ...props.product })
const suppliers = ref<SupplierDto[]>([])
async function updateProduct() {
  try {
    const response = await fetch(`http://localhost:3333/products/${props.product.id as string}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(localProduct.value),
    })
    if (!response.ok) throw new Error("Error updating product data")
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
