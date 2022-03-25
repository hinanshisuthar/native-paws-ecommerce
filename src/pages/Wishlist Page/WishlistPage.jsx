import { useEffect } from "react";
import { Navbar } from "../../components/Navbar"
import { VertDismissCard } from "../../components/VertDismissCard";
import { useWishlist } from "../../context/wishlist-context";
import './wishlist.css'
const WishlistPage = () => {
    const {wishlistState} = useWishlist();
return (
    <>
    <Navbar />
        <div className="cart-wrapper mt-2">
            <h1 className="center p-md title">My Wishlist ( <span>{wishlistState.wishlist.length}</span>-items)</h1>
            <hr className="center" />
            {wishlistState.wishlist.length === 0 ? (
                <h1 className="center p-md title">No items in Wishlist</h1>
            ) : (
            <div className="wish-prods grid grid-3-col grid-3-col-auto pt-md">
                {wishlistState.wishlist.map((product) => {
                    return <VertDismissCard product={product} />
                })}
            </div>
            )}
            
        </div>
    </>
)
}

export {WishlistPage};