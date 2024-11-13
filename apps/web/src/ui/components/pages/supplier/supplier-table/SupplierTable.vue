<template>
  <div class="w-screen">
    <DataTable ref="dt" :value="suppliers" v-model:selection="selectedSupplier" dataKey="id" selectionMode="single"
      removableSort size="large">
      <template #header>
        <Button label="Export to CSV" @click="exportCSV" />
      </template>

      <Column field="name" sortable header="Nome"></Column>
      <Column field="email" sortable header="E-mail"></Column>
      <Column field="phone" sortable header="Telefone"></Column>
      <Column field="cnpj" sortable header="CNPJ"></Column>
      <Column field="" header="">
        <template #body="slotProps">
          <Button @click="openDrawer(slotProps.data)">Editar</Button>
        </template>
      </Column>
      <template #footer v-if="selectedSupplier">
        <Button @click="deleteSupplier(selectedSupplier.id as string)">Deletar funcionario</Button>
      </template>
    </DataTable>
    <Drawer v-model:visible="isDrawer" position="right" :style="{width: '50%'}">
      <UpdateSupplierForm :supplier="supplierForEdting as SupplierDto" />
    </Drawer>
  </div>
</template>

<script lang="ts" setup>
import UpdateSupplierForm from '../update-supplier-form/UpdateSupplierForm.vue';
import { ref, onMounted } from 'vue';
import { Drawer } from 'primevue';
import type { SupplierDto } from '@core/dto';
const dt = ref();
const isDrawer = ref(false)
const suppliers = ref<SupplierDto[]>([]);
const selectedSupplier = ref<SupplierDto | null>(null)
const supplierForEdting = ref<SupplierDto | null>(null)
function openDrawer(supplier: SupplierDto) {
  supplierForEdting.value = supplier
  isDrawer.value = true
}
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3333/suppliers');
    if (!response.ok) throw new Error("API error");
    const result = await response.json();
    const data = result._body;

    suppliers.value = data.map((item: any) => ({
      id: item.id,
      ...item.props
    }));
  } catch (error) {
    console.error(error);
  }
};

const exportCSV = () => {
  if (dt.value && typeof dt.value.exportCSV === 'function') {
    dt.value.exportCSV();
  } else {
    console.warn("exportCSV method not available on DataTable");
  }
};
async function deleteSupplier(supplierId: string) {
  try {
    const response = await fetch("http://localhost:3333/suppliers", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ supplierId })
    })
    if (!response.ok) throw new Error("Api error")
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchData();
});
</script>
