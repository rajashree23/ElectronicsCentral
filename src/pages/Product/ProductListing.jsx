import { Filters } from "./component/Filters/Filters";

import { useDataContext } from "../../context/data/DataContext";

import {
  filterAll
} from "../../utils/filterProduct";

import { ProductCard } from "./component/ProductCard.jsx/ProductCard";

import "./product.mobile.layout.css";
import "./product.desktop.layout.css";

export const ProductListing = () => {
  const { filters, products } = useDataContext();
  const filteredData = filterAll(products, filters)
  
  return (
    <div className="product-container">
      <Filters />

      <div className="product-list-container">
        <h1>
          Showing All Products
          <span> ({filteredData.length} products)</span>
        </h1>

        <div className="product-card-container">
          {filteredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
