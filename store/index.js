const movies = () => import('~/json/movies.json').then((data) => data.default || data)

export const state = () => ({
  data: [],
  modalData: {},
  modal: false
})

export const mutations = {
  setToArray(state, payload) {
    state.data = payload
  },
  mutateModal(state, payload) {
    state.modalData = payload
  },
  setModal(state) {
    state.modal = !state.modal
  },
}

export const getters = {
  getState: (state) => (key) => {
    return state[key]
  },
}

export const actions = {
  async fetchJson({ commit }) {
    const json = await movies()
    commit('setToArray', json)
  },
}
