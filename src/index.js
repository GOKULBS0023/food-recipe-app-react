import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Routers } from "react-router-dom";
import { AuthProvider } from './components/Pages/Authenticate/AuthContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Routers>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Routers>
    </React.StrictMode>
);
