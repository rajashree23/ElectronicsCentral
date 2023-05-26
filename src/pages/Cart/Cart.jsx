import { useDataContext } from "../../context/data/DataContext";
import { CartCard } from "./component/CartCard";
import { PriceCard } from "./component/PriceCard";

import "./mobile.layout.css";

export const Cart = () => {
  const { cart } = useDataContext();

  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      <div>
        {cart.length === 0 && <h2>Your cart is empty!</h2>}
        <div>
          {cart.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {cart.length>0 && <div>
        <h2>Price details</h2>
        <PriceCard cart={cart}/>
      </div>}
    </div>
  );
};
