<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
let MainTabBar = () => import('components/content/mainTabbar/MainTabBar.vue')

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
