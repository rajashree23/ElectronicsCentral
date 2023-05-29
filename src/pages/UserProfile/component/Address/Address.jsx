import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useDataContext } from "../../../../context/data/DataContext";
import "../../userprofile.mobile.layout.css";
import { AddressCard } from "./AddressCard";

export const Address = ({ toggleShowAddressForm }) => {
  const { address } = useDataContext();

  return (
    <div className="tab-content">
      <section>
        <h2>My Addresses</h2>
        {address.map((add) => (
          <AddressCard
            key={add._id}
            address={add}
            toggleShowAddressForm={toggleShowAddressForm}
          />
        ))}
        <p onClick={toggleShowAddressForm} className="add-new-addr">
          <FontAwesomeIcon icon={faPlus} />
          Add new address
        </p>
      </section>
    </div>
  );
};
