import { useDataContext } from "../../../../context/data/DataContext";

import { ACTION_TYPES } from "../../../../utils/actionTypeConstants";
import { RATINGS, SORTING } from "../../../../utils/filtersOptions";

import "../../product.mobile.layout.css";

export const Filters = () => {
  const { categories, filters, dataDispatch } = useDataContext();

  const filterHandler = (dispatchType, dispatchPayload) =>
    dataDispatch({ type: dispatchType, payload: dispatchPayload });

  return (
    <div className="filter-container">
      <div className="heading-container">
        <h2>Filters</h2>
        <p
          className="clear"
          onClick={() => dataDispatch({ type: ACTION_TYPES.CLEAR_FILTERS })}
        >
          <u>Clear</u>
        </p>
      </div>

      <p className="filter-title">Price:</p>
      <div className="slider-value-container">
        <p>500</p>
        <p>10000</p>
        <p>200000</p>
      </div>
      <input
        type="range"
        min="500"
        max="200000"
        value={filters.priceRange}
        onChange={(e) =>
          filterHandler(ACTION_TYPES.PRICE_RANGE, e.target.value)
        }
      />

      <p className="filter-title">Category:</p>
      {categories.map((category, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={filters.categories.includes(category.categoryName)}
            value={category.categoryName}
            onChange={(e) => filterHandler(ACTION_TYPES.CATEGORY, e)}
          />
          {category.categoryName}
        </label>
      ))}

      <p className="filter-title">Rating</p>
      {RATINGS.map((rating, index) => (
        <label key={index}>
          <input
            type="radio"
            checked={filters.rating === rating.key}
            value={rating.key}
            onChange={(e) =>
              filterHandler(ACTION_TYPES.RATINGS, e.target.value)
            }
          />
          {rating.value}
        </label>
      ))}

      <p className="filter-title">Sort by</p>
      {SORTING.map((sortValue, index) => (
        <label key={index}>
          <input
            type="radio"
            checked={filters.sortBy === sortValue.key}
            value={sortValue.key}
            onChange={(e) => filterHandler(ACTION_TYPES.SORTBY, e.target.value)}
          />
          {sortValue.value}
        </label>
      ))}
    </div>
  );
};
