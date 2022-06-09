export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products };
}

export const productAdded = (product) => {
  return { type: "PRODUCT_ADDED", payload: product}
}

export const productEdited = (product) => {
  return { type: "PRODUCT_EDITED", payload: product}
}

export const productDeleted = (product) => {
  return { type: "PRODUCT_DELETED", payload: product }
}

