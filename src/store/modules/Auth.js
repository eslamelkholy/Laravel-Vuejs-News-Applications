
const state = ({
  token: localStorage.getItem('token') || null,
  user: {}
})

const getters = {
  loggedIn: (state) => {
    return state.token !== null
  }
}

const mutations = {
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
