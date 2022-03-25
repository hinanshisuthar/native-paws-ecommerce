import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();
const useWishlist = () => useContext(WishlistContext);

const wishlistReducerFunc = (wishlistState, action) => {
    switch (action.type) {
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...wishlistState,
                wishlist: 
                    wishlistState.wishlist.filter((product) => product._id != action.payload._id)
            }
        case 'ADD_TO_WISHLIST':
            return {
                ...wishlistState,
                wishlist: [
                    ...wishlistState.wishlist,
                    {...action.payload},
            ],}
        default:
            return wishlistState;
    }
}

const WishlistProvider = ({children}) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducerFunc, {
        wishlist: [],
    })
    return (
        <WishlistContext.Provider value={{wishlistState, wishlistDispatch}}>
        {children}
        </WishlistContext.Provider>
    )
}

export {useWishlist, WishlistProvider};