<script lang="ts">
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

      <div class="flex flex-col">
        <label for="name">Nome</label>
        <input v-model="newSupplier.name" type="text" name="name" id="name" placeholder="Nome"
          class="p-2 border rounded" />
      </div>


      <div class="flex flex-col">
        <label for="email">Email</label>
        <input v-model="newSupplier.email" type="email" name="email" id="email" placeholder="Email"
          class="p-2 border rounded" />
      </div>


      <div class="flex flex-col">
        <label for="phone">Telefone</label>
        <input v-model="newSupplier.phone" type="tel" name="phone" id="phone" placeholder="Telefone"
          class="p-2 border rounded" />
      </div>


      <div class="flex flex-col">
        <label for="cnpj">CNPJ</label>
        <input v-model="newSupplier.cnpj" type="text" name="cnpj" id="cnpj" placeholder="CNPJ"
          class="p-2 border rounded" />
      </div>
    </div>


    <div class="mt-4 w-full flex justify-center">
      <button type="submit" class="px-4 py-2 bg-green-500 text-white  rounded">Cadastrar</button>
    </div>
  </form>
</template>
