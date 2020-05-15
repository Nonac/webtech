<template>
  <div><Menu></Menu>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <login v-show:></login>
    <register/>
  </div>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue';
import login from "@/components/login";
import register from "@/components/register";
import Menu from "@/components/Menu";

export default {
  name: 'App',
  components: {
    HelloWorld,
    login,
    register,
    Menu
  },
  data:function() {
return {

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
