import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "../action/payment";
import { addToCart, fetchCartFromDB, removeFromCart } from "../action/cart";
import products from "../dumbData/index";
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
    <div className="w-full flex flex-col items-center mt-24">
      <div className="w-[1440px] flex flex-col px-24 pb-40">
        <h1 className="text-[30px] font-bold">Shopping Cart</h1>
        {items && (
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
        )}
        {
          <ul className="flex flex-col gap-20 mt-24 justify-center">
            {products?.map((product) => (
              <li key={product._id} className="flex gap-20 border-b-2 pb-10">
                <div className=" flex items-center justify-center">
                  <img
                    src={product.img}
                    alt=""
                    className="object-contain w-[200px] h-[200px]"
                  />
                </div>
                <div className="flex flex-col w-full h-full gap-5">
                  <div className="flex flex-col  justify-start border-b-[2px] h-[140px] gap-5">
                    <span className="text-[24px] text-bg">{product.title}</span>
                    <span className="text-[#3d3d3f]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure dicta officiis quae. Voluptate iste amet incidunt hic
                      exercitationem, eveniet soluta magni pariatur, ipsum
                      mollitia voluptatem ipsam ab itaque cumque nostrum.
                    </span>
                  </div>
                  <div className="flex justify-between items-center h-[40px]">
                    <div className="text-[20px] gap-10 flex">
                      <span>${product.price}</span>
                      <div className="flex gap-2">
                        <button onClick={() => handleClick("down", product)}>
                          -
                        </button>
                        <span className="border px-2 rounded-[5px]">{1}</span>
                        <button onClick={() => handleClick("up", product)}>
                          +
                        </button>
                      </div>
                    </div>
                    <span className="text-[20px] bg-bg px-10 py-2 text-white rounded-sm">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
      <div className="bg-bg w-full flex justify-center">
        <div className="w-[1440px] flex justify-between items-center text-white px-24 py-20">
          <div className="flex flex-col gap-10 text-[20px]">
            <p>共有{quantity}件商品</p>
            <p>
              運費: $<span className="line-through">60</span>
            </p>

            <p className="text-[24px] font-semibold">小記:${total}</p>
          </div>
          <div className="flex flex-col gap-3 items-center text-[24px]">
            <div className="border-b pb-4 w-full justify-center flex">
              <p className="font-extrabold">Total: ${1234}</p>
            </div>
            <button
              className="px-32 bg-white text-bg py-4"
              onClick={handleSubmit}
            >
              結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
