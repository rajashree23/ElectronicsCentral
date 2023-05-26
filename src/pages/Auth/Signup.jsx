import { useEffect, useState } from "react";
import { signUpUser } from "../../services/auth/authService";
import { useAuthContext } from "../../context/AuthContext.js/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/data/DataContext";

export const Signup = () => {
  const { authDispatch, token } = useAuthContext();
  const { dataDispatch } = useDataContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/products");
    }
  }, [token]);

  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const setSignUpFormValues = (inputFieldType, e) =>
    setSignUpForm((prev) => ({ ...prev, [inputFieldType]: e.target.value }));

  const signUpHandler = () => {
    const { email, password } = signUpForm;
    if (email && password) {
      signUpUser(authDispatch, dataDispatch, signUpForm);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <label>
          First Name
          <input
            value={signUpForm.firstName}
            onChange={(e) => setSignUpFormValues("firstName", e)}
          />
        </label>
        <label>
          Last Name
          <input
            value={signUpForm.lastName}
            onChange={(e) => setSignUpFormValues("lastName", e)}
          />
        </label>
      </div>

      <label>
        Email
        <input
          required
          value={signUpForm.email}
          onChange={(e) => setSignUpFormValues("email", e)}
        />
      </label>
      <label>
        Password
        <input
          required
          type="password"
          value={signUpForm.password}
          onChange={(e) => setSignUpFormValues("password", e)}
        />
      </label>

      <button onClick={signUpHandler}>Create New Account</button>
    </div>
  );
};
