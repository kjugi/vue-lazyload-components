<template>
  <div>
    <vue-lazy-component
      :options="options"
      :is-loaded-prop="false"
    >
      <template v-slot:loader>
        <div class="loader">
          blah blah loader...
        </div>
      </template>

      <img src="https://source.unsplash.com/random"/>
    </vue-lazy-component>

    <vue-lazy-component
      :options="options"
      :is-loaded-prop="false"
    >
      <template v-slot:loader>
        <div class="loader">
          blah blah loader...
        </div>
      </template>

      <img src="https://source.unsplash.com/random"/>
    </vue-lazy-component>

    <vue-lazy-component
      :options="options"
      :is-loaded-prop="false"
    >
      <template v-slot:loader>
        <div class="loader">
          blah blah loader...
        </div>
      </template>

      <img src="https://source.unsplash.com/random"/>
    </vue-lazy-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        disableIntersection: true
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}

.loader {
  height: 300px;
  width: 100%;
  text-align: center;
}
</style>
