import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import FastClick from 'fastclick';
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

// 安装toast插件
Vue.use(toast)
//图片懒加载插件
Vue.use(vueLazyLoad,{
  loading: require('assets/img/common/10.jpg')
})

new Vue({
  router,
  store,
  toast,
  render: h => h(App),
}).$mount('#app')
