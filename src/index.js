import MainComponent from './MainComponent.vue'

export default function install(Vue) {
  // TODO: add support to global options in options.observerOptions
  Vue.prototype.$VueLazyComponent = {
    name: MainComponent.name
  }

  Vue.component(MainComponent.name, MainComponent)
}
