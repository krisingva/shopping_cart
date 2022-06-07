import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import productService from '../services/productService'

const App = () => {
  let [cartItems, setCartItems] = useState([])
  let [products, setProducts] = useState([]);
  let [newProduct, setNewProduct] = useState({})
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    (async () => {
      const products = await productService.getProducts();
      setProducts(products);
    })();
  }, [])

  const handleSubmit = (title, price, quantity) => {
    const newProduct = {
      title,
      price,
      quantity,
    };

      (async () => {
        const addedProduct = await productService.createProduct(newProduct)
        setProducts(products.concat(addedProduct))
      })();
  }

  const handleDelete = (id) => {
    (async () => {
      await productService.deleteProduct(id);
      setProducts(products.filter(prod => prod._id != id));
    })()
  }

  const handleUpdate = (id, title, price, quantity) => {
    const newProduct = {
      title,
      price,
      quantity,
    };

    (async () => {
      const updatedProduct = await productService.updateProduct(id, newProduct);
      setProducts(products.map(prod => {
        if (prod.id === id) {
          return updatedProduct
        } else {
          return prod;
        }
      }))
    })()
  }

  return (
    <div id="app">
      <Cart cartItems={cartItems} />
      <main>
        <ProductListing products={products} onHandleDelete={handleDelete} onHandleUpdate={handleUpdate} title={title} setTitle={setTitle} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />
        <AddForm product={newProduct} onHandleSubmit={handleSubmit} 
          title={title} setTitle={setTitle} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity}
        />
      </main>
    </div>
  );
};

export default App;
