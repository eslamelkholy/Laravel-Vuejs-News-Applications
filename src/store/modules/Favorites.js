import Axios from '../../service/axiosInstance'

const state = () => ({
  favorites: [],
  userFavoritesIds: []
})

const getters = {
  getFavorites: (state) => {
    return state.favorites
  },
  getUserFavoritesId: (state) => {
    return state.userFavoritesIds
  }
}

const mutations = {
  setFavorites: (state, data) => {
    state.favorites = data.Favorites
    state.userFavoritesIds = data.UserFavoritesId
  }
}

const actions = {
  getFavorites: async ({ commit }) => {
    const userFavorites = await Axios.get("api/article");
    commit('setFavorites', userFavorites.data.FavoritesData)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
