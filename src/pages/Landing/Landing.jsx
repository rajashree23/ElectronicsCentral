import HeroImage from "../../assets/HeroImage.svg";
import "./mobile.layout.css";
import "./desktop.layout.css";

import { ProductCategoryCard } from "./component/ProductCategory/ProductCategoryCard";
import { Footer } from "./component/Footer/Footer";
import { useDataContext } from "../../context/data/DataContext";

export const Landing = () => {
  const {categories}= useDataContext();

  return (
    <>
      <div className="hero-container">
        <div className="hero-image-container"></div>
        <div className="description">
          <h1>
            <span>Your one-stop-store</span>
            <span> for electronics!</span>
          </h1>
          <button>Shop now</button>
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
    </>
  );
};
