import { Link } from "react-router-dom";
import { useDataContext } from "../../context/data/DataContext";
import { WishlistCard } from "./component/WishlistCard";

import "./wishlist.mobile.layout.css";
import "./wishlist.desktop.layout.css";
import { ProductCard } from "../../component/ProductCard.jsx/ProductCard";

export const Wishlist = () => {
  const { wishlist } = useDataContext();

  return (
    <div className="wishlist-container">
      <h1>
        My Wishlist
        <span>{wishlist.length ? `(${wishlist.length})` : null}</span>
      </h1>
      {wishlist.length === 0 && (
        <div className="empty-wishlist-details">
          <h2>Your wishlist is empty!</h2>
          <p>Wishlist items now.</p>
          <Link to="/products">
            <button className="primary-button">Wishlist Now</button>
          </Link>
        </div>
      )}
      <div className="wishlisted-products">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} type="wishlist"></ProductCard>
        ))}
      </div>
    </div>
  );
};
{/* <div className="cart-container">
  <h1>
    My Cart<span>{cart.length ? `(${cart.length})` : null}</span>
  </h1>
  {cart.length === 0 && (
    <div className="empty-cart-details">
      <h2>Your cart is empty!</h2>
      <p>Add items to it now.</p>
      <Link to="/products">
        <button className="primary-button">Shop Now</button>
      </Link>
    </div>
  )}
  <div className="cart-layout">
    <div className="cart-products">
      {cart.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    {cart.length > 0 && (
      <div className="cart-price-container">
        <h2 className="heading">PRICE DETAILS</h2>
        <PriceCard cart={cart} />
      </div>
    )}
  </div>
</div>; */}
