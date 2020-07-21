import { ADD_COUNT, ADD_TO_CART } from './mutation-types'

export default {
  addProduct(context, payload) {
    return new Promise((resolve, reject) =>{
      let oldProduct = context.state.productList.find(item => item.id === payload.id);
      if(oldProduct) {
        context.commit(ADD_COUNT, oldProduct);
        resolve("物品数量 +1")
      }else {
        payload.checked = true;
        context.commit(ADD_TO_CART,payload);
        resolve("已添加到购物车")
      }
    });
  }
}
