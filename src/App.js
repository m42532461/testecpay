import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import CheckPage from "./pages/CheckPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ProductPage from "./pages/ProductPage";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import { getAllProduct } from "./action/products";
import TestPage from "./pages/TestPage";
import ProductsPage from "./pages/ProductsPage";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { authData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-center items-center">
        <Modal
          showModal={showModal}
          closeModal={setShowModal}
          title="Please Login"
          p1="Not had membership yet? Register now so we can keep your
                      items in cart and get your wishlist at any devices."
          buttonLink="login"
        />
        <Navbar showModal={showModal} closeModal={setShowModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={authData ? <Cart /> : <Login />} />
          <Route path="/check" element={authData ? <CheckPage /> : <Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="/register"
            element={authData ? <Home /> : <Register />}
          />
          <Route path="/login" element={authData ? <Home /> : <Login />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account/*" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
