import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cart from './Cart';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import axios from 'axios';
import { productsReceived } from "../actions/productListActions";

const App = () => {
  const [productList, setProductList] = useState([])
  const [cart, setCart] = useState([]);
  const [edit, setEdit] = useState(false);


  const dispatch = useDispatch();
  const updateCart = (item) => {
    setCart(cart.map(cartItem => {
      if (cartItem._id === item._id) {
        return item;
      } else {
        return cartItem;
      }
    }));
  }

  const updateProductList = (product) => {
    setProductList(productList.map(currProduct => {
      if (currProduct._id === product._id) {
        return product;
      } else {
        return currProduct;
      }
    }));
  }



  const handleAddToCart = (id)=> {
    return async () => {
      try {
        const results = await axios.post(`/api/add-to-cart`, {productId: id});
        updateCart(results.data.item);
        updateProductList(results.data.product);
      } catch(e) {
        console.error(e);
      }
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      dispatch(productsReceived(data));
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get("/api/cart");
      setCart(data);
    };
    fetchCart();
  }, [dispatch]);

  const handleSubmit = async (newProduct, callback) => {
    try {
      const {data} = await axios.post("/api/products", { ...newProduct });
      setProductList(productList.concat(data));
      if (callback) {
        callback();
      }
    } catch(e) {
        console.error(e);
    }
  }

  const handleUpdate = async (id, updatedProduct, callback) => {
      try {
        console.log("Hello");
        const {data} = await axios.put(`/api/products/${id}`, { ...updatedProduct});
        console.log(data);
        setProductList(productList.map(product => {
          if (product._id === id) {
            return data;
          } else {
            return product;
          }
        }));
        if (callback) {
          callback();
        }
      } catch(e) {
        console.error(e);
      }
  }

  const handleCheckout = async () => {
    try {
      await axios.post("/api/checkout");
      setCart([]);
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
      <Cart onCheckout={handleCheckout} />
    </header>

    <main>
      <ProductList onDelete={handleDelete} onAddToCart={handleAddToCart} onUpdate={handleUpdate} />
      <AddProduct onSubmit={handleSubmit}/>
    </main>
  </div>
    </>
  );
};

export default App;
