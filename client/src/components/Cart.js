import CartItem from './CartItem'

const Cart = ({ cartItems }) => {
  console.log(cartItems)
  if (cartItems.length === 0) {
    return (
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a className="button checkout disabled">Checkout</a>
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
          {cartItems.map((item) => {
            <CartItem key={item.productId} title={item.title} price={item.price} quantity={item.quantity} />;
          })}
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Amazon Kindle E-reader</td>
            <td>2</td>
            <td>$79.99</td>
          </tr>
          <tr>
            <td>Apple 10.5-Inch iPad Pro</td>
            <td>1</td>
            <td>$649.99</td>
          </tr>

          <tr>
            <td colSpan="3" className="total">
              Total: $729.98
            </td>
          </tr>
          </tbody>
        </table>
        <a className="button checkout">Checkout</a>
      </div>
    </header>
  );

}

export default Cart