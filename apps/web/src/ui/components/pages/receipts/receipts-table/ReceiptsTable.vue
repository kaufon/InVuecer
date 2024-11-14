<template>
  <div class="w-full">
    <DataTable ref="dt" :value="receipts" dataKey="id" v-model:selection="receiptToBeDeleted" selectionMode="single"
      removableSort size="large">
      <template #header>
        <Button label="Export to CSV" @click="exportCSV" />
      </template>

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
      <Column header="">
        <template #body="slotProps">
          <Button @click="openDrawer(slotProps.data)">Editar</Button>
        </template>
      </Column>

      <template #footer v-if="receiptToBeDeleted">
        <Button @click="deleteReceipt(receiptToBeDeleted.id as string)">Deletar recibo</Button>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { Drawer } from 'primevue';
import { ref, onMounted } from 'vue';
import type { ReceiptDto } from '@core/dto';

const dt = ref();
const isDrawerOpen = ref(false);
const receipts = ref<ReceiptDto[]>([]);
const receiptToBeDeleted = ref<ReceiptDto | null>(null);
const receiptToBeEdited = ref<ReceiptDto | null>(null);

const openDrawer = (receipt: ReceiptDto) => {
  receiptToBeEdited.value = receipt;
  isDrawerOpen.value = true;
};

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3333/receipts");
    if (!response.ok) throw new Error("API error");
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
};

const exportCSV = () => {
  dt.value.exportCSV();
};

const deleteReceipt = async (receiptId: string) => {
  try {
    await fetch("http://localhost:3333/receipts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ receiptId }),
    });
    
    receiptToBeDeleted.value = null;
  } catch (err) {
    throw new Error("API error");
  }
};

onMounted(() => {
  fetchData();
});
</script>

