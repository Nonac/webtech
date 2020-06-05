<template>
<div>
  <keep-alive>
      <router-view name="top"></router-view>
  </keep-alive>

  <router-view :key="componentKey"></router-view>
</div>
</template>

<script>

import {
  bus
} from '@/view/index/main';

export default {
  data(){
    return {
      componentKey: 0,
    }
  },
  methods:{
    forceReload(){
      this.componentKey++;
    }
  },
  created(){
    bus.$on('forceReload', this.forceReload);
  }
}
</script>
