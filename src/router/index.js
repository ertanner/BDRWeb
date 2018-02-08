import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import GetPwd from '@/components/GetPwd'
import GetAcct from '@/components/GetAcct'
import ChgPwd from '@/components/ChangePwd'
import Logout from '@/components/Logout'
import About from '@/components/About'

import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.component('menubar', Home)
// export var router = new Router()

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home2',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/getPwd',
      name: 'GetPwd',
      component: GetPwd
    },
    {
      path: '/getAcct',
      name: 'GetAcct',
      component: GetAcct
    },
    {
      path: '/chgPwd',
      name: 'ChgPwd',
      component: ChgPwd
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
