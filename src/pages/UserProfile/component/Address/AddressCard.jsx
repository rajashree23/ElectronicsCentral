import { useAuthContext } from "../../../../context/AuthContext.js/AuthContext";
import { useDataContext } from "../../../../context/data/DataContext";
import { removeAddress } from "../../../../services/data/dataService";

export const AddressCard = ({ address: { _id, address }, toggleShowAddressForm }) => {
  const { dataDispatch } = useDataContext();
  const { token } = useAuthContext();

  return (
    <section>
      <h3>{address.name}</h3>
      <p>
        {address.street}, {address.city}, {address.state}, {address.country}
      </p>
      <p>{address.zipcode}</p>
      <p>Phone number: {address.mobile}</p>
      <button onClick={()=>toggleShowAddressForm("edit",address)}>Edit</button>
      <button onClick={() => removeAddress(dataDispatch, _id, token)}>
        Remove
      </button>
    </section>
  );
};
