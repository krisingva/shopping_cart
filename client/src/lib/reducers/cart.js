const cart = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCT_ADDED_TO_CART':
      return state.concat(action.payload.item);
    case 'CHECKOUT':
      return [];
    case 'CART_RECEIVED':
      return action.payload;
    default:
      return state;
  }
}