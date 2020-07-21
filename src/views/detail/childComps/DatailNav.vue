<template>
  <nav-bar class="detail-item">
    <div slot="left" class="back" @click="back">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles"
      class="title-item"
      :class="{titleActive: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
let NavBar = () => import('components/common/navbar/NavBar.vue')

export default {
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '商品', '参数', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      back() {
        this.$router.back()
      }
    }

}
</script>

<style>
  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .titleActive {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 7px;
  }
</style>
