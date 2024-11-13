<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  props: {
    supplierId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      supplier: {
        name: "",
        email: "",
        phone: "",
        cnpj: "",
      },
      loading: false,
    };
  },
  methods: {
    async fetchSupplier() {
      try {
        this.loading = true;
        const response = await fetch(`http://localhost:3333/suppliers/${this.supplierId}`);
        if (!response.ok) throw new Error("Error fetching supplier data");
        
        const result = await response.json();
        const data = result._body;
        
        
        this.supplier = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          cnpj: data.cnpj,
        };
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    
    async updateSupplier() {
      try {
        const response = await fetch(`http://localhost:3333/suppliers/${this.supplierId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.supplier),
        });
        
        if (!response.ok) throw new Error("Error updating supplier data");
        
        alert("Supplier updated successfully!");
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.fetchSupplier();
  },
});
</script>

<template>
  <form @submit.prevent="updateSupplier" v-if="!loading">
    <h2 class="text-2xl font-bold mb-4 text-center w-full">Update Supplier</h2>
    
    <div class="grid grid-cols-2 gap-4 w-full">
      <div class="flex flex-col">
        <label for="name">Name</label>
        <input v-model="supplier.name" type="text" name="name" id="name" placeholder="Name" class="p-2 border rounded" />
      </div>
      
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input v-model="supplier.email" type="email" name="email" id="email" placeholder="Email" class="p-2 border rounded" />
      </div>
      
      <div class="flex flex-col">
        <label for="phone">Phone</label>
        <input v-model="supplier.phone" type="tel" name="phone" id="phone" placeholder="Phone" class="p-2 border rounded" />
      </div>
      
      <div class="flex flex-col">
        <label for="cnpj">CNPJ</label>
        <input v-model="supplier.cnpj" type="text" name="cnpj" id="cnpj" placeholder="CNPJ" class="p-2 border rounded" />
      </div>
    </div>
    
    <div class="mt-4 w-full flex justify-center">
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Update Supplier</button>
    </div>
  </form>
  
  <div v-else class="text-center">
    <p>Loading...</p>
  </div>
</template>

