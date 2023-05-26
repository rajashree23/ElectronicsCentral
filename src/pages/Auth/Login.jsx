import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth/authService";
import { useAuthContext } from "../../context/AuthContext.js/AuthContext";
import { useEffect, useState } from "react";
import { useDataContext } from "../../context/data/DataContext";

export const Login = () => {
  const { authDispatch, token } = useAuthContext();
  const { dataDispatch } = useDataContext();

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

  const loginHandler = () => {
    const { email, password } = loginForm;
    if (email && password) {
      loginUser(authDispatch, dataDispatch, loginForm);
    }
  };

  return (
    <div>
      <label>
        Email
        <input
          value={loginForm.email}
          onChange={(e) => setloginFormValues("email", e)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={loginForm.password}
          onChange={(e) => setloginFormValues("password", e)}
        />
      </label>

      <button onClick={loginHandler}>Login</button>
      <Link to="/signup">Create new account</Link>
    </div>
  );
};
