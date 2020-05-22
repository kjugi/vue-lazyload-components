<template>
  <div>
    <vue-lazy-component
      v-for="index in itemsCount"
      :key="index"
    >
      <img src="https://source.unsplash.com/random/600x480"/>

      {{ getRandomInt(0, index + 10) }}
    </vue-lazy-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsCount: 10
    }
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)

      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style scoped>
div > section {
  margin-bottom: 200px;
  text-align: center;
}

img {
  display: block;
  max-width: 100%;
  height: 480px;
  margin: auto;
}
</style>
