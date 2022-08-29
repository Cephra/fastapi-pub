export default {
  getMeterById: (state) => (id) => {
    return state.meters.find((meter) => meter.id === id)
  },
  getUnitById: (state) => (id) => {
    return state.units.find((unit) => unit.id === id)
  },
  metersAsOptions(state) {
    return state.meters.map((meter) => ({
      value: meter.id,
      text: meter.name,
    }))
  },
}
