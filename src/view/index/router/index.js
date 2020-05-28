import VueRouter from 'vue-router';
import login from "@/components/login";
import register from "@/components/register";
import Home from "@/components/Home";
import personalForm from "@/components/personalForm";
// import App from "@/view/index/App";
import Menu from "@/components/Menu";
import Vue from 'vue'

import App from "@/view/index/App"

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
      path: 'form',
      components: {default:personalForm, top:Menu},
    },
    {
      path: 'login',
      components: {default:login, top:Menu},
    },

    {
      path: 'register',
      components: {default:register, top:Menu}
    },

    {
      path: 'home',
      components: {default:Home, top:Menu}
    }
  ]
}

];


Vue.use(VueRouter);

export default new VueRouter({
  routes
});
