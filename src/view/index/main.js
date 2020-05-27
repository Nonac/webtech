import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import router from "@/view/index/router";

// module for making http requests
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.config.productionTip = false;


// global mixin
Vue.mixin({
  data: function(){
    return {
      serverRootUrl: 'http://localhost:3000'
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
