<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vue-lazy-component :options="options" :is-loaded-prop="false">
      <template v-slot:loader>
        blah blah loader...
      </template>
      testing
      <img src="https://picsum.photos/200/300"/>
    </vue-lazy-component>
    <vue-lazy-component :options="options" :is-loaded-prop="false">
      <template v-slot:loader>
        blah blah loader...
      </template>
      testing2
      <img src="https://picsum.photos/200/300"/>
    </vue-lazy-component>
    <vue-lazy-component :options="options" :is-loaded-prop="false">
      <template v-slot:loader>
        blah blah loader...
      </template>
      testing3
      <img src="https://picsum.photos/200/300"/>
    </vue-lazy-component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      options: {
        disableIntersection: true,
        intersectionOptions: {
          threshold: 0.5
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
