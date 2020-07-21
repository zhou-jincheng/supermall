<template>
  <div class="cart-list-item">
    <div class="left">
      <checkbox :isSelected="goods.checked" @click.native="isClick"></checkbox>
    </div>
    <div class="center">
      <img :src="goods.image" alt="">
    </div>
    <div class="right">
      <div class="title">{{goods.title}}</div>
      <div class="desc">{{goods.desc}}</div>
      <div>
        <span class="price">{{goods.price}}</span>
        <span class="count">X {{goods.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
let Checkbox = () => import('components/content/butter/Checkbox.vue')
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  components: {
    Checkbox
  },
  methods: {
    isClick() {
      // console.log('isClick')
      this.$store.commit("isClick",this.goods)
    }
  }
}
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    height: 120px;
    padding: 5px 0;
    border-bottom: 2px solid #ccc;
  }
  .left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .center {
    flex: 3;
    border: 2px solid black;
  }
  .center img {
    width: 100%;
    height: 100%;
  }
  .right {
    flex: 7;
    padding: 5px;
  }
  .right .title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px 0;
    font-size: 16px;
    color: black;
  }

  .right .desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin: 15px 0;
  }
  .right .price {
    color: orange;
  }
  .right .count {
    float: right;
  }
</style>
