export default {
  getProductsCount(state) {
    return state.productList.length
  },
  getCartList(state) {
    return state.productList
  }
}
