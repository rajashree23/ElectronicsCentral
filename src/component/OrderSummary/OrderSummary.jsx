import "./orderdetails.mobile.layout.css";
import "./orderdetails.desktop.layout.css";

export const OrderSummary = ({ item }) => {
  return (
    <>
      <div className="order-details">
        <p>{item.productName}</p>
        <p> {item.qty}</p>
      </div>
    </>
  );
};
