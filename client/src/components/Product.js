import { useDispatch } from 'react-redux';
import { deleteProduct } from "../features/products";
import { addToCart } from "../features/cart";

const Product = ({ product, onHandleShowEdit }) => {
  const dispatch = useDispatch();
  
  const handleEditProduct = (e) => {
    e.preventDefault();
    onHandleShowEdit();
  };

  const handleDelete = (e) => {
    e.preventDefault(); 
    dispatch(deleteProduct({ product }))
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ product }))
  }

  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <a
          href="/#" className={`button add-to-cart ${product.quantity === 0 ? "disabled" : ""}`} onClick={handleAddToCart} >
          Add to Cart
        </a>
        <a href="/#" className="button edit" onClick={handleEditProduct}>
          Edit
        </a>
      </div>
      <a href="/#" className="delete-button" onClick={handleDelete}>
        <span>X</span>
      </a>
    </div>
  );
};

export default Product;
