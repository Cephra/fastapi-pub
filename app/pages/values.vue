<template>
  <div>
    <b-form inline class="mb-1">
      <meter-select v-model="where.meterId" class="mb-2 mr-sm-2 mb-sm-0" />
    </b-form>
    <b-table
      id="values-table"
      striped
      hover
      :fields="visibleFields"
      :items="fetchValues"
      :per-page="limit"
      :current-page="currentPage"
    >
    </b-table>
    <b-row align-h="between">
      <b-col>
        <p class="mt-3">Seite {{ currentPage }}/{{ pages }}</p>
      </b-col>
      <b-col cols="3">
        <b-button variant="outline-primary" size="sm" to="/enterValues">
          <b-icon-plus-circle-fill></b-icon-plus-circle-fill>
        </b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="limit"
          aria-controls="values-table"
        ></b-pagination>
      </b-col>
      <b-form-group
        label="Einträge:"
        label-cols="2"
        label-cols-lg="4"
        label-size="sm"
        label-for="pagination"
      >
        <b-col cols="5">
          <b-form-input
            id="pagination"
            v-model="limit"
            class="text-center"
            size="sm"
          >
          </b-form-input>
        </b-col>
      </b-form-group>
    </b-row>
  </div>
</template>

<script>
import isNull from 'lodash.isnull'
import omitBy from 'lodash.omitby'
import MeterSelect from '../components/MeterSelect.vue'
// TODO date formatting
// TODO delete/change actions
export default {
  name: 'ValuesPage',
  components: { MeterSelect },
  data: () => ({
    visibleFields: ['timestamp', 'value'],
    currentPage: 1,
    totalRows: 0,
    limit: 10,
    where: {},
  }),
  async fetch() {
    await Promise.all([this.fetchCount(), this.fetchValues()])
  },
  computed: {
    pages() {
      return Math.ceil(this.totalRows / this.limit)
    },
    currentPageZeroIndexed() {
      return this.currentPage - 1
    },
    filter() {
      return {
        limit: this.limit,
        skip: this.limit * this.currentPageZeroIndexed,
        order: 'timestamp',
        where: omitBy(this.where, isNull),
        fields: ['id', ...this.visibleFields],
      }
    },
  },
  watch: {
    where: {
      async handler() {
        await this.fetchCount()
        this.refreshTable()
      },
      deep: true,
    },
  },
  methods: {
    async fetchCount() {
      const r = await this.$axios.$get('/api/values/count', {
        params: {
          where: this.filter.where,
        },
      })
      this.totalRows = r.count
    },
    async fetchValues(ctx) {
      try {
        return await this.$axios.$get('/api/values', {
          params: {
            filter: this.filter,
          },
        })
      } catch (err) {
        // TODO error handling (alert, toast, etc..?)
        return []
      }
    },
    refreshTable() {
      this.$root.$emit('bv::refresh::table', 'values-table')
    },
  },
}
</script>
