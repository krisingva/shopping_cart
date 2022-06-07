import axios from 'axios'
const baseUrl = "/api/products";

const getProducts = async () => {
  try {
    const { data } = await axios.get(baseUrl)
    console.log(data)
    return data; 
  } catch (e) {
    console.error(e)
  }
}

const createProduct = async (newProduct) => {
  try {
    const { data } = await axios.post(baseUrl, newProduct)
    return data
  } catch (e) {
    console.error(e)
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response
  } catch (e) {
    console.error(e)
  }
}

const updateProduct = async (id, newProduct) => {
  try {
    const { data } = await axios.put(`${baseUrl}/${id}`, newProduct);
    return data
  } catch (e) {
    console.error(e)
  }
}

export default {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};