import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "../action/payment";
import { addToCart, fetchCartFromDB, removeFromCart } from "../action/cart";
const Cart = () => {
  const { items, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (items?.length === 0) {
      dispatch(fetchCartFromDB());
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeOrder(items));
    // 訂單編號+廠商交易編號
    // call api 產生uuid(20碼) 送至後端(存至資料庫)
    navigate("/check"); // redirect至確認商品頁
  };
  const handleClick = (mode, item) => {
    if (mode === "up") {
      dispatch(addToCart(item.title, item.price, item.id));
    } else {
      dispatch(removeFromCart(item.title, item.price, item.id));
    }
    // dispatch(makeOrder(items));
  };

  return (
    <div>
      <h1>購物車</h1>
      <ul>
        {items?.map((item) => (
          <li key={item._id}>
            <p>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </p>
            <p>
              <button onClick={() => handleClick("down", item)}>-</button>
              <span>數量:{item.quantity}</span>
              <button onClick={() => handleClick("up", item)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <div>
        <p>共有{quantity}件商品</p>
        <p>${total}</p>
      </div>
      <button onClick={handleSubmit}>結帳</button>
    </div>
  );
};

export default Cart;
