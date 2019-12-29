<template>
  <div>
    <p class="info">
      You should scroll down to bottom of this page to see options
    </p>

    <div class="container">
      <vue-lazy-component
        v-for="index in itemsCount"
        :key="index"
      >
        <template v-slot:loader>
          <div class="loader">
            this is custom loader...
          </div>
        </template>

        <img src="https://source.unsplash.com/random/800x600"/>
      </vue-lazy-component>
    </div>

    <button
      class="info"
      @click="enableAutoInfinite()"
    >
      Switch to auto infinite component loop
    </button>

    <button
      id="showMore"
      class="info"
      @click="showMoreImages()"
      :disabled="autoInfinite"
    >
      Load more images
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsCount: 10,
      autoInfinite: false
    }
  },
  methods: {
    showMoreImages() {
      this.itemsCount = this.itemsCount + 5
    },
    enableAutoInfinite() {
      this.autoInfinite = true

      const target = this.$el.querySelector('#showMore')
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showMoreImages()
          }
        })
      })

      observer.observe(target)
    }
  }
}
</script>

<style scoped>
.info {
  text-align: center;
  font-weight: bold;
}

button {
  width: 50%;
  height: 48px;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
}

.container {
  margin: 200px 0;
}

img {
  display: block;
  max-width: 100%;
  height: 600px;
  margin: auto;
}
</style>
