<template>
    <div class="bottom-nav">
      <div class="bottom-nav-left">
        <span>
          <i class="service"></i>
          <span>客服</span>
        </span>
        <span>
          <i class="shop"></i>
          <span>店铺</span>
        </span>
        <span>
          <i class="collect"></i>
          <span>收藏</span>
        </span>
      </div>
      <div class="bottom-nav-right">
        <span class="shopcar"  @click="addGood">加入购物车</span>
        <span class="buy">购买</span>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    addGood() {
      this.$emit('addGood')
    }
  }
}
</script>

<style scoped>
  .bottom-nav {
    position: relative;
    height: 49px;
    line-height: 49px;
    text-align: center;
    background-color: #fff;

    display: flex;
  }
  .bottom-nav-left,
  .bottom-nav-right {
    flex: 1;
    display: flex;
  }
  .bottom-nav-right {
    font-size: 16px;
  }
  .bottom-nav-left>span,
  .bottom-nav-right>span {
    flex: 1;
  }

  .bottom-nav-left span i {
    display: block;
    width: 26px;
    height:26px;
    margin: 0 auto;
    margin-bottom: -12px;
    background: url(~assets/img/detail/detail_bottom.png);
    background-size: 26px;
    background-position: 0 0;
  }
  .bottom-nav-left span .service {
    background-position: 0 -63px;
  }
  .bottom-nav-left span .shop {
    background-position: 0 -117px;
  }

  .bottom-nav-right .shopcar {
    background-color: #ffe01d;
  }
  .bottom-nav-right .buy {
    background-color: #ff789a;
    color: #fff;
  }


</style>
