import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './route/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})
