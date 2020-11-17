import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import(/* webpackChunkName: "login" */ '../pages/Home.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../pages/login/Login.vue')
const About = () => import(/* webpackChunkName: "about" */ '../pages/About.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
