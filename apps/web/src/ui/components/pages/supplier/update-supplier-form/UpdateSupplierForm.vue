<template>

  <form @submit.prevent="updateSupplier">
    <div class="grid grid-cols-2 gap-4 w-full">
      <InputText v-model="localSupplier.name" placeholder="Nome" type="text" />

      <InputText v-model="localSupplier.email" placeholder="Email" type="email" />

      <InputText v-model="localSupplier.phone" type="tel" name="phone" placeholder="Telefone" />

      <InputText v-model="localSupplier.cnpj" type="text" name="cnpj" placeholder="CNPJ" />
    </div>
    <Button label="Cadastrar" class=" mt-4" type="submit" />
  </form>
</template>
<script lang="ts">
import type { SupplierDto } from "@core/dto"
import {
  defineComponent
} from "vue";
import type { PropType } from "vue";
export default defineComponent({
  props: {
    supplier: {
      type: Object as PropType<SupplierDto>,
      required: true
    }
  },
  data() {
    return {
      localSupplier: { ...this.supplier }
    }
  },
  methods: {
    async updateSupplier() {
      try {
        const response = await fetch(`http://localhost:3333/suppliers/${this.supplier.id as string}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.localSupplier),
        });

        if (!response.ok) throw new Error("Error updating supplier data");
      } catch (err) {
        console.error(err);
      }
    }
  },
})



</script>
