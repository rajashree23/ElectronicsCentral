import { Link } from "react-router-dom";

import { ProductCategoryCard } from "./component/ProductCategory/ProductCategoryCard";
import { Footer } from "./component/Footer/Footer";

import { useDataContext } from "../../context/data/DataContext";

import "./landing.mobile.layout.css";
import "./landing.desktop.layout.css";


export const Landing = () => {
  const { categories } = useDataContext();

  return (
    <div>
      <div className="hero-container">
        <div className="hero-image-container"></div>
        <div className="description">
          <h1>
            <span>Your one-stop-store</span>
            <span> for electronics!</span>
          </h1>
          <Link className="link" to="/products">
            Shop now
          </Link>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="categories-container">
        <h1>Top selling categories</h1>
        <div className="category">
          {categories.map((category) => (
            <ProductCategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
