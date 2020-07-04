/* eslint-disable no-return-assign */
import Axios from '../../service/axiosInstance'

const state = () => ({
  news: [],
})

const getters = {
  getNews: (state) => {
    return state.news
  }
}

const mutations = {
  getNews: (state, data) => {
    state.news = data.articles
  }
}

const actions = {
  getNews: async ({ commit }) => {
    const newsData = await Axios.get('api/getLatestArticles')
    commit('getNews', newsData.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}