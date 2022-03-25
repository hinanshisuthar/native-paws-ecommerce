import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const cartReducer = (cartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...cartState,
               cart: [
                  ...cartState.cart, 
                  {...action.payload, quantity: 1}]}
            return ;
        case 'INCREASE_QUANTITY':
            return {...cartState,
               cart: 
                cartState.cart.map((item) => item.id === action.payload.id ? 
                    {...item, quantity: item.quantity + 1} : item)
                };
        case 'DECREASE_QUANTITY':
            return {...cartState,
               cart: 
                cartState.cart.map((item) => item.id === action.payload.id ? 
                    {...item, quantity: item.quantity > 1 ? item.quantity - 1: item.quantity} : item)
                };
        case 'REMOVE_FROM_CART':
            return {
                ...cartState,
                cart: cartState.cart.filter((obj) => obj._id !== action.payload._id)
            }
        default:
            return cartState;
    }
}

const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: []
    })
    return (
    <CartContext.Provider value={{cartState, cartDispatch}}>
        {children}
    </CartContext.Provider>
    )
}

export {useCart, CartProvider};