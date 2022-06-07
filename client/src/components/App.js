import React from "react";
import { useState, useEffect } from "react";
import Cart from './Cart';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import axios from 'axios';

const App = () => {
  const [productList, setProductList] = useState([])
  const [cart, setCart] = useState([  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 1,
    price: 79.99
  },
  {
    id: 3,
    title: "Yamaha Portable Keyboard",
    quantity: 1,
    price: 155.99
  }]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProductList(data);
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (newProduct, callback) => {
    try {
      const {data} = await axios.post("/api/products", { ...newProduct });
      console.log(data);
      setProductList(productList.concat(data));
      if (callback) {
        callback();
      }
    } catch(e) {
        console.error(e);
    }
  }

  const handleDelete = (id) => {
    return async () => {
      try {
        await axios.delete(`/api/products/${id}`);
        const updatedProductList = productList.filter(product => {
          return product._id !== id;
        });
        setProductList(updatedProductList);
      } catch(e) {
        console.error(e);
      }
    }
  }

  return (
    <>
      <div id="app">
    <header>
      <Cart cart={cart} />
    </header>

    <main>
      <ProductList productList={productList} onDelete={handleDelete}/>
      <AddProduct onSubmit={handleSubmit}/>
    </main>
  </div>
    </>
  );
};

export default App;

// Cart
  // Cart Item
// Product list
  // Product
  // Edit Product
// Add product
