<template>
  <component :is="mainTag" v-if="isShowed">
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

// TODO: make component hidden on start (isLoaded and isShowed) b/c need to init intersectionObserver
export default {
  name: 'LazyLoadComponent',
  props: {
    mainTag: {
      type: String,
      default: 'section'
    },
    isLoadedProp: {
      type: Boolean,
      default: true
    },
    isShowedProp: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isLoaded: this.isLoadedProp,
      isShowed: this.isShowedProp
    }
  },
  mounted() {
    initIntersectionObserver(
      this.$el,
      this.options || {}
    )
  }
}
</script>
