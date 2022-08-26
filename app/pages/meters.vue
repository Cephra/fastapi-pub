<template>
  <div class="row">
    <div v-for="meter in meters" class="col" :key="meter.id">
      <Meter :name="meter.name" :unit="meter.unitId"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetersPage',
  data: () => {
    return {
      meters: [],
    }
  },
  async fetch() {
    this.meters = await this.$axios.$get('/api/meters')
  },
}
</script>
