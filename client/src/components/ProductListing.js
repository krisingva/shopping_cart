import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../features/products';
import EditableProduct from "./EditableProduct";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

    return (
      <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <div className="product" key={product._id}>
            <EditableProduct product={product}
            />
          </div>
        );
      })}
    </div>
    )
  }

export default ProductListing;