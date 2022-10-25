<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <firstComponent/>
    <lifeCycle/>
  </div>

</template>

<script>
import lifeCycle from '../Vuejs/vue_project/src/components/lifeCycle.vue'
import firstComponent from '../Vuejs/vue_project/src/components/firstComponent.vue'

export default {
  name: 'App',
  components: {
    firstComponent,
    lifeCycle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
