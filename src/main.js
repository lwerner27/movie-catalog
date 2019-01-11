import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import AddMovie from './pages/AddMovie.vue'
import Login from './pages/Login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: "/addmovie", component: AddMovie },
  { path: '/login', component: Login}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
