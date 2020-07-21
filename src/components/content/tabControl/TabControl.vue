<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
    class="tab-control-item"
    :class="{active:index === currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
      return {
        currentIndex: 0
      }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style>
  .tab-control {
    top: 44px;
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active span {
    padding: 5px;
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
