import axios from "axios";

const Product = ( {product, onDelete} ) => {
  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">{product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        <div class="actions product-actions">
          <button class="button add-to-cart">Add to Cart</button>
          <button class="button edit">Edit</button>
        </div>
        <button class="delete-button" onClick={onDelete(product._id)}><span>X</span></button>
      </div>
    </div>
  );
};

export default Product;