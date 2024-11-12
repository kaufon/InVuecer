<template>
  <div class="flex flex-col gap-10">
    <CreateSupplierForm />
    <div class="w-full h-px bg-gray-500"/>
    <SupplierTable />
  </div>
</template>
<script lang="ts">
import CreateSupplierForm from './create-supplier-form/CreateSupplierForm.vue';
import SupplierTable from './supplier-table/SupplierTable.vue';
export default {
  components: { CreateSupplierForm, SupplierTable }
}
</script>
