<template>
  <div class="detail">
      <detail-nav class="detail-nav" @titleClick="titleClick" ref="detailNav"></detail-nav>
      <scroll class="detail-content" ref="scroll" :probeType="3" @scroll="contentScroll">
        <detail-swiper :swipper-img="swipperImg" @imgLoaded="imageLoad"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info ref="goods" :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
        <goods-list ref="recommend" :goods-list="goodsList"></goods-list>
      </scroll>
      <detail-bottom-bar @addGood="addGood"></detail-bottom-bar>
      <back-top v-show="isShowBackTop" @click.native="backToTop"></back-top>
  </div>
</template>

<script>
import DetailNav from "./childComps/DatailNav"
import Scroll from "components/common/scroll/Scroll.vue"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop.vue'

import { getDetail, Goods, Shop, GoodsParam ,getRecommend } from 'network/detail.js'

import { imgItemListenner, backTopMixin } from 'common/mixin.js'
import { debounce } from 'common/utils.js'
export default {
  name: 'Detail',
  components: {
    DetailNav,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  data() {
    return {
      id: null,
      swipperImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      goodsList: [],
      titleClickPosition: [],
      titleScrollTo: null,
      currentIndex: 0
    }
  },
  mixins: [imgItemListenner, backTopMixin],
  created() {
    // 保存闯入的id
    this.id = this.$route.params.id;
    // console.log(this.id)

    //获取商品数据
    getDetail(this.id).then(res => {
      let data = res.result;
      // console.log(data);
      //提取轮播图
      this.swipperImg = data.itemInfo.topImages;
      //提取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      //提取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品详细数据
      this.detailInfo = data.detailInfo;
      // 获取衣服尺寸参数
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    });

    // 获取推荐商品数据
    getRecommend().then(res => {
      // console.log(res)
      this.goodsList = res.data.list;
    })

    //将函数进行防抖包装
    this.titleScrollTo = debounce(() => {
      this.titleClickPosition = [];
      this.titleClickPosition.push(0);
      this.titleClickPosition.push(this.$refs.goods.$el.offsetTop);
      this.titleClickPosition.push(this.$refs.param.$el.offsetTop);
      this.titleClickPosition.push(this.$refs.recommend.$el.offsetTop);
    },200)
  },
  mounted() {

  },
  destroyed() {
    this.$bus.$off('imgLoaded', this.goodsImgListenner)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.titleScrollTo()
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.titleClickPosition[index],200);
    },
    toggleBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    },

    contentScroll(position) {
      //控制backTop的显示
      this.toggleBackTop(position);
      //顶部导航随滚动改变状态
      let length = this.titleClickPosition.length;
       this.titleClickPosition.forEach((item,index) => {
        if(index < length - 1){
          if(this.currentIndex != index && -position.y >= this.titleClickPosition[index] && -position.y <this.titleClickPosition[index+1]){
            this.$refs.detailNav.currentIndex = index
            this.currentIndex = index;
          }
        }else{
          if(this.currentIndex != index && -position.y >= this.titleClickPosition[index]){
            this.$refs.detailNav.currentIndex = index
            this.currentIndex = index;
          }
        }
      })
    },

    //加入购物车
    addGood() {
      let product = {};
      product.image = this.swipperImg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.id = this.id;
      this.$store.dispatch('addProduct',product).then(res => {
        this.$toast.show(res);
      });
    }
  }
}
</script>

<style>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .detail-content {
    height: calc(100% - 93px);
  }
</style>
