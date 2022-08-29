<template>
  <b-card
    v-if="meter"
    :title="meter.name"
    :sub-title="`${meter.unit.name} (${meter.unit.suffix})`"
    tag="span"
    style="max-width: 20rem"
    class="mb-2"
  >
  </b-card>
</template>

<script>
export default {
  name: 'MeterComponent',
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    meter: null,
  }),
  mounted() {
    this.meter = this.$store.getters.getMeterById(this.id)
    this.meter.unit = this.$store.getters.getUnitById(this.meter.unitId)
  },
}
</script>
