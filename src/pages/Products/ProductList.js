import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { useFilter } from "../../context";
import { getProductList } from "../../services";
import { toast } from "react-toastify";
import Loading from "../../assets/images/loading2.gif";

export const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { products, initialProductList } = useFilter();
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore Sneakers Collection");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProductList(searchTerm);
        setLoading(false);
        initialProductList(data);
      } catch (error) {
        toast.info(error.message, { position: "bottom-center" });
      }
    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  return (
    <main>
      <section className="my-5">
        <div className="mx-3 flex justify-between">
          <span className="text-xl font-semibold text-slate-700 dark:text-slate-100 mb-5 ">{`All Shoes (${products.length})`}</span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-start lg:flex-row">
          {loading && <p><img src={Loading} alt="" /></p>}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};
