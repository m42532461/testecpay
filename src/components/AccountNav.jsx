import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const AccountNav = () => {
  const location = useLocation().pathname.split("/")[2];
  console.log(location);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        {[
          { title: "個人資訊", link: "user" },
          { title: "商店購物金", link: "user_credits" },
          { title: "優惠券", link: "coupons" },
          { title: "訊息", link: "messages" },
          { title: "訂單", link: "orders" },
          { title: " 追蹤清單", link: "wishlist" },
        ].map((tag) => (
          <NavLink
            key={tag.title}
            to={`/account/${tag.link}`}
            className={`cursor-pointer ${
              location === tag.link ? "border-b" : ""
            }`}
          >
            {tag.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AccountNav;
