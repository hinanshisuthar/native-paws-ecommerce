import { createContext, useContext, useReducer } from "react";
import { useEffect, useState } from "react";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const axios = require("axios").default;
  const { token } = useAuth();

  const addProductToWishlist = async (product) => {
    try {
      const {
        data: { wishlist },
      } = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setWishlist(wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeProductFromWishlist = async (productId) => {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`api/user/wishlist/${productId}`, {
        headers: {
          authorization: token,
        },
      });
      setWishlist(wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
