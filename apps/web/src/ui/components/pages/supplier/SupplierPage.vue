<template>
  <div class="flex flex-col gap-10">
    <RegisterSupplierForm />
    <div class="w-full h-px bg-gray-500" />
    <SupplierTable />
  </div>
</template>
<script lang="ts">
import RegisterSupplierForm from './register-supplier-form/RegisterSupplierForm.vue';
import SupplierTable from './supplier-table/SupplierTable.vue';
export default {
  components: { RegisterSupplierForm, SupplierTable }
}
</script>
