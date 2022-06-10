import CartItem from './CartItem'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCart, cartCheckout } from '../features/cart'


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart)
  
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch])


  const calculateTotal = () => {
    return cartItems.reduce((accum, val) => {
      accum += val.price * val.quantity;
      return accum;
    }, 0);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    dispatch(cartCheckout());
  }

  if (cartItems.length === 0) {
    return (
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a href="/#" className="button checkout disabled">Checkout</a>
        </div>
      </header>
    );
  }

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tbody>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.productId}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
          <tr>
            <td colSpan="3" className="total">
              Total: ${calculateTotal()}
            </td>
          </tr>
        </tbody>
        </table>{" "}
        <a href="/#" className="button checkout"
          onClick={handleCheckout}
          >Checkout
          </a>
      </div>
    </header>
  );

}

export default Cart