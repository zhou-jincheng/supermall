<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .tabBar {
    display: flex;
    background-color: #e3e3e3;
    height: 49px;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    box-shadow: 0 -3px 10px -3px rgba(0, 0, 0, .3);
  }
</style>
