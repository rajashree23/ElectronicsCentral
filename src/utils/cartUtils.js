export const getOriginalPrice = (cart) =>
  cart.reduce((totalPrice, { originalPrice,qty }) => totalPrice + qty*originalPrice, 0);

export const getDiscountedPrice = (cart) =>
  cart.reduce(
    (totalPrice, { originalPrice, price,qty }) =>
      totalPrice + qty*(originalPrice - price),
    0
  );

export const getActualPrice = (cart) =>
  cart.reduce((totalPrice, { price ,qty}) => totalPrice + qty*price, 0);


  export const getDeliveryCharges=(originalPrice, discountedPrice)=> originalPrice - discountedPrice <= 5000 ? 499 : 0