/* eslint-disable no-return-assign */
import Axios from '../../service/axiosInstance'
import AuthService from '../../service/Auth'

const state = () => ({
  token: localStorage.getItem('token') || null,
  user: {}
})

const getters = {
  loggedIn: (state) => {
    return state.token !== null
  }
}

const mutations = {
  loginUser: (state, data) => AuthService.setState(state, data),
  logoutUser: (state) => AuthService.setState(state, {access_token: null, user: {}}),
  registerUser: (state, data) => AuthService.setState(state, data)
}
const actions = {
  loginUser: async (context, credentials) => {
    const res = await Axios.post('/api/auth/login', credentials)
    AuthService.setToken(res.data.access_token)
    context.commit('loginUser', res.data)
  },
  logoutUser: async (context) => {
    if (context.getters.loggedIn) {
      await Axios.post('/api/logout')
      AuthService.removeToken(context)
    }
  },
  registerUser: async (context, data) => {
    const res = await Axios.post('/api/auth/register', data)
    AuthService.setToken(res.data.access_token)
    context.commit('registerUser', res.data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}