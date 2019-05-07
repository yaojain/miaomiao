import Vue from 'vue'
import moverRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base : 'miaomiao',
  routes: [
    moverRouter,
    cinemaRouter,
    mineRouter,
    { path: "/*", redirect: "/movie/nowPlaying" }
  ]
})
