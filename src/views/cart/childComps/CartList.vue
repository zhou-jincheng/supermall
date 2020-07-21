<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="item in cartList" :goods="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
let Scroll = () => import('components/common/scroll/Scroll.vue')
let CartListItem = () => import('./CartListItem')
import { mapGetters } from 'vuex'
export default {
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters({
      cartList: 'getCartList'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 135px);
    overflow: hidden;
  }
  .content {
    height: 100%;
  }

</style>
