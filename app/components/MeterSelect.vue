<template>
  <b-form-select
    :id="id"
    :value="value"
    :options="metersOptions"
    @input="$emit('input', $event)"
  >
  </b-form-select>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MeterSelect',
  props: {
    value: {
      type: Number,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
  },
  async fetch() {
    await this.$store.dispatch('fetchMeters')
  },
  computed: {
    ...mapGetters(['metersAsOptions']),
    metersOptions() {
      return [
        {
          value: null,
          text: 'Zähler auswählen',
        },
        ...this.metersAsOptions,
      ]
    },
  },
}
</script>
