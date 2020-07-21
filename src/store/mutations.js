import { ADD_COUNT, ADD_TO_CART } from './mutation-types'


export default {
  [ADD_COUNT](state,payload) {
    payload.count += 1;
  },
  [ADD_TO_CART](state,payload) {
    payload.count = 1;
    state.productList.push(payload)
  },
  isClick(state, payload){
    payload.checked = !payload.checked;
  }
}
