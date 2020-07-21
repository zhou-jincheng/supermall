<template>
  <div class="checkbox" :class="{active: isSelected}">

  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .checkbox {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin: 4px;
    box-sizing: border-box;
  }
 .active {
    border: 1px solid pink;
    background: url(~assets/img/cart/tick.svg) no-repeat center pink;
  }
  .checkbox img {
    width: 100%;
  }
</style>
