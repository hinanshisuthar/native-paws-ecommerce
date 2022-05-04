import { Link } from "react-router-dom";
import { useFilter } from "../../context/filter-context";

const TopPanel = () => {
  const {filterDispatch} = useFilter();
  return (
    <div className="grid-6-col-auto pet-cards py-1 px-2 hori-scroll">
      <Link to="/products" className="router-link-prods">
        <div
          className="p-card center"
          onClick={() => filterDispatch({ type: "SMALL" })}>
          <a href="#" className="p-img center">
            <img
              src="https://www.zigly.com/media/wysiwyg/for_dogs.png"
              alt="product-image"
              className="min-img-small img-responsive"
            />
          </a>
          <a href="#" className="p-sm text-uppercase">
            <h6>Small Breed</h6>
          </a>
        </div>
      </Link>
      <Link to="/products" className="router-link-prods">
        <div
          className="p-card center"
          onClick={() => filterDispatch({ type: "MEDIUM" })}>
          <a href="#" className="p-img center">
            <img
              src="https://www.zigly.com/media/wysiwyg/for_cats.png"
              alt="product-image"
              className="min-img-small img-responsive"
            />
          </a>
          <a href="#" className="p-sm text-uppercase">
            <h6>Medium Breed</h6>
          </a>
        </div>
      </Link>
      <Link to="/products" className="router-link-prods">
        <div
          className="p-card center"
          onClick={() => filterDispatch({ type: "LARGE" })}>
          <a href="#" className="p-img center">
            <img
              src="https://www.zigly.com/media/wysiwyg/puppy-store.png"
              className="min-img-small img-responsive"
            />
          </a>
          <a href="#" className="p-sm text-uppercase">
            <h6>Large Breed</h6>
          </a>
        </div>
      </Link>
      <Link to="/products" className="router-link-prods">
        <div
          className="p-card center"
          onClick={() => filterDispatch({ type: "BEST_SELLER" })}>
          <a href="#" className="p-img center">
            <img
              src="https://www.zigly.com/media/wysiwyg/vet-consulting.png"
              alt="product-image"
              className="min-img-small img-responsive"
            />
          </a>
          <a href="#" className="p-sm text-uppercase">
            <h6>Best-sellers</h6>
          </a>
        </div>
      </Link>
      <Link to="/products" className="router-link-prods">
        <div
          className="p-card center"
          onClick={() => filterDispatch({ type: "CHOICE" })}>
          <a href="#" className="p-img center">
            <img
              src="https://www.zigly.com/media/wysiwyg/pet-grooming.png"
              alt="product-image"
              className="min-img-small img-responsive"
            />
          </a>
          <a href="#" className="p-sm text-uppercase">
            <h6>Native's choice</h6>
          </a>
        </div>
      </Link>
      <Link to="/products" className="router-link-prods">
        <div
          className="p-card center"
          onClick={() => filterDispatch({ type: "NEW" })}>
          <a href="#" className="p-img center">
            <img
              src="https://www.zigly.com/media/wysiwyg/exp-center.png"
              alt="product-image"
              className="min-img-small img-responsive"
              style={{ width: "80%" }}
            />
          </a>
          <a href="#" className="p-sm text-uppercase">
            <h6>New Products</h6>
          </a>
        </div>
      </Link>
    </div>
  );
};

export { TopPanel };
