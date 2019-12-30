<template>
  <component :is="mainTag">
    <template v-if="!isLoadedData">
      <slot name="loader">
        <span>
          Loading...
        </span>
      </slot>
    </template>
    <template v-else>
      <slot/>
    </template>
  </component>
</template>

<script>
import { initIntersectionObserver } from './functions.js'

export default {
  name: 'VueLazyComponent',
  props: {
    mainTag: {
      type: String,
      default: 'section'
    },
    isLoaded: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isLoadedData: this.isLoaded
    }
  },
  mounted() {
    initIntersectionObserver(
      this,
      this.options || {}
    )
  }
}
</script>
