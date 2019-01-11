<template>
  <div class="main-page">
    <app-navbar :status="loggedIn">DVD Catalog</app-navbar>
    <router-view>
      <home></home>
      <add-movie></add-movie>
      <login></login>
    </router-view>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import Home from './pages/Home.vue'
import AddMovie from './pages/AddMovie.vue'
import Login from './pages/Login.vue'

export default {
  name: 'app',
  data: () => (
    {
      loggedIn: true
    }
  ),
  components: {
    AppNavbar,
    Home,
    AddMovie,
    Login
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

