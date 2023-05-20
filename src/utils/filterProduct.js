const filterByPriceRange = (products, { priceRange }) => {
  return priceRange
    ? products.filter(({ price }) => price <= Number(priceRange))
    : products;
};

const filterByCategory = (products, { categories }) =>
  categories.length
    ? products.filter(({ categoryName }) =>
        categories.some((category) => categoryName === category)
      )
    : products;

const filterBySortBy = (products, { sortBy }) =>
  sortBy
    ? [...products].sort((p1, p2) =>
        sortBy === "ascending" ? p1.price - p2.price : p2.price - p1.price
      )
    : products;

const filterByRating = (products, { rating }) =>
  rating
    ? products.filter(({ averageRating }) => averageRating >= Number(rating))
    : products;

const filterBySearch = (products, { inputSearch }) =>
  inputSearch
    ? products.filter(({ productName }) =>
        productName.toLowerCase().includes(inputSearch)
      )
    : products;

const filterAll = (products, filters) => {
  const allFilterFunctions = [
    filterBySearch,
    filterByPriceRange,
    filterByCategory,
    filterByRating,
    filterBySortBy,
  ];
  return allFilterFunctions.reduce(
    (filteredData, currFunc) => currFunc(filteredData, filters),
    products
  );
};

export {
  filterByPriceRange,
  filterByCategory,
  filterByRating,
  filterBySortBy,
  filterBySearch,
  filterAll
};
