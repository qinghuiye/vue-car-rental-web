import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    children:[
      {
        path:'/user',
        name:'User',
        component:()=>import('../views/user/index.vue')
      },
      //安全设置
      {
        path:'/safe',
        name:'Safe',
        component:()=>import('../views/safe/index.vue')
      },
      {
        path:'/password',
        name:'Password',
        component:()=>import('../views/safe/password')
      }
      ,
      {
        path:'/bank',
        name:'Bank',
        component:()=>import('../views/safe/bank')
      }
      ,
      {
        path:'/bankAdd',
        name:'BankAdd',
        component:()=>import('../views/safe/bankAdd')
      }
      ,
      {
        path:'/capital',
        name:'Capital',
        component:()=>import('../views/safe/capital')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
