import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = ({ cart }) => {
  if (cart.length === 0) {
    return (
      <>
        <h1>The Shop!</h1>
        <div class="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a class="button checkout disabled">Checkout</a>
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
        <a class="button checkout">Checkout</a>
      </div>
    </>
  );
}

export default Cart;