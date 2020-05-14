const stopwatch = {
  state: {
    time: {
      hour: 0,
      minute: 0,
      second: 0
    },
    intervalId: null
  },

  mutations: {
    SECOND_ADD (state) {
      const time = state.time

      time.second++
      if (time.second >= 60) {
        time.second = 0
        time.minute++
      }

      if (time.minute >= 60) {
        time.minute = 0
        time.hour++
      }
    },
    SET_INTERVAL_ID (state, id) {
      state.intervalId = id
    },
    STOP (state) {
      clearInterval(state.intervalId)
      state.intervalId = null
    }
  },

  actions: {
    Start ({ commit, state }) {
      if (state.intervalId) {
        return
      }
      new Promise((resolve) => {
        const interval = setInterval(() => {
          commit('SECOND_ADD')
        }, 1000)
        resolve(interval)
      }).then(result => {
        commit('SET_INTERVAL_ID', result)
      })
    },
    Stop ({ commit }) {
      commit('STOP')
    }
  }
}

export default stopwatch
