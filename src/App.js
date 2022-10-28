import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import CheckPage from "./pages/CheckPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import ProductPage from "./pages/ProductPage";
function App() {
  // const user = JSON.parse(localStorage.getItem("profile"));
  const { authData } = useSelector((state) => state.auth);
  const user = authData;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check" element={<CheckPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
