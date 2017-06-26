import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Vaults from '@/components/Vaults'
import Vault from '@/components/Vault'
import Keep from '@/components/Keep'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
     path: '/vaults',
     name: 'Vaults',
     component: Vaults
    },
    {
      path: '/vaults/:Id',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/vaults/:Id/keeps/:Id',
      name: 'Keep',
      component: Keep
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
