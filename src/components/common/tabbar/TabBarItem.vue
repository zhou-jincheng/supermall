<template>
  <div class="tabBarItem" @click="itemClick">
    <div class="itemIcon">
      <slot name="item-icon" v-if="!isActive"></slot>
      <slot name="item-icon-active" v-else></slot>
    </div>
    <div class="itemText" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: '',
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tabBarItem {
    flex: 1;
    height: 49px;
    text-align: center;
  }
  .itemIcon img{
    width: 25px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
