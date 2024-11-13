<template>

  <div class="w-full">
    <DataTable ref="dt" :value="products" dataKey="id" v-model:selection="productToBeDeleted" selectionMode="single"
      removableSort size="large">
      <template #header>
        <Button label="Export to CSV" @click="exportCSV" />
      </template>

      <Column field="name" sortable header="Nome"></Column>
      <Column field="price" sortable header="Preco"></Column>
      <Column field="description" sortable header="Descricao"></Column>
      <Column field="supplierId" sortable header="Id do Fornecedor"></Column>
      <Column field="" header="">
        <template #body="slotProps">
          <Button @click="openDrawer(slotProps.data)">Editar</Button>
        </template>
      </Column>
      <template #footer v-if="productToBeDeleted">
        <Button @click="deleteProduct(productToBeDeleted.id as string)">Deletar produto</Button>
      </template>
    </DataTable>
  </div>
  <Drawer v-model:visible="isDrawerOpen" position="right" :style="{ width: '50%' }">
    <UpdateProductForm :product="productToBeEdited as ProductDto"  />
  </Drawer>
</template>
<script lang="ts" setup>
import { Drawer } from 'primevue';
import type { ProductDto } from '@core/dto';
import { onMounted } from 'vue';
import { ref } from 'vue';
import UpdateProductForm from '../update-product-form/UpdateProductForm.vue';
const dt = ref()
const isDrawerOpen = ref(false)
const products = ref<ProductDto[]>([])
const productToBeDeleted = ref<ProductDto | null>(null)
const productToBeEdited = ref<ProductDto | null>(null)
const openDrawer = (product: ProductDto) => {
  productToBeEdited.value = product
  isDrawerOpen.value = true
}
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3333/products');
    if (!response.ok) throw new Error("API error");
    const result = await response.json();
    const data = result._body;
    products.value = data.map((item: any) => ({
      id: item.id,
      ...item.props
    }))
  } catch (err) {
    throw new Error("API error")
  }
}

const exportCSV = () => {

  dt.value.exportCSV()
}
const deleteProduct = async (productId: string) => {
  try {
    console.log(JSON.stringify({ productId }))
    await fetch("http://localhost:3333/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ productId })
    })

  } catch (err) {
    throw new Error("api error")
  }
}
onMounted(() => {
  fetchData()
})
</script>
