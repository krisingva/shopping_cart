import productList from "./productList";
import cart from "./cart";

const rootReducer = (state = {}, action) => {
  return {
    productList: productList(state.productList, action),
    cart: cart(state.cart, action),
  };
};

export default rootReducer;
