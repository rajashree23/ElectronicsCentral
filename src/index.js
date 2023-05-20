import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataContextProvider } from "./context/data/DataContext";

// Call make Server
makeServer();

ReactDOM.render(
    <Router>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </Router>,
  document.getElementById("root")
);
