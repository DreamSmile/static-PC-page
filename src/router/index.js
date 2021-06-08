import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const error = r => require.ensure([], () => r(require('@/views/error/Index')), 'error');
const travel = r => require.ensure([], () => r(require('@/views/travel/Index')), 'travel');

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
