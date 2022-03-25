import "./placeOrder.css";
import { useState } from "react";

const PlaceOrder = () => {
  const [closeOrder, setCloseOrder] = useState("flex");

  const closeOrderPlaced = () => {
    console.log("1");
    setCloseOrder("none");
  };

  return (
    <div
      className="toast toast-success py-sm px-1 flex-row-sb"
      style={{ display: `${closeOrder}` }}>
      <div className="toast-content">
        Order Confirmed! We are as happy as you.
      </div>
      <div className="toast-dismiss">
        <i className="fa fa-times" onClick={closeOrderPlaced}></i>
      </div>
    </div>
  );
};

export { PlaceOrder };
