import { Navbar } from "../../components/Navbar";
import { ProductFilters } from "./ProductFilters";
import { ProductRender } from "./ProductRender";
import "./ProductPage.css";
import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";

const ProductPage = () => {
  const { setLoader } = useAuth();

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 800);
  }, []);

  return (
    <>
      <Navbar />
      <main className="grid grid-25-75 grid-1-col main main-prods pb-1">
        <ProductFilters />
        <div className="all-prods center">
          <h1 className="mb-2">All products</h1>
          <ProductRender />
        </div>
      </main>
    </>
  );
};

export { ProductPage };
