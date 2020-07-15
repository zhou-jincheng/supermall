import Vue from 'vue'
import VueRouter from 'vue-router'

// 引进路由
let Home = () => import('views/home/Home.vue')
let Category = () => import('views/category/Category.vue')
let Cart = () => import('views/cart/Cart.vue')
let Profile = () => import('views/profile/Profile.vue')

//安装路由
Vue.use(VueRouter)

//路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'category',
    path: '/category',
    component: Category
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  },
]

//路由器
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
