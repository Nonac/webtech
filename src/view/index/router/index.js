import VueRouter from 'vue-router';

import App from "@/view/index/App"

import Menu from "@/components/menu";

import login from "@/components/login";
import register from "@/components/register";
import Home from "@/components/home";
import selectTemplate from "@/components/selectTemplate";
import cvMaker from "@/components/cvMaker";
import about from "@/components/aboutUs";

import Vue from 'vue'



const routes = [{
  path: '/',
  component: App,

  children: [
    {
      name: 'App',
      path: '',
      components: {default:Home, top:Menu},
    },
    {
      path: '/selectTemplate',
      components: {default:selectTemplate, top:Menu},
    },
    {
      path: '/cvMaker',
      components: {default:cvMaker, top:Menu},
      props:{
        default: (route) => ({templateId: route.query.templateId}),
        top:false},
    },
    {
      path: '/about',
      components: {default:about, top:Menu},
    },
    {
      path: '/login',
      components: {default:login, top:Menu},
    },

    {
      path: '/register',
      components: {default:register, top:Menu}
    },

    {
      path: '/home',
      components: {default:Home, top:Menu}
    }
  ]
}

];


Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

export default router;
