import React, { useState } from "react";
import { useSelector } from "react-redux";

const CheckPage = () => {
  const { items, orderCode, total } = useSelector((state) => state.cart);
  const handleClick = (e) => {
    e.preventDefault();
    // X option1: 再次送所有資料至後端(call checkout的api)
    // O option2: call另一個api, 以訂單編號來查詢已成立訂單, 撈出資料再call checkout api
  };
  const [uuid, setUuid] = useState("");
  console.log(orderCode);
  return (
    <div>
      <h1>再次確認商品</h1>
      <ul>
        {items?.map((item) => (
          <li key={item._id}>
            <p>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </p>
            <p>
              <span>數量:{item.quantity}</span>
            </p>
          </li>
        ))}
      </ul>
      <p>total:${total}</p>
      <form
        action={`http://localhost:5000/ecpay?orderCode=${orderCode}`}
        method="POST"
      >
        <input type="submit" value="Submit" disabled={!orderCode} />
      </form>
    </div>
  );
};

export default CheckPage;
