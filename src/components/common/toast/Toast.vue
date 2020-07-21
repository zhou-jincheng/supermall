<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '欢迎来到王者荣耀',
      isShow: false
    }
  },
  methods: {
    show(message='默认文字', duration=2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      },duration);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 6px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .75);
    color: #fff;
    font-size: 18px;
    z-index: 999;
  }
</style>
