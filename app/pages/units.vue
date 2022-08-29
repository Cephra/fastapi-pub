<template>
  <div class="row">
    <div v-for="unit in units" :key="unit.id" class="col">
      <Unit :id="unit.id" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UnitsPage',
  async fetch() {
    await Promise.all([this.$store.dispatch('fetchUnits')])
  },
  computed: mapState(['units']),
}
</script>
