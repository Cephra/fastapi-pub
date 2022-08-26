<template>
  <div>
    <p v-for="value in values" :key="value.id">{{ value.value }}</p>
  </div>
</template>

<script>
export default {
  name: 'ValuesPage',
  data: () => {
    return {
      values: [],
    }
  },
  async fetch() {
    this.values = await this.$axios.$get('/api/values')
  },
}
</script>
