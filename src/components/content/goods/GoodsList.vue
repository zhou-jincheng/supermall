<template>
  <div class="goods">
    <goods-list-item v-for="item in goodsList"
    :goods-list-item="item"></goods-list-item>
  </div>
</template>

<script>
let GoodsListItem = () => import('./GoodsListItem')
export default {
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
