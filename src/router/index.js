import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/v0.1'
    },
    {
      path: '/v0.1',
      name: 'v0.1',
      component: () => import('@/views/v0.1')
    },
    {
      path: '/v0.2',
      name: 'v0.2',
      component: () => import('@/views/v0.2')
    },
    {
      path: '/v0.3',
      name: 'v0.3',
      component: () => import('@/views/v0.3')
    },
    {
      path: '/v0.4',
      name: 'v0.4',
      component: () => import('@/views/v0.4')
    },
    {
      path: '/v0.5',
      name: 'v0.5',
      component: () => import('@/views/v0.5')
    },
    {
      path: '/v0.6',
      name: 'v0.6',
      component: () => import('@/views/v0.6')
    }
  ]
})
