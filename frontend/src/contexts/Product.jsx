import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  return (
    <ProductContext.Provider value={{showCreateProduct, setShowCreateProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
    children: PropTypes.node
}
export default ProductProvider