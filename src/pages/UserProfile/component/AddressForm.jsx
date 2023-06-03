import { toast } from 'react-toastify';
import { useDataContext } from "../../../context/data/DataContext";
import { addAddress, updateAddress } from "../../../services/data/dataService";
import { useAuthContext } from "../../../context/auth/AuthContext";

export const AddressForm = ({
  toggleShowAddressForm,
  addressForm,
  setAddressFormValues,
}) => {
  const { dataDispatch } = useDataContext();
  const { token } = useAuthContext();

  const submitButtonHandler = (e) => {
    e.preventDefault();
    if (addressForm._id) {
      updateAddress(dataDispatch, addressForm, token, toast);
    } else {
      addAddress(dataDispatch, addressForm, token, toast);
    }
    toggleShowAddressForm();
  };

  return (
    <div className="address-form-container">
      <h2>Add new address</h2>
      <form className="address-form">
        <label htmlFor="name" className="label" />
        <input
          type="text"
          className="input-fields"
          id="name"
          placeholder="Enter Name"
          value={addressForm.name}
          onChange={(e) => setAddressFormValues("name", e)}
        />

        <label htmlFor="locality" />
        <input
          type="text"
          className="input-fields"
          placeholder="Enter House no, Road, Colony"
          value={addressForm.street}
          onChange={(e) => setAddressFormValues("street", e)}
        />

        <label htmlFor="city" />
        <input
          type="text"
          className="input-fields"
          placeholder="Enter City"
          value={addressForm.city}
          onChange={(e) => setAddressFormValues("city", e)}
        />

        <label htmlFor="state" />
        <input
          type="text"
          className="input-fields"
          placeholder="Enter State"
          value={addressForm.state}
          onChange={(e) => setAddressFormValues("state", e)}
        />

        <label htmlFor="country" />
        <input
          type="text"
          className="input-fields"
          placeholder="Enter Country"
          value={addressForm.country}
          onChange={(e) => setAddressFormValues("country", e)}
        />

        <label htmlFor="zipCode" />
        <input
          type="text"
          className="input-fields"
          placeholder="Enter Postal Code"
          value={addressForm.zipCode}
          onChange={(e) => setAddressFormValues("zipCode", e)}
        />

        <label htmlFor="mobile" />
        <input
          type="text"
          className="input-fields"
          placeholder="Enter Mobile Number"
          value={addressForm.mobile}
          onChange={(e) => setAddressFormValues("mobile", e)}
        />

        <button className="primary-button" onClick={submitButtonHandler}>
          Save
        </button>
        <button className="secondary-button" onClick={toggleShowAddressForm}>
          Cancel
        </button>
      </form>
    </div>
  );
};
