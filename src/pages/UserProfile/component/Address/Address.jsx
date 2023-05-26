import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useDataContext } from "../../../../context/data/DataContext";
import "../../mobile.layout.css";
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
        <button onClick={toggleShowAddressForm}>
          <FontAwesomeIcon icon={faPlus} />
          Add new address
        </button>
      </section>
    </div>
  );
};
