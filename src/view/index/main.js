import Vue from 'vue'
import App from './App.vue'
import VueTimers from 'vue-timers'
Vue.use(VueTimers)
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import router from "@/view/index/router";

/* module for making http requests */
import VueResource from 'vue-resource'
Vue.use(VueResource);

/* module for handling cookies */
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('7d')

import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

import lottie from 'vue-lottie';
Vue.component('lottie', lottie)

Vue.config.productionTip = false;


// event bus
export const bus = new Vue();

// // global mixin
// Vue.mixin({
//   data: function(){
//     return {
//       // server root url
//       serverRootUrl: 'http://localhost:3000'
//     }
//   }
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
