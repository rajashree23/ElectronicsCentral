import { useState } from "react";
import { useDataContext } from "../../../context/data/DataContext";
import { addAddress } from "../../../services/data/dataService";
import { useAuthContext } from "../../../context/AuthContext.js/AuthContext";

export const AddressForm = ({toggleShowAddressForm, addressForm, setAddressFormValues}) => {
  const { dataDispatch } = useDataContext();
  const { token } = useAuthContext();

  const submitButtonHandler = () => {
    addAddress(dataDispatch, addressForm, token);
    toggleShowAddressForm();
  };

  return (
    <div>
      <h2>Add new address</h2>
      <label>
        <input
          placeholder="Enter Name"
          value={addressForm.name}
          onChange={(e) => setAddressFormValues("name", e)}
        />
      </label>
      <label>
        <input
          placeholder="Enter House no, Road, Colony"
          value={addressForm.street}
          onChange={(e) => setAddressFormValues("street", e)}
        />
      </label>
      <label>
        <input
          placeholder="Enter City"
          value={addressForm.city}
          onChange={(e) => setAddressFormValues("city", e)}
        />
      </label>
      <label>
        <input
          placeholder="Enter State"
          value={addressForm.state}
          onChange={(e) => setAddressFormValues("state", e)}
        />
      </label>
      <label>
        <input
          placeholder="Enter Country"
          value={addressForm.country}
          onChange={(e) => setAddressFormValues("country", e)}
        />
      </label>
      <label>
        <input
          placeholder="Enter Postal Code"
          value={addressForm.zipCode}
          onChange={(e) => setAddressFormValues("zipCode", e)}
        />
      </label>
      <label>
        <input
          placeholder="Enter Mobile Number"
          value={addressForm.mobile}
          onChange={(e) => setAddressFormValues("mobile", e)}
        />
      </label>

      <button onClick={submitButtonHandler}>Save</button>
      <button onClick={toggleShowAddressForm}>Cancel</button>
    </div>
  );
};
