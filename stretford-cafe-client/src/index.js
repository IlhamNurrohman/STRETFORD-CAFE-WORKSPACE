import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import reportWebVitals from './reportWebVitals';

import './index.css';
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/Forgot Password";
import Product from "./pages/Product";
import ProductDetail from "./pages/Product Detail";
import Profile from "./pages/Profile";

function App(){
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ForgorPassword" element={<ForgotPassword />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
      </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//reportWebVitals();
