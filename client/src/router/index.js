import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'
import Home from '@/components/Home'
import Quest from '@/components/Quest'
import SpecialCase from '@/components/secret/SpecialCase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quest',
      name: 'Quest',
      component: Quest
    },
    {
      path: '/specialcase',
      name: 'SpecialCase',
      component: SpecialCase
    },
  ]
})
