import { useState } from 'react';
import Product from './Product';
import EditForm from './EditForm';

const EditableProduct = ({ product }) => {
  let [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div>
      <Product
        product={product}
        onHandleShowEdit={handleShowEdit}
      />
      {showEdit && (
        <EditForm
          product={product}
          onHandleShowEdit={handleShowEdit}
        />
      )}
    </div>
  );
};

export default EditableProduct