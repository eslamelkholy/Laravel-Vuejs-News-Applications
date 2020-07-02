import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/Home/HomePage'
import Login from '../components/Authentication/Login'
import Register from '../components/Authentication/Register'
import Logout from '../components/Authentication/Logout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'home'
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/register',
      component: Register,
      name: 'register',
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/logout',
      component: Logout,
      name: 'logout'
    }
  ]
})
