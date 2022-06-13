import { createContext, useReducer } from 'react';
import productService from '../services/productService';

export const ProductContext = createContext();

export const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return action.payload;
    case "PRODUCT_ADDED":
      return state.concat(action.payload);
    case "PRODUCT_UPDATED":
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

export const getAllProducts = async (dispatch) => {
  const products = await productService.getProducts();
  console.log(products)
  dispatch({ type: 'PRODUCTS_RECEIVED', payload: products });
};

export const addProduct = async (newProduct, dispatch, callback) => {
  const addedProduct = await productService.createProduct(newProduct)
  dispatch({ type: "PRODUCT_ADDED", payload: addedProduct });

  if (callback) {
    callback();
  }
}

export const updateProduct = async (product, dispatch, callback) => {
  const updatedProduct = await productService.updateProduct(product._id, product);
  dispatch({ type: "PRODUCT_UPDATED", payload: updatedProduct})
  if (callback) {
    callback()
  }
}

export const deleteProduct = async (product, dispatch) => {
  await productService.deleteProduct(product._id);
  dispatch({ type: "PRODUCT_DELETED", payload: product})
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}