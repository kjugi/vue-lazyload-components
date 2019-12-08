import Vue from 'vue'
import App from './App.vue'
import VueLazyComponent from 'lazy-load-component'

console.log(VueLazyComponent) // eslint-disable-line
console.log(Vue.prototype) //eslint-disable-line

Vue.use(VueLazyComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
