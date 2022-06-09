export const productsReceived = (products) => {
  return {type: 'PRODUCTS_RECEIVED', payload: products};
}

export const productAdded = (product) => {
  return {type: 'PRODUCT_ADDED', payload: product};
}

export const productRemoved = (id) => {
  return {type: 'PRODUCT_REMOVED', payload: id};
}

export const productUpdated = (product) => {
  return {type: 'PRODUCT_UPDATED', payload: product};
}

export const productAddedToCart = (product) => {
  return {type: 'PRODUCT_ADDED_TO_CART', payload: product};
}