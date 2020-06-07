import VueRouter from 'vue-router';
import App from "@/view/index/App"
import cvMakerApp from "@/view/index/cvMakerApp";
import Menu from "@/components/menu";
import login from "@/components/login";
import register from "@/components/register";
import Home from "@/components/home";
import selectTemplate from "@/components/selectTemplate";
import cvMaker from "@/components/cvMaker";
import about from "@/components/aboutUs";
import userProfile from "@/components/userProfile";
import error from "@/components/error";

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
    },
    {
      path: '/userProfile',
      components: {default:userProfile, top:Menu}
    }
  ]
},
  {
    name: '404',
    path: '/404',
    component: error,
  },

{
  path: '/cvMaker',
  name: 'cvMaker',
  component: cvMakerApp,
  children:[
    {
      path:'',
      components: {default:cvMaker, top:Menu},
      props: (route) => ({
        fetchSavedData: route.query.fetchSavedData,
        templateId: route.query.templateId
      }),
    },
  ]

},
  {
    path: "*",
    redirect: '/404'
  }
];


Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

export default router;
