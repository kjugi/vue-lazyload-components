// import LazyloadMainComponent from './component'
import Component from './component.vue'

export default {
  install(Vue) {
    // Vue.component('lazy-component', LazyloadMainComponent)
    Vue.component('LazyComponent', Component)
  }
}
