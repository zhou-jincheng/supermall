import Toast from './Toast'
const obj = {}


obj.install = function(Vue) {
  // 创建组件构造器
  const ToastContrustor = Vue.extend(Toast);

  // new的方式，根据组件构造器创建一个组件对象
  const toast = new ToastContrustor();

  //将组件对象挂载到制定元素容器中
  toast.$mount(document.createElement('div'));

  // toast.$el对应的就是div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}

export default obj;
