/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify,
  template: '<App/>'
})
