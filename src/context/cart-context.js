import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useAuth } from "./auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const axios = require("axios").default;
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.isLoggedIn) {
      (async () => {
        const cartResponse = await axios.get("/api/user/cart", {
          headers: {
            authorization: auth.token,
          },
        });
        setCart(cartResponse.data.cart);
      })();
    } else {
      setCart([]);
    }
  }, [auth]);

  const addProductToCart = async (product) => {
    try {
      const addToCartResponse = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCart(addToCartResponse.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const removeProductFromCart = async (productId) => {
    try {
      const removeFromCartResponse = await axios.delete(
        `/api/user/cart/${productId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCart(removeFromCartResponse.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductQntyInCart = async (productId, updateType) => {
    try {
      const updateCartQntyResponse = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: updateType,
          },
        },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCart(updateCartQntyResponse.data.cart);
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
        updateProductQntyInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
