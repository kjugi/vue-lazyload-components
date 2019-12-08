<template>
  <component :is="mainTag">
    <template v-if="!isLoaded">
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
  name: 'LazyLoadComponent',
  props: {
    mainTag: {
      type: String,
      default: 'section'
    },
    isLoadedProp: {
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
      isLoaded: this.isLoadedProp
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
