const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return action.payload
    case "PRODUCT_ADDED":
      return [...state, action.payload]
    case "PRODUCT_EDITED":
      return state.map(prod => {
        if (prod._id === action.payload._id) {
          return action.payload
        } else {
          return prod;
        }
      })
    case "PRODUCT_DELETED": 
      return state.filter(prod => prod._id !== action.payload._id)
    default:
      return state
  }
}

export default products