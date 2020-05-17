<template>
  <div>
    <Menu></Menu>
    <div id="app">
      <div class="background background-blur"></div>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

import Menu from "@/components/Menu";


export default {
  name: 'App',
  components: {

    Menu
  },
  methods:{

  },
  data:function() {
        return {

        };

  }
}
</script>

<style scoped src="../index/assets/app.css">
</style>
