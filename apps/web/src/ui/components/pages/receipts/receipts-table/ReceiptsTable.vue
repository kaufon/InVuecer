<template>
  <DataTable :value="receipts">
    <Column field="consumerCpf" sortable header="Cpf do receptor"></Column>
    <Column sortable header="Custo">
      <template #body="slotProps">
        {{ slotProps.data.totalPrice }}
      </template>
    </Column>
    <Column header="Produtos">
      <template #body="slotProps">
        {{ slotProps.data.products.join(", ") }}
      </template>
    </Column>
    <Column header="Quantia total de produto">
      <template #body="slotProps">
        {{ slotProps.data.totalQuantity }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import type { ReceiptDto } from '@core/dto';
import { Column } from 'primevue';
import { onMounted, ref } from 'vue';

const receipts = ref<ReceiptDto[]>([]);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3333/receipts");
    const result = await response.json();
    const data = result._body;

    receipts.value = data.map((item: any) => {
      const quantities = item.props.products.map((product: any) => product.props.quantity);
      const totalQuantity = quantities.reduce((acc: number, qty: number) => acc + qty, 0);

      const prices = item.props.products.map((product: any) => parseFloat(product.props.product.props.price));
      const totalPrice = prices.reduce((acc: number, price: number) => acc + price, 0);
      return {
        id: item.id,
        consumerCpf: item.props.consumerCpf,
        totalPrice,
        products: item.props.products.map((product: any) => product.props.product.props.name),
        quantity: quantities,
        totalQuantity,
      };
    });
  } catch (err) {
    throw new Error("API error");
  }
}

onMounted(async () => {
  fetchData();
});
</script>

