const CartItem = ({ title, price, quantity }) => {
  return (
    <tr>
      <th>{title}</th>
      <th>{quantity}</th>
      <th>{price}</th>
    </tr>
   )
}

export default CartItem