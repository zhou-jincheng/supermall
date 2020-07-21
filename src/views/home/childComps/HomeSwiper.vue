<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"><img :src="item.image" alt="" @load="imgLoaded"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  //为什么下面一种引入会出错
  // let { Swiper, SwiperItem } = () => import('components/common/swiper/index.js')

export default {
  data() {
    return {
      isLoaded: true
    }
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoaded() {
    if(this.isLoaded) {
      // console.log('轮播图图片加载完成');
      this.$emit('swipperImgLoaded')
      this.isLoaded = false;
    }
    }
  }
}
</script>

<style>

</style>
