import "./mobile.layout.css";
import "./desktop.layout.css";

export const ProductCategoryCard = ({ category }) => {

  return (
    <div className="product-category">
      <p> {category.categoryName}</p>
    </div>
  );
};
