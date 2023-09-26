import React, { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import Cart from "./modules/Cart";
import Login from "./components/Login";
import SignUp from "./components/Register";
import Alert from "./modules/Alert";
import Checkout from "./modules/Checkout";
import Wishlist from "./modules/wishlist";


function App(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div>
      <Header />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:id"
          element={<Product showAlert={showAlert} />}
        />
        <Route path="/products" element={<Products showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
       
        <Route path="/login" element={<Login showAlert={showAlert} />} />
        <Route path="/cart" element={<Cart showAlert={showAlert} />} />
        <Route path="/wishlist" element={<Wishlist showAlert={showAlert} />} />
        <Route path="/register" element={<SignUp showAlert={showAlert} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
