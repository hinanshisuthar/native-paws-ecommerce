import { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { reducerFunction } from "../utilities/reducerFunction";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducerFunction, {
    // sortBy: "",
    // categories: {
    //   food: false,
    //   leash: false,
    //   toys: false,
    //   clothes: false,
    //   small: false,
    //   medium: false,
    //   large: false,
    //   arrival: false,
    //   choice: false,
    //   bestseller: false,
    // },
    // price: 500,
  // });
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const productData = await axios.get("/api/products");
  //       setProducts(productData.data.products);
  //     } catch (err) {
  //       console.log(`An Error Occured: ${err}`);
  //     }
  //   };
  //   getProducts();
  // }, []);

  return (
    <ProductContext.Provider
      value={{search, setSearch, products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
