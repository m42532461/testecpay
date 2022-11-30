import React, { useState } from "react";
import { useEffect } from "react";
import * as api from "../api/index";
const Account = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  console.log(user);
  const [tag, setTag] = useState("Info");
  const [orders, setorders] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await api.fetchOrders();
        setorders(data);
        console.log(orders);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);

  return (
    <div>
      <div>
        <button
          className="border px-2 py-1"
          onClick={() => {
            setTag("Info");
          }}
        >
          Info
        </button>
        <button
          className="border px-2 py-1"
          onClick={() => {
            setTag("Order");
          }}
        >
          Order
        </button>
      </div>
      {tag === "Info" && (
        <div className="border p-10">
          <h1>Account</h1>
          <div className="flex">
            <h2>Email:</h2>
            <span>{user.email}</span>
          </div>
          <div className="flex">
            <h2>Name:</h2>
            <span>{user.name}</span>
          </div>
        </div>
      )}
      {tag === "Order" && (
        <div className="border p-10">
          <h1>Order</h1>
          {orders?.map((order) => (
            <div className="flex">
              <span className="font-black">Order Code:</span>
              <span>{order?._id}</span>
              <span className="font-black">Created Time:</span>
              <span>{order?.createdAt}</span>
              <span className="font-black">Cart</span>
              <span>{order?.cart.map((item) => item.title)}</span>
            </div>
          ))}
        </div>
      )}
      {/* cart
createdAt
creator
id: "29fhRFYd4g5ER82bd219"
updatedAt
_id: "636466348b43a3788b7a7819" */}
    </div>
  );
};

export default Account;
