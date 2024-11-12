<template>
  <ul>
    <li v-for="supplier in suppliers" :key="supplier.id">{{ supplier.name }}</li>
  </ul>
</template>
<script lang="ts">
import type { SupplierDto } from '@core/dto'
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
    }
  },
  mounted() {
    this.fetchData()
  }
}

</script>
