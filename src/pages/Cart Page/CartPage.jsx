import { HorizontalCard } from '../../components/HorizontalCard'
import { Navbar } from '../../components/Navbar'
import { useCart } from '../../context/cart-context'
import './cart.css'
import { CartDetails } from './CartDetails'
import { Link } from "react-router-dom";

const CartPage = () => {
    const {cartState} = useCart();
    return (
        <>
        <Navbar />
        <h1 className="center m-md">My Shopping Cart</h1>
        <div className="cart-grid grid grid-60-40 auto-flex">
        <div className="cart-cards flex-col-sb p-1">
            {(cartState.cart.length === 0 ) ? (
                <div className="empty-cart">
                    <h3 className="m-md">No products in Cart</h3>
                    <Link to="/products" className="">
                        <button className="btn btn-primary m-sm">Shop Products</button>
                    </Link>
                    <Link to="/wishlist" className="">
                        <button className="btn btn-secondary m-sm">Go To Wishlist</button>
                    </Link>
                </div>
            ) : (cartState.cart.map((product) => {
                return <HorizontalCard product={product} id={product._id}/>
            }))}
            
        </div>
        <CartDetails />
        </div>
        </>
    )
}

export {CartPage};