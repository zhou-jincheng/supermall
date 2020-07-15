<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
let TabBar = () => import('components/common/tabbar/TabBar');
let TabBarItem = () => import('components/common/tabbar/TabBarItem');

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
