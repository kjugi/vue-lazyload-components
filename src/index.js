import Component from './component.vue'

export default {
  install(Vue) {
    // TODO: add support to global options in options.observerOptions
    Vue.prototype.$LazyComponent = {
      name: 'LazyLoadedComponents'
    }

    Vue.component(Component.name, Component)
  }
}
