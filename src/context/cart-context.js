import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useAuth } from "./auth-context";

const CartContext = createContext();

// const cartReducer = (cartState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...cartState,
//         cart: [...cartState.cart, { ...action.payload, quantity: 1 }],
//       };
//     case "INCREASE_QUANTITY":
//       return {
//         ...cartState,
//         cart: cartState.cart.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };
//     case "DECREASE_QUANTITY":
//       return {
//         ...cartState,
//         cart: cartState.cart.map((item) =>
//           item.id === action.payload.id
//             ? {
//                 ...item,
//                 quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
//               }
//             : item
//         ),
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...cartState,
//         cart: cartState.cart.filter((obj) => obj._id !== action.payload._id),
//       };
//     default:
//       return cartState;
//   }
// };

const CartProvider = ({ children }) => {
  // const [cartState, cartDispatch] = useReducer(cartReducer, {
  //   cart: [],
  // });

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
        // cartState,
        // cartDispatch,
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
