import { useEffect, useState } from "react";
import { signUpUser } from "../../services/auth/authService";
import { useAuthContext } from "../../context/AuthContext.js/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/data/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import "./auth.mobile.layout.css";
import "./auth.desktop.layout.css";

export const Signup = () => {
  const { authDispatch, token } = useAuthContext();
  const { dataDispatch } = useDataContext();
  const [showPassword, setShowPassword] = useState(false);

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

  const signUpHandler = (e) => {
    e.preventDefault();
    const { email, password } = signUpForm;
    if (email && password) {
      signUpUser(authDispatch, dataDispatch, signUpForm);
    }
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form className="form">
        <label htmlFor="firstName" className="label">
          First Name
        </label>
        <input
          className="input-fields"
          placeholder="Enter your first name"
          id="firstName"
          value={signUpForm.firstName}
          onChange={(e) => setSignUpFormValues("firstName", e)}
        />

        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        <input
          className="input-fields"
          placeholder="Enter your last name"
          id="lastName"
          value={signUpForm.lastName}
          onChange={(e) => setSignUpFormValues("lastName", e)}
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input-fields"
          placeholder="Enter your email"
          id="email"
          required
          value={signUpForm.email}
          onChange={(e) => setSignUpFormValues("email", e)}
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="password-input-container">
          <input
            required
            className="input-fields"
            placeholder="Enter your password"
            id="password"
            type={showPassword ? "text" : "password"}
            value={signUpForm.password}
            onChange={(e) => setSignUpFormValues("password", e)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-icon"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <button onClick={signUpHandler} className="primary-button">
          Create New Account
        </button>
      </form>
      <Link to="/login" className="new-acc">
        Already have an account
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};
