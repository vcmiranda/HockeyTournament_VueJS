import Vue from 'vue'
import Router from 'vue-router'
import landingPage from '@/view/landingPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: landingPage
    }
  ]
})
