import { useState } from "react";
import { useProduct } from "../../context/product-context";
import { ProductFiltersResponsive } from "./ProductFiltersResponsive";
import { useFilter } from '../../context/filter-context'

const ProductFilters = () => {
  const { filterState: { sortBy, categories, price }, filterDispatch } = useFilter();
  const {
    food,
    leash,
    toys,
    clothes,
    small,
    medium,
    large,
    arrival,
    choice,
    bestseller,
  } = categories;
  const [showFilters, setShowFilters] = useState(false);

  const showFiltersMenu = () => {
    setShowFilters(!showFilters);
  };
  return (
    <aside className="filters-sec p-2">
      <div className="filter-con flex-row-sb my-sm">
        <button className="flex-row">
          <h3>FILTERS</h3>
          <i
            className="fa-solid fa-arrow-down filters-arrow px-md"
            onClick={showFiltersMenu}></i>
        </button>

        <a className="link" href="#">
          <h5>
            <button
              className="clear-all-btn"
              onClick={() => filterDispatch({ type: "CLEAR" })}>
              clear all
            </button>
          </h5>
        </a>
      </div>
      <hr />
      {showFilters ? (
        <ProductFiltersResponsive />
      ) : (
        <div className="filter-content">
          <div className="sort-con my-sm">
            <h5>SORT BY</h5>
            <form action="#" className="m-0 py-1 flex-col">
              <label htmlFor="sort-h-t-l">
                <input
                  type="radio"
                  id="sort-h-t-l"
                  name="sort"
                  className="input"
                  checked={sortBy === "HIGH_TO_LOW"}
                  onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
                />
                Price: High to Low
              </label>

              <label htmlFor="sort-l-t-h">
                <input
                  type="radio"
                  id="sort-l-t-h"
                  name="sort"
                  className="input"
                  checked={sortBy === "LOW_TO_HIGH"}
                  onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
                />
                Price: Low to High
              </label>

              <label htmlFor="sort-h-t-l-rating">
                <input
                  type="radio"
                  id="sort-h-t-l-rating"
                  name="sort"
                  className="input"
                  checked={sortBy === "RATING_HIGH_TO_LOW"}
                  onChange={() => filterDispatch({ type: "RATING_HIGH_TO_LOW" })}
                />
                Rating: High to Low
              </label>

              <label htmlFor="sort-l-t-h-rating">
                <input
                  type="radio"
                  id="sort-l-t-h-rating"
                  name="sort"
                  className="input"
                  checked={sortBy === "RATING_LOW_TO_HIGH"}
                  onChange={() => filterDispatch({ type: "RATING_LOW_TO_HIGH" })}
                />
                Rating: Low to High
              </label>
            </form>
          </div>

          <div className="price-range my-md">
            <h5>PRICE</h5>
            <label htmlFor="price-range">
              <input
                id="price-range"
                type="range"
                step="100"
                min="100"
                max="500"
                value={price}
                onChange={(e) =>
                  filterDispatch({ type: "PRICE", price: e.target.value })
                }
              />
              {price} and below
            </label>
          </div>

          <div className="sort-con">
            <h5 className="py-sm">CATEGORIES</h5>
            <form name="categories" className="categories flex-col">
              <h6 className="p-sm">Products</h6>
              <label htmlFor="food">
                <input
                  type="checkbox"
                  className="input"
                  id="food"
                  value="food"
                  name="categories-name"
                  checked={food}
                  onChange={() => filterDispatch({ type: "FOOD" })}
                />
                Food
              </label>
              <label htmlFor="leash">
                <input
                  type="checkbox"
                  className="input"
                  id="leash"
                  value="leash"
                  name="categories-name"
                  checked={leash}
                  onChange={() => filterDispatch({ type: "LEASH" })}
                />
                Leash, Harness
              </label>
              <label htmlFor="toys">
                <input
                  type="checkbox"
                  className="input"
                  id="toys"
                  value="toys"
                  name="categories-name"
                  checked={toys}
                  onChange={() => filterDispatch({ type: "TOYS" })}
                />
                Toys
              </label>
              <label htmlFor="clothes">
                <input
                  type="checkbox"
                  className="input"
                  id="clothes"
                  value="clothes"
                  name="categories-name"
                  checked={clothes}
                  onChange={() => filterDispatch({ type: "CLOTHES" })}
                />
                Clothes
              </label>
            </form>

            <form name="categories" className="categories flex-col">
              <h6 className="p-sm">Breed Size</h6>
              <label htmlFor="small">
                <input
                  type="checkbox"
                  className="input"
                  id="small"
                  value="small"
                  name="categories-name"
                  checked={small}
                  onChange={() => filterDispatch({ type: "SMALL" })}
                />
                Small
              </label>
              <label htmlFor="medium">
                <input
                  type="checkbox"
                  className="input"
                  id="medium"
                  value="medium"
                  name="categories-name"
                  checked={medium}
                  onChange={() => filterDispatch({ type: "MEDIUM" })}
                />
                Medium
              </label>
              <label htmlFor="large">
                <input
                  type="checkbox"
                  className="input"
                  id="large"
                  value="large"
                  name="categories-name"
                  checked={large}
                  onChange={() => filterDispatch({ type: "LARGE" })}
                />
                Large
              </label>
            </form>

            <form name="categories" className="categories flex-col">
              <h6 className="p-sm">TAGS</h6>
              <label htmlFor="bestseller">
                <input
                  type="checkbox"
                  className="input"
                  id="bestseller"
                  value="bestseller"
                  name="categories-name"
                  checked={bestseller}
                  onChange={() => filterDispatch({ type: "BEST_SELLER" })}
                />
                Best Seller
              </label>
              <label htmlFor="arrival">
                <input
                  type="checkbox"
                  className="input"
                  id="arrival"
                  value="arrival"
                  name="categories-name"
                  checked={arrival}
                  onChange={() => filterDispatch({ type: "NEW" })}
                />
                New
              </label>
              <label htmlFor="choice">
                <input
                  type="checkbox"
                  className="input"
                  id="choice"
                  value="choice"
                  name="categories-name"
                  checked={choice}
                  onChange={() => filterDispatch({ type: "CHOICE" })}
                />
                Native's Choice
              </label>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
};

export { ProductFilters };
