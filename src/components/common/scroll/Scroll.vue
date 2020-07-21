<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }

  },
  data(){
    return {
      scroll: null,
    }
  },
  mounted() {
    //创建BScroll实例
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      click: true,
      pullUpLoad:this.pullUpLoad
    });
    // 监听滚动事件
    if(this.probeType == 2 || this.probeType == 3){
        this.scroll.on('scroll',position => {
        // console.log(111);
        this.$emit('scroll',position)
      });
    }
    //监听上拉事件
    if(this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp');
      })
    }

  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //重新刷新页面
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    //结束上拉事件
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    // 获取滚动的位置Y
    getPostionY() {
      // console.log(this.scroll);
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
