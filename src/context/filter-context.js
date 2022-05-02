import { useContext, useReducer, createContext } from "react";
import { reducerFunction } from "../utilities/reducerFunction";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(reducerFunction, {
    sortBy: "",
    categories: {
      food: false,
      leash: false,
      toys: false,
      clothes: false,
      small: false,
      medium: false,
      large: false,
      arrival: false,
      choice: false,
      bestseller: false,
    },
    price: 500,
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
