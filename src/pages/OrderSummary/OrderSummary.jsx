import { useDataContext } from "../../context/data/DataContext";
import "./ordersummary.mobile.layout.css";

export const OrderSummary = () => {
  const { orderSummary } = useDataContext();
  console.log(orderSummary);
  return (
    <div className="order-page-container">
      <h1>Order Summary</h1>

      <div className="order-layout">
        <h2>Order confirmed</h2>
        <p>Total Amount: INR {orderSummary.price.totalAmount}</p>
        <p>Order will be delivered to</p>
        <div>
          <h3>{orderSummary.address.name}</h3>
          <p>
            {orderSummary.address.street}, {orderSummary.address.city},{" "}
            {orderSummary.address.state}, {orderSummary.address.country}{" "}
          </p>
          <p>{orderSummary.address.zipCode}</p>
          <p>Phone number: {orderSummary.address.mobile}</p>
        </div>
        <div>
          {orderSummary.items.map((item) => (
            <div className="item-card">
              <img width={250} src={item.imgSrc} alt={item.productName}></img>
              <p>{item.productName}</p>
              <p>Quanity: {item.qty}</p>
              <p>Price {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
