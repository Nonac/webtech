import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import login from "@/components/login";
import register from "@/components/register";
import Home from "@/components/Home";



Vue.config.productionTip = false;

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path:'/',
      name:'App',
      component:App,
      children:[{
        path:'/login',
        component:login
      },
        {
          path:'/register',
          component:register
        },
        {
          path:'/home',
          component:Home
        },
      ]
    }]

});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
