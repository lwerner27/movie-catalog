<template>
  <div>
    <app-navbar>DVD Catalog</app-navbar>
    <home></home>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import Home from './pages/Home.vue'

export default {
  name: 'app',
  components: {
    AppNavbar,
    Home
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
