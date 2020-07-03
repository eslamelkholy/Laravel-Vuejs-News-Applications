export default {
  removeToken: (context) => {
    localStorage.removeItem('token')
    context.commit('logoutUser')
  },
  setToken: (token) => localStorage.setItem('token', `Bearer ${token}`),
  setState: (state, data) => {
    state.token = data.access_token
    state.user = data.user
  }
}