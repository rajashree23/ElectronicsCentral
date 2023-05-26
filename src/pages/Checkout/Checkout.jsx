import { useDataContext } from "../../context/data/DataContext";
import { Address } from "./component/Address";
import { PriceCard } from "./component/PriceCard";

export const Checkout = () => {
  const { cart, address } = useDataContext();


  return (
    <div className="cart-container">
      <h1>Checkout</h1>
      <div>
        {address.length === 0 && <h2>No addresses added yet</h2>}
        <div>
          {address.map((add) => (
            <Address key={add._id} address={add} />
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div>
          <h2>Price details</h2>
          <PriceCard cart={cart} />
        </div>
      )}
    </div>
  );
};
