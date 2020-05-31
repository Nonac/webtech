<template>
  <div>
    <!-- <Menu></Menu> -->
    <router-view name="top"></router-view>
    <log></log>
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
