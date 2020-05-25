import VueRouter from 'vue-router';
import login from "@/components/login";
import register from "@/components/register";
import Home from "@/components/Home";
// import App from "@/view/index/App";
import Menu from "@/components/Menu";
import Vue from 'vue'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path:'/',
            name:'App',
            component:{
                default: Home,
                top:Menu,
            },
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
                    component:{
                        top:Menu,
                        default:Home
                    }
                },
            ]
        }]

});

export default router
