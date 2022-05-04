import { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { reducerFunction } from "../utilities/reducerFunction";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{search, setSearch, products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
