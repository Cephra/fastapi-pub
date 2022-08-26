<template>
  <b-card :title="name" tag="span" style="max-width: 20rem" class="mb-2">
    <b-card-text> {{unit}} </b-card-text>

    <b-button href="#" variant="secondary">Löschen</b-button>
    <b-button href="#" variant="primary">Speichern</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'MeterComponent',
  props: {
    unit: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
