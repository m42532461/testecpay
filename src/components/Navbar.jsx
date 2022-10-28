import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGOUT } from "../constants/actionTypes";
import decode from "jwt-decode";
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
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
    <div className="flex justify-between items-center px-24 py-10">
      <div
        className="cursor-pointer text-xl text-[#244D4D] font-semibold"
        onClick={() => navigate("/")}
      >
        furni.shop
      </div>
      <div className="flex gap-20 text-[#242424] font-medium text-lg">
        <a href="Home" onClick={() => navigate("/")}>
          Home
        </a>
        <a href="About">About</a>
        <a href="Features">Features</a>
        <a href="Contact">Contact</a>
      </div>
      {!user && (
        <div className="flex gap-10">
          <button onClick={() => navigate("/login")}>Log in</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      )}
      {user && (
        <div className="">
          <button onClick={logout}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
