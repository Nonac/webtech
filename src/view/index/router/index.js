import VueRouter from "vue-router";
import Vue from "vue/types/umd";

import Home from "@/components/Home";

Vue.use(VueRouter)

const routes=[
    {
        path:'/home',
        component:Home
    }
]

const router = new VueRouter({
    routes
})


export default router
