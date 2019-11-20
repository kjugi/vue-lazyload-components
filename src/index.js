import LazyloadMainComponent from './component'

export default {
  install(Vue) {
    Vue.component('lazy-component', LazyloadMainComponent)
  }
}
