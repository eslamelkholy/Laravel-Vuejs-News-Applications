import Axios from '../../service/axiosInstance'

const state = () => ({
  news: [],
  newsDetails: {}
})

const getters = {
  getNews: (state) => {
    return state.news
  },
  getNewsDetails: (state) => {
    return state.newsDetails
  }
}

const mutations = {
  getNews: (state, data) => {
    state.news = data.articles
  },
  getNewsDetails: (state, data) => {
    state.newsDetails = data.article
  }
}

const actions = {
  getNews: async ({ commit }) => {
    const newsData = await Axios.get('api/getLatestArticles')
    commit('getNews', newsData.data)
  },
  getNewsDetails: async ({ commit }, newsId) => {
    const newsDetails = await Axios.get(`api/article/${newsId}`)
    commit('getNewsDetails', newsDetails.data)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}