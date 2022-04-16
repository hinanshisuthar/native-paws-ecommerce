import "./singgleproduct.css";
import "../ProductPage/ProductPage.css";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";

const SingleProductCard = (product) => {
  const { _id, title, tag, price, rating, img, tagColor, size, description } =
    product;
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <div className="center product-con" key={_id}>
      <div className="grid grid-40-60">
        <div className="prod-img-con px-2 center">
          <img src={img} alt="single-product" className="img-responsive" />
        </div>
        <div className="flex-col-sb-start">
          <div className="flex-col-sb-start p-1 prod-quicks">
            <h2 className="m-sm">{title}</h2>
            <div className="flex-row-sb p-sm prod-quicks">
              <span className={`prod-tag ${tagColor} p-sm text-bold m-sm`}>
                {tag}
              </span>
              <div className="size-options" style={{ margin: "0" }}>
                <button style={{ borderRadius: "10px" }}>{size}</button>
              </div>
              <p className="prod-price text-md">Rs {price}</p>
              <p className="ratings-con text-md ml-0">
                <i className="fas fa-star"></i>
                {rating}
              </p>
            </div>
          </div>
          <p className="p-md text-italic">
            <span className="text-bold">Product Description: </span>
            {description}.
          </p>
          <div className="prod-links prod-quicks p-1">
            <div className="prod-btn flex-col-sb p-sm">
              {cartState.cart.find((item) => item._id === product._id) ? (
                <Link to="/cart" className="router-link m-sm">
                  <button className="btn btn-secondary ml-md">Go to Cart</button>
                </Link>
              ) : (
                <button
                  className="btn btn-primary m-sm"
                  onClick={() =>
                    cartDispatch({ type: "ADD_TO_CART", payload: product })
                  }>
                  Add to Cart
                </button>
              )}
              {wishlistState.wishlist.find(
                (item) => item._id === product._id
              ) ? (
                <button
                  className="prod-like btn btn-secondary m-sm"
                  style={{ color: "#f34e4e" }}
                  onClick={() =>
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: product,
                    })
                  }>
                  Go To WishList
                </button>
              ) : (
                <button
                  className="prod-like btn btn-secondary m-sm"
                  style={{ color: "#f34e4e" }}
                  onClick={() =>
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    })
                  }>
                  Add To WishList
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleProductCard };
