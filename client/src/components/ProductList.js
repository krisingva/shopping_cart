import Product from './Product';
import axios from "axios";
import { productsReceived, productAdded, productRemoved, productUpdated, productAddedToCart } from "../actions/productListActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductList = ({ productList, onDelete, onAddToCart, onUpdate }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      dispatch(productsReceived(data));
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div class="product-listing">
        <h2>Products</h2>
        {productList.map(product => {
          return <Product key={product.id} product={product} onDelete={onDelete} onAddToCart={onAddToCart} onUpdate={onUpdate}/>;
        })}
    </div>
  )
}

export default ProductList;

