<script lang="ts">
import { InputText } from 'primevue';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      newSupplier: {
        name: "",
        email: "",
        phone: "",
        cnpj: "",
      }
    }
  },
  methods: {
    async createSupplier() {
      try {
        const reponse = await fetch('http://localhost:3333/suppliers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.newSupplier)
        })
        if (!reponse.ok) throw new Error("Api error")
        this.newSupplier = {
          name: '', email: '', phone: '', cnpj: ''
        }
      } catch (err) {
        console.error(err)
      }

    }
  }
})
</script>
<template>
  <form @submit.prevent="createSupplier">
    <h2 class="text-2xl font-bold mb-4 text-center w-full">Crie um fornecedor</h2>
    <div class="grid grid-cols-2 gap-4 w-full">

      <InputText v-model="newSupplier.name" placeholder="Nome" type="text" />


      <InputText v-model="newSupplier.email" placeholder="Email" type="email" />


      <InputText v-model="newSupplier.phone" type="tel" name="phone" placeholder="Telefone" />


      <InputText v-model="newSupplier.cnpj" type="text" name="cnpj" placeholder="CNPJ" />
    </div>
    <Button label="Cadastrar" class=" mt-4" type="submit" />
  </form>
</template>
