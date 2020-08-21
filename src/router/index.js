import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import pageQuiButton from '../page/pageQuiButton'
import pageQuiNav from '../page/pageQuiNav'
import pageQuiList from '../page/pageQuiList'

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
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    }
  ]
})
