import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import pageQuiButton from '../page/pageQuiButton'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    }
  ]
})
