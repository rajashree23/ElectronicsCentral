import { useAuthContext } from "../../../context/auth/AuthContext";
import { ACTION_TYPES } from "../../../utils/actionTypeConstants";

import "../userprofile.mobile.layout.css";
import { useDataContext } from "../../../context/data/DataContext";

export const Profile = () => {
  const { user, authDispatch } = useAuthContext();
  const { dataDispatch } = useDataContext();

  const parsedUser = JSON.parse(user);
  return (
    <div className="tab-content">
      <section>
        <h2>Profile Details</h2>
        <p>Full Name: <span>{`${parsedUser.firstName} ${parsedUser.lastName}`}</span></p>
        <p>Email: <span>{parsedUser.email} </span></p>
      </section>

      <h2>Account settings</h2>
      <button
      className="primary-button"
        onClick={() => {
          authDispatch({ type: ACTION_TYPES.LOG_OUT });
          dataDispatch({ type: ACTION_TYPES.LOG_OUT });
        }}
      >
        Logout
      </button>
    </div>
  );
};
