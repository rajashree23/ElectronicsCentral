import { Link } from "react-router-dom";
import { useDataContext } from "../../context/data/DataContext";
import { PriceCard } from "../../component/PriceSummary/PriceCard";

import "./cart.mobile.layout.css";
import "./cart.desktop.layout.css";
import { ProductCard } from "../../component/ProductCard.jsx/ProductCard";

export const Cart = () => {
  const { cart } = useDataContext();

  return (
    <div className="cart-container">
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
            <PriceCard/>   
        )}
      </div>
    </div>
  );
};
