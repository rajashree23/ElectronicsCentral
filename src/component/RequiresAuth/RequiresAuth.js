import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext.js/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { token } = useAuthContext();
  const location = useLocation();
 
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
