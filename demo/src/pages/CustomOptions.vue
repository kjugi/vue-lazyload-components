<template>
  <div>
    <p class="info">
      Check the logs
    </p>

    <vue-lazy-component
      :options="options"
      v-on:our-event="showTheLog"
    >
      <template v-slot:loader>
        <div class="loader">
          this is custom loader...
        </div>
      </template>

      <img src="https://source.unsplash.com/random/800x600"/>
    </vue-lazy-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        intersectionOptions: {
          root: this.$el, // overwriting null value
          rootMargin: '20px', // we want 20px margin around item
          threshold: 0.5 // will log when hit the half on an image
        },
        eventName: 'our-event', // we watch for custom defined event name
        disableIntersection: false // we don't want to disable intersection
      }
    }
  },
  methods: {
    showTheLog() {
      console.log('This is b/c of custom options') // eslint-disable-line
    }
  }
}
</script>

<style scoped>
.info {
  text-align: center;
  font-weight: bold;
}

section {
  margin: 50vh 0;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  max-height: 90vh;
}

img {
  display: block;
  max-width: 100%;
  height: 600px;
  margin: auto;
}
</style>
