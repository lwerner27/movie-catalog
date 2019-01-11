<template>
  <div class="main-page">
    <app-navbar :status="loggedIn">DVD Catalog</app-navbar>
    <home></home>
    <add-movie></add-movie>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import Home from './pages/Home.vue'
import AddMovie from './pages/AddMovie.vue'

export default {
  name: 'app',
  data: () => (
    {
      loggedIn: false
    }
  ),
  components: {
    AppNavbar,
    Home,
    AddMovie
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

