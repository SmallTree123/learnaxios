import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/shopcar',
    name: "category",
    component: () => import('../views/shopcar/ShopCar')
  },
  {
    path: '/user',
    name: "name",
    component: () => import('../views/user/User')
  }
];

const router = new VueRouter({
  routes,
  //这里是让浏览器地址不显示#号
  mode: "history"
});

export default router
