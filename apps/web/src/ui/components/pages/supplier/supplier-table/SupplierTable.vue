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
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import type { SupplierDto } from '@core/dto';
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
        console.log(this.suppliers)
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.fetchData()
  }
}

</script>
