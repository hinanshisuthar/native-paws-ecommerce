import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducerFunction, {
        sortBy: "",
        categories: {food: false, leash: false, toys: false, clothes: false, small: false, medium: false, large: false, arrival: false, choice: false, bestseller: false},
        price: 500,
    })
    return (
        <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>
    )
}

export {useProduct, ProductProvider};