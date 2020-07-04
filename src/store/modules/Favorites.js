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
  getFavorites: (state, data) => {
    state.favorites = data.Favorites
    state.userFavoritesIds = data.UserFavoritesId
  },
  addToFavorites: (state, data) => {
    state.userFavoritesIds.push(data.article.id)
    state.favorites.push(data.article)
  },
  removeFromFavorites: (state, data) => {
    const favIdIndex = state.userFavoritesIds.findIndex(item => item.id === data.articleId)
    const favIndex = state.favorites.findIndex(item => item.id === data.articleId)
    state.userFavoritesIds.splice(favIdIndex, 1)
    state.favorites.splice(favIndex, 1)
  }
}

const actions = {
  getFavorites: async ({ commit }) => {
    const userFavorites = await Axios.get("api/article");
    commit('getFavorites', userFavorites.data.FavoritesData)
  },
  addToFavorites: async ({ commit }, articleId) => {
    const res = await Axios.post("api/article", {articleId})
    commit('addToFavorites', res.data)
  },
  removeFromFavorites: async ({ commit }, articleId) => {
    const res = await Axios.post("api/article/remove", {articleId});
    commit('removeFromFavorites', res.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
