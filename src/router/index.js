import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const error = r => require.ensure([], () => r(require('@/views/error/Index')), 'error');
const travel = r => require.ensure([], () => r(require('@/views/travel/Index')), 'travel');
const food = r => require.ensure([], () => r(require('@/views/food/Index')), 'food');
const safe = r => require.ensure([], () => r(require('@/views/safe/Index')), 'safe');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/error',
    name: 'Error',
    component: error
  }, {
    path: '/travel',
    name: 'Travel',
    component: travel
  }, {
    path: '/food',
    name: 'Food',
    component: food
  }, {
    path: '/safe',
    name: 'Safe',
    component: safe
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, form, next) => {

//处理无效路由
// if (Array.isArray(to.matched) && to.matched.length == 0) {
//   next({
//     path: "/error",
//   });
//   return;
// }
// })
export default router
