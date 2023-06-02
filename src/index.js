import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataContextProvider } from "./context/data/DataContext";
import { AuthContextProvider } from "./context/auth/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
