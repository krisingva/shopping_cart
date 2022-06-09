const productList = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED':
      return action.payload;
    case 'PRODUCT_ADDED':
      return state.concat(action.payload);
    case 'PRODUCT_REMOVED':
      return state.filter(product => {
        return product._id !== action.payload;
      });
    case 'PRODUCT_UPDATED':
      return state.map(product => {
        return product._id === action.payload._id ? action.payload : product;
      });
    case 'PRODUCT_ADDED_TO_CART':
      return state.map(product => {
        return product._id === action.payload.product._id ? action.payload.product : product;
      });
    default:
      return state;
  }
}

export default productList;