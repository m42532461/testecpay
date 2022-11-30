import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CLEAR_CART, LOGOUT } from "../constants/actionTypes";
import decode from "jwt-decode";
import { IoMdCart } from "react-icons/io";
import { fetchCartFromDB } from "../action/cart";
const Navbar = ({ closeModal }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const { quantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: LOGOUT });
    dispatch({ type: CLEAR_CART });
    setUser(null);
    localStorage.removeItem("profile");

    navigate("/login");
  };
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      dispatch(fetchCartFromDB());
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="w-full flex justify-between items-center px-10 xl:px-24 py-10 xl:w-[1440px]">
      <div
        className="cursor-pointer text-[18px] xl:text-xl text-[#244D4D] font-semibold"
        onClick={() => navigate("/")}
      >
        furni.shop
      </div>
      <div className="hidden xl:flex text-[#242424] font-medium text-lg">
        <a
          className="hover:-translate-y-1 duration-200 hover:border-b-2 hover:bg-gray-100/50 px-10 rounded-[5px] py-3"
          href="#home"
          onClick={() => navigate("/")}
        >
          Home
        </a>
        <a
          className="hover:-translate-y-1 duration-200 hover:border-b-2 hover:bg-gray-100/50 px-10 rounded-[5px] py-3"
          href="#about"
        >
          About
        </a>
        <a
          className="hover:-translate-y-1 duration-200 hover:border-b-2 hover:bg-gray-100/50 px-10 rounded-[5px] py-3"
          href="#products"
        >
          Products
        </a>
        <a
          className="hover:-translate-y-1 duration-200 hover:border-b-2 hover:bg-gray-100/50 px-10 rounded-[5px] py-3"
          href="#contact"
        >
          Contact
        </a>
      </div>
      {!user && (
        <div className="flex gap-10 items-center">
          <button
            className="hidden hover:-translate-y-1 duration-200  xl:flex"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
          <button
            className="hidden hover:-translate-y-1 duration-200  xl:flex"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <div className="relative hover:-translate-y-1 duration-200">
            <IoMdCart
              onClick={() => {
                if (user) navigate("/cart");
                else closeModal(true);
              }}
              className="text-[20px] cursor-pointer select-none"
            />
            <div className="text-[12px] bg-bg text-white rounded-full absolute  w-[20px] h-[20px] flex justify-center items-center -right-4 -bottom-2">
              0
            </div>
          </div>
        </div>
      )}
      {user && (
        <div className="flex gap-10 items-center">
          <button className="" onClick={() => navigate("/account/user")}>
            Account
          </button>
          <button onClick={logout}>Log out</button>
          <div className="relative hover:-translate-y-1 duration-300 cursor-pointer">
            <IoMdCart
              onClick={() => {
                if (user) navigate("/cart");
                else closeModal(true);
              }}
              className="text-[20px]"
            />
            <div className="text-[12px] bg-bg text-white rounded-full absolute  w-[20px] h-[20px] flex justify-center items-center -right-4 -bottom-2">
              {quantity || 0}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
