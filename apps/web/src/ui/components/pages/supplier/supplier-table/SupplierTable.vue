<template>

  <div class="w-screen ">
    <table border="1" class="w-full" cellspacing="0" cellpadding="10">
      <thead>
        <tr>
          <th class="border border-gray-200">ID</th>
          <th class="border border-gray-200">Name</th>
          <th class="border border-gray-200">Email</th>
          <th class="border border-gray-200">Phone</th>
          <th class="border border-gray-200">CNPJ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in suppliers" :key="item.id">
          <td class="border border-gray-200">{{ item.id }}</td>
          <td class="border border-gray-200">{{ item.name }}</td>
          <td class="border border-gray-200">{{ item.email }}</td>
          <td class="border border-gray-200">{{ item.phone }}</td>
          <td class="border border-gray-200">{{ item.cnpj || 'N/A' }}</td>
          <td class="bg-red-500 rounded border text-white text-center"><button
              @click="deleteSupplier(item.id as string)">Deletar</button></td>
          <td>
            <UpdateSupplierForm :supplier-id="item.id as string" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import type { SupplierDto } from '@core/dto';
import UpdateSupplierForm from '../update-supplier-form/UpdateSupplierForm.vue';
export default {
  data() {
    return {
      suppliers: [] as SupplierDto[]
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:3333/suppliers')
        if (!response.ok) throw new Error("Api error")
        const result = await response.json()
        const data = result._body

        this.suppliers = data.map((item: any) => ({
          id: item.id,
          ...item.props
        }))
      } catch (error) {
        console.error(error)
      }
    },
    async deleteSupplier(supplierId: string) {
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
  },
  mounted() {
    this.fetchData()
  },
  components: { UpdateSupplierForm }
}

</script>
