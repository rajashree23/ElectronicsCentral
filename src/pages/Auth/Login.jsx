import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../../services/auth/authService";
import { useAuthContext } from "../../context/auth/AuthContext";
import { useEffect, useState } from "react";
import { useDataContext } from "../../context/data/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import "./auth.mobile.layout.css";
import "./auth.desktop.layout.css";

export const Login = () => {
  const { authDispatch, token } = useAuthContext();
  const { dataDispatch } = useDataContext();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      if (location?.state?.from?.pathname)
        navigate(location.state.from.pathname);
      else navigate("/products");
    }
  }, [token]);

  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  const setloginFormValues = (inputFieldType, e) =>
    setloginForm((prev) => ({ ...prev, [inputFieldType]: e.target.value }));

  const loginHandler = (type, e) => {
    e.preventDefault();
    if (type === "guest") {
      setloginForm((prev) => ({
        ...prev,
        email: "rajashreeparhi23@gmail.com",
        password: "1234",
      }));
      console.log(loginForm);
      loginUser(
        authDispatch,
        dataDispatch,
        {
          email: "rajashreeparhi23@gmail.com",
          password: "1234",
        },
        toast
      );
    } else {
      const { email, password } = loginForm;
      if (email && password) {
        loginUser(authDispatch, dataDispatch, loginForm, toast);
      }
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="form">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          required
          className="input-fields"
          type="email"
          placeholder="Enter your email address"
          id="email"
          value={loginForm.email}
          onChange={(e) => setloginFormValues("email", e)}
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
            value={loginForm.password}
            onChange={(e) => setloginFormValues("password", e)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-icon"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <button className="primary-button" onClick={(e) => loginHandler("", e)}>
          Login
        </button>
        <button
          className="primary-button"
          onClick={(e) => loginHandler("guest", e)}
        >
          Login as Guest
        </button>
      </form>
      <Link to="/signup" className="new-acc">
        Create new account
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};
