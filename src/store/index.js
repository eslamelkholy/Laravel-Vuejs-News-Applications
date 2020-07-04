import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'
import News from './modules/News'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Auth,
    News
  }
})
