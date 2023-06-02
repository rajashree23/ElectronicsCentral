import { createContext, useContext, useReducer } from "react";
import { authInitialState, authReducer } from "../../reducer/auth/AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider
      value={{ token: state.token, user: state.user, authDispatch: dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
