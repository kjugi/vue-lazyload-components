import Vue from 'vue'
import App from './App.vue'
import LazyloadMainComponent from 'lazy-load-component'

console.log(LazyloadMainComponent) // eslint-disable-line

Vue.use(LazyloadMainComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
