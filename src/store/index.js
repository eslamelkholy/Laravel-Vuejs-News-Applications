import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'
import News from './modules/News'
import Favorites from './modules/Favorites'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Auth,
    News,
    Favorites
  }
})
