import { useState } from 'react';
import Product from './Product';
import EditForm from './EditForm';

const EditableProduct = ({ product }) => {
  const [showEdit, setShowEdit] = useState(false);
  
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
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}
    </div>
  );
};

export default EditableProduct