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
import Footer from "./components/Footer";
import { getAllProduct } from "./action/products";
import { GET_ALL_PRODUCTS } from "./constants/actionTypes";
import TestPage from "./pages/TestPage";
function App() {
  // const user = JSON.parse(localStorage.getItem("profile"));
  const { authData } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-center items-center">
        <Modal showModal={showModal} closeModal={setShowModal} />
        <Navbar showModal={showModal} closeModal={setShowModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={user ? <Cart /> : <Login />} />
          <Route path="/check" element={user ? <CheckPage /> : <Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
