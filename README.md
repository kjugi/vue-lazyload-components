# vue-lazyload-components

> Example for lazy loading components in Vue.js with IntersectionObserver

Tested this code only on libs and engines versions from `package.json` file.

Release tags will depend (if there will be any) on vue release version. When Vue 3.x will be released I will adjust code and release here 3.x version. Vue 1.0 isn't supported.

## TODO:
- [ ] Cover all scenarios in unit tests or rebuild them
- [ ] Add support to lazy loading images

## Basic example
index.js
```js
import Vue from 'vue'
import MainApp from './App.vue'
import 'path/to/dist/of/vue-lazy-component.js'

Vue.use(VueLazyComponent)

new Vue({
  render: h => h(MainApp)
}).$mount('#app')

```

App.vue
```html
<template>
  <div id="app">
    <vue-lazy-component>
      Your lazy loaded content/component
    </vue-lazy-component>
  </div>
</template>
```

## Defaults / Options to configure
You can overwrite them as you want in your vue components
```js
const config = {
  intersectionOptions: {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  },
  disableIntersection: true,
  eventName: 'custom-lazy-component'
}
```

## Demo
Online demo is not available but you can fork/download this repo and run locally a `yarn serve` from demo directory. 

## Testing
You can run test cases from test/unit by hitting `yarn test` in main directory.

## Alternatives:
- [Vue-intersect](https://github.com/heavyy/vue-intersect)
- [Vue-lazyload](https://github.com/hilongjw/vue-lazyload)
- [V-lazy-image](https://github.com/alexjoverm/v-lazy-image)
