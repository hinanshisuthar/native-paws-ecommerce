import { createContext, useContext, useState } from "react";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{ search, setSearch, products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
