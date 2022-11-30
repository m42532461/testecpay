import React, { useEffect, useState } from "react";
import * as api from "../../api/index";
const Orders = () => {
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
      Orders
      <div className=" p-10">
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
    </div>
  );
};

export default Orders;
