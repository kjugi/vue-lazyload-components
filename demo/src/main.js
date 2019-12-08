import Vue from 'vue'
import App from './App.vue'
import VueLazyComponent from './assets/vue-lazy-component.js'

Vue.use(VueLazyComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
