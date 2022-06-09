const cart = (state = [], action) => {
  switch(action.type) {
    case "CART_ITEMS_RECEIVED":
      return action.payload;
    case "CART_ITEM_ADDED":
      if (state.length === 0) {
        return [action.payload]
      } else if (state.filter((item) => item.productId === action.payload.productId).length === 1) {
        return state.map((item) => {
          if (item.productId === action.payload.productId) {
            return action.payload;
          } else {
            return item;
          }
        })
      } else {
        return state.concat(action.payload);
      }
    case "CHECKED_OUT":
      return action.payload;
    default:
      return state;
  }
}

export default cart;