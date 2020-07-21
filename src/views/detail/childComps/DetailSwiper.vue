<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in swipperImg">
        <img :src="item" alt="" @load="imgLoaded">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  props: {
    swipperImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoaded: true
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoaded() {
      if(this.isLoaded){
        this.$emit('imgLoaded');
        this.isLoaded = false
      }
    }
  }
}
</script>

<style>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>
