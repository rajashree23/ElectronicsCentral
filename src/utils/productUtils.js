export const getDiscount = (originalPrice, price) =>
  ((originalPrice - price) / originalPrice) * 100;

export const getRatingColor = (averageRating) =>
  averageRating < 2
    ? { color: "red" }
    : averageRating < 3
    ? { color: "orange" }
    : { color: "#45c045" };
