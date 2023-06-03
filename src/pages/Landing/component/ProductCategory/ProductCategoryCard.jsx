import { useNavigate } from "react-router-dom";

import { useDataContext } from "../../../../context/data/DataContext";

import { ACTION_TYPES } from "../../../../utils/actionTypeConstants";


export const ProductCategoryCard = ({ category }) => {
  const { dataDispatch } = useDataContext();
  const navigate = useNavigate();

  const categoryHandler = (categoryName) => {
    dataDispatch({
      type: ACTION_TYPES.CATEGORY,
      payload: categoryName,
    });
    navigate("/products");
  };
  return (
    <div
      className="product-category"
      onClick={() => categoryHandler(category.categoryName)}
    >
      <p> {category.categoryName}</p>
    </div>
  );
};
