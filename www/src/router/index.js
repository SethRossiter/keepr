import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Vaults from '@/components/Vaults'
import Vault from '@/components/Vault'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
     path: '/vaults',
     name: 'Vaults',
     component: Vaults
    },
    {
      path: '/vaults/:id',
      name: 'Vault',
      component: Vault
    }
  ]
})
