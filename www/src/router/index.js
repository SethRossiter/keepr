import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Public from '@/components/Public'
import Dashboard from '@/components/Dashboard'
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
      path: '/public',
      name: 'Public',
      component: Public
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/vaults/:Id',
      name: 'Vault',
      component: Vault
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
