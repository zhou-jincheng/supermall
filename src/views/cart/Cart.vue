<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车 {{length}}</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-nav></cart-bottom-nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
let NavBar = () => import('components/common/navbar/NavBar.vue');
let CartList = () => import('./childComps/CartList')
let CartBottomNav = () => import('./childComps/CartBottomNav')
export default {
  components: {
    NavBar,
    CartList,
    CartBottomNav
  },
  computed: {
    ...mapGetters({
      length: 'getProductsCount'
    })
  },

}
</script>

<style scoped>
.cart-nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 1;
}
.cart {
  height: 100vh;
}
</style>
