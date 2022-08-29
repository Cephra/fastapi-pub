<template>
  <div>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Zählerstand:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Bitte geben Sie einen Zählerstand ein"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Zähler:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.zaehler"
          :options="meters"
          required
        ></b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Senden</b-button>
      <b-button type="reset" variant="danger">Zurücksetzen</b-button>
    </b-form>
    <b-card class="mt-3" header="JSON Debug">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        zaehler: null,
      },
      meters: [
        {
          text: 'Bitte Zähler Auswählen',
          value: null,
        },
      ],
      show: true,
    }
  },
  async fetch() {
    this.meters = await this.$axios.$get('/api/meters')
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
