import productService from '../services/productService';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from '../actions/productActions'
import EditableProduct from "./EditableProduct";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    (async () => {
      const receivedProducts = await productService.getProducts();
      dispatch(productsReceived(receivedProducts))
    })();
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