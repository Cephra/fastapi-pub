<template>
  <b-card
    v-if="unit"
    :title="unit.name"
    :sub-title="`${unit.suffix}`"
    tag="span"
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text>Id: {{ id }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'UnitComponent',
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    unit: null,
  }),
  mounted() {
    this.unit = this.$store.getters.getUnitById(this.id)
  },
}
</script>
