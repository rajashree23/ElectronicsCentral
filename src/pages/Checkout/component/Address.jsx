import { useDataContext } from "../../../context/data/DataContext";
import { ACTION_TYPES } from "../../../utils/actionTypeConstants";

export const Address = ({ address }) => {
  const { deliveryAddress, dataDispatch } = useDataContext();

  return (
    <div className="address-card">
      <input
        id={address._id}
        value={deliveryAddress?._id}
        type="radio"
        checked={address._id === deliveryAddress?._id}
        onChange={(e) =>
          dataDispatch({
            type: ACTION_TYPES.SET_DELIVERY_ADDRESS,
            payload: {
              _id: address._id,
              name: address.address.name,
              street: address.address.street,
              city: address.address.city,
              country: address.address.country,
              mobile: address.address.mobile,
              zipCode: address.address.zipCode,
            },
          })
        }
      />
      <label htmlFor={address._id}>
        <div>
          <h3>{address.address.name}</h3>
          <p>
            {address.address.street}, {address.address.city},{" "}
            {address.address.state}, {address.address.country}{" "}
          </p>
          <p>{address.address.zipCode}</p>
          <p>Phone number: {address.address.mobile}</p>
        </div>
      </label>
    </div>
  );
};
