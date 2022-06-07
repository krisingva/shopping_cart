const CartTotal = ({ cart }) => {
  let total = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  return (
    <tr>
      <td colspan="3" class="total">Total: ${total.toFixed(2)}</td>
    </tr>
  );
};

export default CartTotal;