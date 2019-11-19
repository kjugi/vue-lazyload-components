import LazyloadMainComponent from './component'

export default {
  install(Vue, options = {}) {
    Vue.component('lazy-component', LazyloadMainComponent)
  }
}
