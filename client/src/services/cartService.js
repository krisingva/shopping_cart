import axios from 'axios'

const getCartItems = async () => {
  try {
    const { data } = await axios.get("/api/cart");
    return data
  } catch (e) {
    console.error(e)
  }
}

const addCartItem = async (productId) => {
  try {
    const { data } = await axios.post("/api/add-to-cart", {productId});
    return data
  } catch (e) {
    console.error(e)
  }
}

const cartCheckout = async () => {
  try {
    const { data } = await axios.post("/api/checkout")
    return data
  } catch (e) {
    console.error(e)
  }
}

const cartService = {
  getCartItems,
  addCartItem,
  cartCheckout
}

export default cartService