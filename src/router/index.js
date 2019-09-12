import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页"
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
