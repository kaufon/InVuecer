<template>
  <form @submit.prevent="createReceipt">
    <div class="">
      <div>
        <InputText v-model="newReceipt.consumerCpf" placeholder="Cpf do receptor" />

        <MultiSelect v-model="selectedProducts" :options="products" option-label="name" placeholder="Products"
          @change="updateProductsWithQuantities" />
      </div>

      <div v-for="(product, index) in newReceipt.products" :key="product.id"
        class="flex gap-4 flex-row items-center p-4">
        <span>{{ product.name }}</span>
        <InputNumber v-model="newReceipt.products[index].quantity" placeholder="Quantity" type="number" />
      </div>
    </div>
    <Button type="submit">Registrar lancamento</Button>
  </form>
</template>

<script setup lang="ts">
import type { ProductDto, ReceiptDto } from '@core/dto';
import { InputText, MultiSelect } from 'primevue';
import { onMounted, ref } from 'vue';

const newReceipt = ref<ReceiptDto>({
  consumerCpf: '',
  products: [],
  price: 125
});

const products = ref<ProductDto[]>([]);
const selectedProducts = ref<ProductDto[]>([]);

async function createReceipt() {
  console.log(JSON.stringify(newReceipt.value))
  try {
    const response = await fetch('http://localhost:3333/receipts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReceipt.value)
    });
    if (!response.ok) throw new Error("API error");
  } catch (err) {
    console.error(err);
  }
}


function updateProductsWithQuantities() {
  newReceipt.value.products = selectedProducts.value.map(product => ({
    id: product.id,
    name: product.name,
    quantity: 1,
    description: product.description,
    supplierId: product.supplierId,
    price: product.price,
  }));
}

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3333/products");
    const result = await response.json();
    const data = result._body;
    products.value = data.map((item: any) => ({
      id: item.id,
      name: item.props.name,  
      ...item.props
    }));
  } catch (error) {
    console.error("API error", error);
  }
});
</script>

