import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../components/Home";
import About from "../components/About";

//通过Vue.use()安装插件
Vue.use(VueRouter);

//创建VueRouter对象
const routes = [
  {
    path: '/home',
    components: Home
  },
  {
    path: '/about',
    components: About
  }
];

//配置router
const router=new VueRouter({
  //配置路由与组件之间的关系
  routes
});

//将router对象传入到Vue实例
export default  {
  router
}
