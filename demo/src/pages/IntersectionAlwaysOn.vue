<template>
  <div>
    <p class="info">
      Scroll page up and down few times and than check the logs
    </p>
    <vue-lazy-component
      :options="options"
      v-on:custom-lazy-component="showTheLog"
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
        disableIntersection: false
      }
    }
  },
  methods: {
    showTheLog() {
      console.log('This is b/c of intersection') // eslint-disable-line
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

img {
  display: block;
  max-width: 100%;
  margin: auto;
}
</style>
