<template>
  <div id="app">
    <h1 class="title">
      Vue-lazyload-componenets demo
    </h1>

    <ul>
      <li>
        <router-link to="/basic">
          Basic example
        </router-link>
      </li>

      <li>
        <router-link to="/intersection-always-on">
          Example with never disabling intersection
        </router-link>
      </li>

      <li>
        Example with infinite images
      </li>

      <li>
        Custom intersection options
      </li>

      <li>
        <router-link to="/">Back to homepage</router-link>
      </li>
    </ul>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  max-width: 800px;
  margin: auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
