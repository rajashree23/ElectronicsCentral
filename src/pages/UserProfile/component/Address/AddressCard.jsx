import { toast } from 'react-toastify';

import { useAuthContext } from "../../../../context/auth/AuthContext";
import { useDataContext } from "../../../../context/data/DataContext";
import { removeAddress } from "../../../../services/data/dataService";

export const AddressCard = ({
  address: { _id, address },
  toggleShowAddressForm,
}) => {
  const { dataDispatch } = useDataContext();
  const { token } = useAuthContext();

  return (
    <section className="address-detail">
      <h3>{address.name}</h3>
      <p>
        {address.street}, {address.city}, {address.state}, {address.country}
      </p>
      <p>{address.zipCode}</p>
      <p>Phone number: {address.mobile}</p>
      <div className="btn-container">
        <button
          className="primary-button"
          onClick={() => toggleShowAddressForm("edit", address,_id)}
        >
          Edit
        </button>
        <button
          className="secondary-button"
          onClick={() => removeAddress(dataDispatch, _id, token, toast)}
        >
          Remove
        </button>
      </div>
    </section>
  );
};
