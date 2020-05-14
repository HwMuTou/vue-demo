const count = {
  state: {
    count: 0
  },

  mutations: {
    INCREMENT (state) {
      state.count = state.count + 1
    }
  },

  actions: {
    Increment ({ commit }) {
      commit('INCREMENT')
    }
  }
}
export default count
