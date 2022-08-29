export default {
  async fetchMeters({ commit }) {
    const res = await this.$axios.$get('/api/meters')
    commit('meters', res)
    return res
  },
  async fetchUnits({ commit }) {
    const res = await this.$axios.$get('/api/units')
    commit('units', res)
    return res
  },
  async saveMeter({ commit, dispatch }, meter = {}) {
    try {
      if (meter.id) {
        return await this.$axios.$patch(`/api/meters/${meter.id}`, meter)
      } else {
        return await this.$axios.$post('/api/meters/', meter)
      }
    } finally {
      await dispatch('fetchMeters')
    }
  },
  async saveValue({ commit }, value = {}) {
    const res = await this.$axios.$post('/api/values', value)
    return res.data
  },
}
