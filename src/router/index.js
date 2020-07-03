import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Authentication/Login'
import Register from '../components/Authentication/Register'
import Logout from '../components/Authentication/Logout'
import HomePage from '../components/Home/HomePage'
import Favorites from '../components/Favorites/Favorites'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'home-page',
      meta: {
        requiresVisitor: true
      },
      props: true
    },
    {
      path: '/favorites',
      component: Favorites,
      name: 'favorites',
      meta: {
        requiresVisitor: true
      }
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
