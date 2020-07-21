import { debounce } from "common/utils.js"

export const imgItemListenner = {
  data() {
    return {
      goodsImgListenner: null
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh,200);
    this.goodsImgListenner = () => {
      refresh();
    }
    this.$bus.$on('imgLoaded', this.goodsImgListenner)
  }
}


export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backToTop() {
        // console.log(this.$refs);
        // console.log(111)
        this.$refs.scroll.scrollTo(0, 0)
      }
    }

}
