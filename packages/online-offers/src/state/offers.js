import api from '~/api'

const state = {
  updateTable: false,
}

const getters = {
  tableOffersUpdate: state => state.updateTable,
}

const mutations = {
  UPDATE_TABLE(state, payload = true) {
    state.updateTable = payload
  },
}

const actions = {
  async createOffer({ commit }, payload) {
    return await api.post('/offers', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}
