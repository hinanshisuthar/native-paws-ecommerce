import { useCart } from "../../context/cart-context";

const CartDetails = () => {
    const {cartState} = useCart();

    const totalPrice = cartState.cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.quantity), 0)

    const couponDiscount = 100;

    return (
        <div className="cart-details p-1">
                <div className="prod-btn flex-row-sb p-1">
                    <a className="link p-sm" href="#">
                        <h5><i className="fa-solid fa-tag"></i>Apply a coupon</h5>
                    </a>
                </div>
                <div className="price-con p-1 flex-col-sb">
                    <h5 className="p-sm">PRICE DETAILS (<span>{cartState.cart.length}</span> items)</h5>
                    <hr />
                    <div className="flex-row-sb p-sm">
                        Net Price(in Rs)
                        <span>{totalPrice}</span>
                    </div>
                    <div className="flex-row-sb p-sm">
                        Coupon Discount(in Rs)
                        <span>{couponDiscount}</span>
                    </div>
                    <div className="flex-row-sb p-sm">
                        Delivery Charges(in Rs)
                        <div className="free">
                            <strike> 99 </strike>
                            <span>FREE</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex-row-sb p-sm text-bold">
                        Payable Amount(in Rs)
                        <span>{totalPrice - couponDiscount}</span>
                    </div>
                </div>
                <form action="#" className="flex-row-sb p-md" id="gift-form">
                    <input type="checkbox" name="gift" id="gift-select" />
                    <label htmlFor="gift-select" className="text-left">This order contains a gift</label>
                </form>
                <button className="btn btn-primary place-order"><i className="fa-solid fa-truck-fast"></i>Place Order</button>
            </div>
    )
}

export {CartDetails};