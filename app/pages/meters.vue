<template>
  <div class="row">
    <div v-for="meter in meters" :key="meter.id" class="col">
      <Meter :id="meter.id" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MetersPage',
  async fetch() {
    await Promise.all([
      this.$store.dispatch('fetchMeters'),
      this.$store.dispatch('fetchUnits'),
    ])
  },
  computed: mapState(['meters']),
}
</script>
