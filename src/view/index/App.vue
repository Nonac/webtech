<template>
  <div>
    <Menu @menu-click="menuIndex"></Menu>
    <div id="app">
      <Home v-if="isHomePage"></Home>
      <login v-if="isLoginPage"></login>
      <register v-if="isRegisterPage"></register>
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';
import login from "@/components/login";
import register from "@/components/register";
import Menu from "@/components/Menu";


export default {
  name: 'App',
  components: {
    Home,
    login,
    register,
    Menu
  },
  methods:{
    menuIndex(index){
      switch (index) {
        case "homepage":
          this.isHomePage=true;
          this.isLoginPage=false;
          this.isRegisterPage=false;
          break;
        case "login":
          this.isHomePage=false;
          this.isLoginPage=true;
          this.isRegisterPage=false;
          break;
        case "register":
          this.isHomePage=false;
          this.isLoginPage=false;
          this.isRegisterPage=true;
          break;
      }
    }
  },
  data:function() {
        return {
          isHomePage:true,
          isLoginPage:false,
          isRegisterPage:false
        };

  }
}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
