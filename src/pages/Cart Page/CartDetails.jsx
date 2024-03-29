import { useState } from "react";
import { useCart } from "../../context/cart-context";
import { PlaceOrder } from "./PlaceOrder";

const CartDetails = () => {
  const { cart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState("none");
  const [offers, setOffers] = useState(0);

  const showOrderPlaced = () => {
    setOrderPlaced("flex");
  };

  const totalPrice = cart.reduce(
    (acc, curr) => acc + Number(curr.price) * Number(curr.qty),
    0
  );

  const showOfferDiscount = () => {
    setOffers(200);
  };

  return (
    <>
      <div className="cart-details p-1">
        <div className="prod-btn flex-row-sb p-1">
          <a className="link p-sm" href="#">
            <h5 onClick={showOfferDiscount}>
              <i className="fa-solid fa-tag"></i>Apply a coupon
            </h5>
          </a>
        </div>
        <div className="price-con p-1 flex-col-sb">
          <h5 className="p-sm">
            PRICE DETAILS (<span>{cart.length}</span> items)
          </h5>
          <hr />
          <div className="flex-row-sb p-sm">
            Net Price(in Rs)
            <span>{totalPrice}</span>
          </div>
          <div className="flex-row-sb p-sm">
            Coupon Discount(in Rs)
            <span>{offers}</span>
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
            <span>{totalPrice - offers}</span>
          </div>
        </div>
        <form action="#" className="flex-row-sb p-md" id="gift-form">
          <input type="checkbox" name="gift" id="gift-select" />
          <label htmlFor="gift-select" className="text-left">
            This order contains a gift
          </label>
        </form>
        <button
          className="btn btn-primary place-order"
          onClick={showOrderPlaced}
        >
          <i className="fa-solid fa-truck-fast"></i>Place Order
        </button>
      </div>
      {orderPlaced === "flex" ? <PlaceOrder /> : orderPlaced === "none"}
    </>
  );
};

export { CartDetails };
