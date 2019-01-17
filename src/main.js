import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import AddMovie from './pages/AddMovie.vue'
import Login from './pages/Login.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC46DTffAqf9Oc_9yNBN50ydXzA_fxozEQ",
  authDomain: "movie-catalog-login.firebaseapp.com",
  databaseURL: "https://movie-catalog-login.firebaseio.com",
  projectId: "movie-catalog-login",
  storageBucket: "movie-catalog-login.appspot.com",
  messagingSenderId: "424374723314"
};
firebase.initializeApp(config);

Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/addmovie",
    component: AddMovie
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')