import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext.js/AuthContext";

import { Profile } from "./component/Profile";
import { Address } from "./component/Address/Address";

import "./mobile.layout.css";
import { AddressForm } from "./component/AddressForm";

export const UserProfile = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressForm, setAddressForm] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });
  const { user } = useAuthContext();
  const parsedUser = JSON.parse(user);

  const [activeTab, setActiveTab] = useState("profile");
  const getActiveTabColor = () => ({
    backgroundColor: "#151515",
    color: "white",
  });

  const toggleShowAddressForm = (type,address) => {
    setShowAddressForm((prev) => !prev);
    setAddressForm(type==="edit"?address:{ name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",});
  };
  
  const setAddressFormValues = (inputFieldType, e) =>
    setAddressForm((prev) => ({ ...prev, [inputFieldType]: e.target.value }));
console.log(addressForm)
  return showAddressForm ? (
    <AddressForm
      toggleShowAddressForm={toggleShowAddressForm}
      addressForm={addressForm}
      setAddressFormValues={setAddressFormValues}
    />
  ) : (
    <div className="user-profile">
      <h1>Welcome, {parsedUser.firstName}</h1>
      <ul className="nav">
        <li
          style={activeTab === "profile" ? getActiveTabColor() : null}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </li>
        <li
          style={activeTab === "address" ? getActiveTabColor() : null}
          onClick={() => setActiveTab("address")}
        >
          Address
        </li>
      </ul>
      {activeTab === "profile" ? (
        <Profile />
      ) : (
        <Address toggleShowAddressForm={toggleShowAddressForm} />
      )}
    </div>
  );
};
