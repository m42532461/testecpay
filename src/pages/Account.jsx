import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import Coupons from "./account/Coupons";
import Messages from "./account/Messages";
import Orders from "./account/Orders";
import User from "./account/User";
import UserCredits from "./account/UserCredits";
import Wishlist from "./account/Wishlist";
import Dashboard from "./Dashboard";

const Account = () => {
  return (
    <div className="w-[380px]">
      <AccountNav />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user_credits" element={<UserCredits />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default Account;
