<template>
  <div>
    <!-- <Menu></Menu> -->
    <router-view name="top"></router-view>
    <div id="app">
      <router-view></router-view>

    </div>

  </div>
</template>

<script>

// import Menu from "@/components/Menu";


export default {
  name: 'App',
  components: {
    // Menu
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
