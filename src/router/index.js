import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      name: 'home'
    }
  ]
})
