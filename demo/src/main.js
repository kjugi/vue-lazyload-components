/* globals VueLazyComponent */

import Vue from 'vue'
import VueRouter from 'vue-router'
import MainApp from './App.vue'

// Routes
import Basic from './pages/Basic.vue'
import IntersectionAlwaysOn from './pages/IntersectionAlwaysOn.vue'
import InfiniteImages from './pages/InfiniteImages.vue'
import CustomOptions from './pages/CustomOptions.vue'

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
  },
  {
    path: '/infinite-images',
    component: InfiniteImages
  },
  {
    path: '/custom-options',
    component: CustomOptions
  }
]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(MainApp)
}).$mount('#app')
