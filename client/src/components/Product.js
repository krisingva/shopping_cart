import { useDispatch } from 'react-redux';
import { productDeleted, productEdited } from '../actions/productActions';
import { cartItemAdded } from '../actions/cartActions';
import productService from '../services/productService';
import cartService from "../services/cartService";

const Product = ({
  product,
  onHandleShowEdit,
}) => {
  const dispatch = useDispatch();
  
  const handleEditProduct = (e) => {
    e.preventDefault();
    onHandleShowEdit();
  };

  const handleDelete = (e) => {
    e.preventDefault();

    (async () => {
      await productService.deleteProduct(product._id);
      dispatch(productDeleted(product));
    })()
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    (async () => {
      const data = await cartService.addCartItem(product._id)
      dispatch(cartItemAdded(data.item))
      dispatch(productEdited(data.product))
    })()
  }

  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <a
          className={`button add-to-cart ${product.quantity === 0 ? "disabled" : ""}`} onClick={handleAddToCart} >
          Add to Cart
        </a>
        <a className="button edit" onClick={handleEditProduct}>
          Edit
        </a>
      </div>
      <a className="delete-button" onClick={handleDelete}>
        <span>X</span>
      </a>
    </div>
  );
};

export default Product;
