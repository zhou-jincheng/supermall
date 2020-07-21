<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '爆款', '精选']"
       @tabClick="tabClick" ref="tabControlFixed"
       class="tab-fixed" v-show="tabControlIsFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMores">
      <home-swiper :banners="banners" @swipperImgLoaded="swipperImgLoaded"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '爆款', '精选']"
       @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods-list="getGoods"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backToTop"></back-top>
  </div>
</template>

<script>
let HomeSwiper = () => import("./childComps/HomeSwiper");
let RecommendView = () => import("./childComps/RecommendView");
let FeatureView = () => import("./childComps/FeatureView");

import Scroll from 'components/common/scroll/Scroll.vue'
// let Scroll = () => import("components/common/scroll/Scroll.vue");
let NavBar = () => import("components/common/navbar/NavBar.vue");

let TabControl = () => import("components/content/tabControl/TabControl.vue");
let GoodsList = () => import('components/content/goods/GoodsList.vue')
let BackTop = () => import('components/content/backTop/BackTop.vue')

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { imgItemListenner } from 'common/mixin.js'


export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []},
      },
      goodsType: 'pop',
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      tabControlIsFixed: false,
      saveY: 0
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    Scroll,

    TabControl,
    GoodsList,
    BackTop
  },
  created() {
    // 获取首页多种数据
    this.getHomeMultidata();

    // 获取首页商品信息
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  mixins: [imgItemListenner],
  mounted() {
  },
  activated() {
    /* console.log('开始')
    console.log(this.saveY) */
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // 保存页面离开时的位置y
    this.saveY = this.$refs.scroll.getPostionY()

    // 取消监听商品图片加载完成事件
    this.$bus.$off('imgLoaded',this.goodsImgListenner)
  },
  computed: {
    getGoods() {
      return this.goods[this.goodsType].list
    },

  },
  methods: {
    // 轮播图图片加载完成，计算tabControl高度
    swipperImgLoaded() {
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    // 点击切换tab栏展示不同类型商品
    tabClick(index) {
      this.$refs.tabControlFixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;

      switch(index){
        case 0:
        this.goodsType = 'pop';
        break;
        case 1:
        this.goodsType = 'new';
        break;
        case 2:
        this.goodsType = 'sell';
        break;
      }
    },
    backToTop() {
      // console.log(this.$refs);
      // console.log(111)
      this.$refs.scroll.scrollTo(0, 0)
    },
    toggleBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    contentScroll(position) {
      this.toggleBackTop(position);
      this.tabControlIsFixed = -position.y > this.tabControlOffsetTop
    },
    loadMores(){
      this.getHomeGoods(this.goodsType);
      // this.$refs.scroll.refresh();
    },

     /* 网络请求方法 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 完成上拉加载更多功能
      this.$refs.scroll && this.$refs.scroll.finishPullUp();
      })
    }
  }
};
</script>

<style scoped >
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  position: relative;
  height: calc(100% - 93px);
  overflow: hidden;
}
.tab-fixed {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
  z-index: 999;
}
</style>
