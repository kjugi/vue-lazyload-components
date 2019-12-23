/* globals VueLazyComponent */

import Vue from 'vue'
import VueRouter from 'vue-router'
import MainApp from './App.vue'

// Routes
import Basic from './pages/Basic.vue'
import IntersectionAlwaysOn from './pages/IntersectionAlwaysOn.vue'

import './assets/vue-lazy-component.js'

Vue.use(VueRouter)
Vue.use(VueLazyComponent)

const routes = [
  {
    path: '/basic',
    component: Basic
  },
  {
    path: '/intersection-always-on',
    component: IntersectionAlwaysOn
  }
]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(MainApp)
}).$mount('#app')
