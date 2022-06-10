import CartItem from './CartItem';
import CartTotal from './CartTotal';
import axios from 'axios';
import { checkout, cartReceived } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get("/api/cart");
      dispatch(cartReceived(data));
    };
    fetchCart();
  }, [dispatch]);

  const handleCheckout = async () => {
      await axios.post("/api/checkout");
      dispatch(checkout());
  }

  if (cart.length === 0) {
    return (
      <>
        <h1>The Shop!</h1>
        <div class="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <button class="button checkout disabled" >Checkout</button>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>The Shop!</h1>
      <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cart.map(item => {
            return <CartItem key={item.id} title={item.title} quantity={item.quantity} price={item.price} />
          })}
          <CartTotal cart={cart}/>
        </table>
        <button class="button checkout" onClick={handleCheckout} >Checkout</button>
      </div>
    </>
  );
}

export default Cart;

// import Product from './Product';
// import axios from "axios";
// import { productsReceived, productAdded, productRemoved, productUpdated, productAddedToCart } from "../actions/productListActions";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// const ProductList = ({ productList, onDelete, onAddToCart, onUpdate }) => {
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await axios.get("/api/products");
//       dispatch(productsReceived(data));
//     };
//     fetchProducts();
//   }, [dispatch]);
//   return (
//     <div class="product-listing">
//         <h2>Products</h2>
//         {productList.map(product => {
//           return <Product key={product.id} product={product} onDelete={onDelete} onAddToCart={onAddToCart} onUpdate={onUpdate}/>;
//         })}
//     </div>
//   )
// }

// export default ProductList;