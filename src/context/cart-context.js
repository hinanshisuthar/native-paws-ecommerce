import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useAuth } from "./auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const axios = require("axios").default;
  const { token } = useAuth();

  const addProductToCart = async (product) => {
    try {
      const {
        data: { cart },
      } = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const removeProductFromCart = async (productId) => {
    try {
      const {
        data: { cart },
      } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: token,
        },
      });
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductQntyInCart = async (productId, updateType) => {
    try {
      const {
        data: { cart },
      } = await axios.post(
        `api/user/cart/${productId}`,
        {
          action: {
            type: updateType === "increment" ? "increment" : "decrement",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        removeProductFromCart,
        updateProductQntyInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
