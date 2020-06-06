<template>
<div>
  <keep-alive>
      <router-view name="top"></router-view>
  </keep-alive>

  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>

</div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style src='./assets/global.css' />
<style src='./assets/auth.css' />
