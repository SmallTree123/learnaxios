import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    //redirect重定向
    redirect: '/home',
    meta: {
      title: "首页"
    },
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: "首页"
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: () => import('../views/HomeNews.vue'),
        meta: {
          title: "新闻"
        },
      },
      {
        path: 'message',
        component: () => import('../views/HomeMessage.vue'),
        meta: {
          title: "消息"
        },
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    //路由懒加载
    component: ()=>import("../views/About.vue"),
    meta: {
      title: "关于"
    },
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: () => import("../views/User.vue"),
    meta: {
      title: "用户"
    },
  },
  {
    path: '/profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: "档案"
    },

  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
router.beforeEach((to, from, next)=>{
  //从from跳转到to
  document.title=to.matched[0].meta.title;
  next();
});
export default router
