import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import router from "@/view/index/router";


Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
