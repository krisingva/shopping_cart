import { useContext, useEffect } from "react";
import EditableProduct from "./EditableProduct";
import { getAllProducts, ProductContext } from '../context/products-context'

const ProductListing = () => {  
  const { products, dispatch: productsDispatch } = useContext(ProductContext)

  useEffect(() => {
    getAllProducts(productsDispatch);
  }, [productsDispatch]);

    return (
      <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <div className="product" key={product._id}>
            <EditableProduct
              product={product}
              // onHandleDelete={onHandleDelete}
              // onHandleUpdate={onHandleUpdate}
              // onHandleAddItem={onHandleAddItem}
            />
          </div>
        );
      })}
    </div>
    )
  }

export default ProductListing;