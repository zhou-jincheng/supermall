<template>
  <div class="cart-bottom-nav">
    <div class="checkall">
      <checkbox class="btn" :isSelected="selectAll" @click.native="toggleSelectAll"></checkbox>
      <span>全选</span>
      </div>
    <div class="total-price">合计：{{getTotalPrice}}</div>
    <div class="pay" @click="toPay">去结算 {{getTotalCount}}</div>
  </div>
</template>

<script>
let Checkbox = () => import('components/content/butter/Checkbox.vue')
export default {
  data() {
    return {

    }
  },
  components: {
    Checkbox
  },
  computed: {
    getTotalPrice() {
      return this.$store.state.productList.filter(item => item.checked)
      .reduce((total, currentValue) => {
        return total += currentValue.price * currentValue.count;
      },0);
    },
    getTotalCount() {
      return this.$store.state.productList.filter(item => item.checked).
      reduce((total, currentValue) => {
        return total += currentValue.count;
      },0)
    },
    selectAll() {
      if(this.$store.state.productList.length === 0) return false;
      return this.$store.state.productList.find(item => !item.checked) ? false : true;
    }
  },
  methods: {
    toggleSelectAll() {
      if(this.selectAll) {
        this.$store.state.productList.forEach(item => item.checked = false)
      }else {
        this.$store.state.productList.forEach(item => item.checked = true)
      }
    },
    toPay() {
      if(this.$store.state.productList.length ===0) return;
      if(this.$store.state.productList.filter(item => item.checked).length ===0){
        this.$toast.show("没有选中的商品！")
      }
    }
  }
}
</script>

<style scoped>
  .cart-bottom-nav {
    display: flex;
    height: 45px;
    line-height: 45px;
    background-color: #eee;
  }
  .checkall {
    width: 90px;
    vertical-align: center;
  }
  .checkall .btn {
    margin-top: 7px;
    float: left;
  }
  .checkall span {
    float: left;

  }
  .total-price {
    flex: 1;
    height: 100%;
  }
  .pay {
    width: 90px;
    text-align: center;
    background-color: red;
    color: #fff;
  }
</style>
