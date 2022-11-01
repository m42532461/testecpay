import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGOUT } from "../constants/actionTypes";
import decode from "jwt-decode";
import { IoMdCart } from "react-icons/io";
const Navbar = ({ closeModal }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const { quantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: LOGOUT });

    navigate("/login");

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

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
      <div className="hidden xl:flex gap-20 text-[#242424] font-medium text-lg">
        <a href="home" onClick={() => navigate("/")}>
          Home
        </a>
        <a href="about">About</a>
        <a href="features">Features</a>
        <a href="contact">Contact</a>
      </div>
      {!user && (
        <div className="flex gap-10 items-center">
          <button className="hidden xl:flex" onClick={() => navigate("/login")}>
            Log in
          </button>
          <button
            className="hidden xl:flex"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <div className="relative">
            <IoMdCart
              onClick={() => {
                if (user) navigate("/cart");
                else closeModal(true);
              }}
              className="text-[20px]"
            />
            <div className="text-[12px] bg-bg text-white rounded-full absolute  w-[20px] h-[20px] flex justify-center items-center -right-4 -bottom-2">
              11
            </div>
          </div>
        </div>
      )}
      {user && (
        <div className="flex gap-10 items-center">
          <button onClick={logout}>Log out</button>
          <div className="relative">
            <IoMdCart
              onClick={() => {
                console.log("first");
                if (user) navigate("/cart");
                else closeModal(true);
              }}
              className="text-[20px]"
            />
            <div className="text-[12px] bg-bg text-white rounded-full absolute  w-[20px] h-[20px] flex justify-center items-center -right-4 -bottom-2">
              {quantity}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
