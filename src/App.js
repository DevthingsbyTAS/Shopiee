import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CompareProduct from "./pages/CompareProduct";
import Contact from "./pages/Contact";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Resetpassword from "./pages/Resetpassword";
import ShippingPolicy from "./pages/ShippingPolicy";
import SignUp from "./pages/SignUp";
import Singleblog from "./pages/Singleblog";
import Singleproduct from "./pages/Singleproduct";
import Store from "./pages/Store";
import TermsAndConditions from "./pages/TermsAndConditions";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Store />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="forgotpassword" element={<Forgotpassword />} />
            <Route path="resetpassword" element={<Resetpassword />} />
            <Route path="blog/:id" element={<Singleblog />} />
            <Route path="product/:id" element={<Singleproduct />} />
            <Route path="privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="refundPolicy" element={<RefundPolicy />} />
            <Route path="shippingPolicy" element={<ShippingPolicy />} />
            <Route path="termsAndConditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
