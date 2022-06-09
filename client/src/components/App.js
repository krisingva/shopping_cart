import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import productService from '../services/productService'
import cartService from '../services/cartService'

const App = () => {
  let [cartItems, setCartItems] = useState([])
  let [products, setProducts] = useState([]);
  let [addFormVisible, setAddFormVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const products = await productService.getProducts();
      setProducts(products);
    })();

    (async () => {
      const cartItems = await cartService.getCartItems();
      setCartItems(cartItems);
    })();

  }, [])

  const handleSubmit = (title, price, quantity, callback) => {
    const newProduct = {
      title,
      price,
      quantity,
    };

      (async () => {
        const addedProduct = await productService.createProduct(newProduct)
        setProducts(products.concat(addedProduct))

        if (callback) {
          callback();
        }
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
        if (prod._id === id) {
          return updatedProduct
        } else {
          return prod;
        }
      }))
    })()
  }

  const handleAddItem = (id) => {
    (async () => {
      const data = await cartService.addCartItem(id)
  
      if (cartItems.length === 0) {
        setCartItems([data.item])
      } else if (cartItems.filter(item => item.productId === id).length === 1) {
        setCartItems(cartItems.map(item => {
          if (item.productId === id) {
            console.log('first')
            return data.item
          } else {
            console.log('second')
            return item;
          }
        }))
      } else {
        setCartItems(cartItems.concat(data.item))
      }

      setProducts(products.map(product => {
        if (product._id === id) {
          return data.product;
        } else {
          return product;
        }
      }))
    })()
  }

  const checkoutCart = async () => {
    await cartService.cartCheckout();
    setCartItems([]) 
  }

  return (
    <div id="app">
      <Cart cartItems={cartItems} onCheckoutCart={checkoutCart} />
      <main>
        <ProductListing
          products={products}
          onHandleDelete={handleDelete}
          onHandleUpdate={handleUpdate}
          onHandleAddItem={handleAddItem}
        />
        <AddForm onHandleSubmit={handleSubmit} addFormVisible={addFormVisible} setAddFormVisible={setAddFormVisible} />
      </main>
    </div>
  );
};

export default App;
