import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "../action/payment";
import { addToCart, fetchCartFromDB, removeFromCart } from "../action/cart";
import { CircularProgress } from "@material-ui/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Cart = () => {
  const { items, quantity, total, isLoading } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

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
    navigate("/checkout"); // redirect至確認商品頁
  };
  const handleClick = (mode, item) => {
    if (mode === "up") {
      dispatch(
        addToCart(item.title, item.price, item.discountPrice, item.id, item.img)
      );
    } else {
      dispatch(
        removeFromCart(
          item.title,
          item.price,
          item.discountPrice,
          item.id,
          item.img
        )
      );
    }
    // dispatch(makeOrder(items));
  };

  return (
    <div className="w-full flex flex-col items-center mt-5 xl:mt-24">
      <div className="xl:w-[1440px] flex flex-col items-center xl:items-start px-10 xl:px-24 pb-10 xl:pb-40">
        <h1 className="w-full text-start text-[24px] xl:text-[30px] font-bold">
          Shopping Cart
        </h1>

        {isLoading && items?.length === 0 ? (
          <CircularProgress />
        ) : (
          <ul
            className="flex flex-col gap-10 xl:gap-20 mt-5 xl:mt-24 justify-center"
            ref={parent}
          >
            {items?.map((product) => (
              <li
                key={product.id}
                className="flex xl:gap-20 border-b-2 pb-5 xl:pb-10 items-center gap-10"
              >
                <div className=" flex items-center justify-center">
                  <img
                    src={product.img}
                    alt=""
                    className="object-contain w-[200px] h-[200px]"
                  />
                </div>
                <div className="flex flex-col xl:w-full h-full gap-5">
                  <div className="flex flex-col  justify-start border-b-[2px] xl:h-[140px] gap-5">
                    <span className="text-[18px] xl:text-[24px] text-bg">
                      {product.title}
                    </span>
                    <span className="hidden xl:block text-[#3d3d3f]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure dicta officiis quae. Voluptate iste amet incidunt hic
                      exercitationem, eveniet soluta magni pariatur, ipsum
                      mollitia voluptatem ipsam ab itaque cumque nostrum.
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2 h-[40px]">
                    <div className="text-[14px] xl:text-[20px] gap-2 xl:gap-10 flex">
                      <span>
                        $
                        {product.discountPrice
                          ? product.discountPrice
                          : product.price}
                      </span>
                      <div className="flex gap-2">
                        <button onClick={() => handleClick("down", product)}>
                          -
                        </button>
                        <span className="border px-2 rounded-[5px]">
                          {product.quantity}
                        </span>
                        <button onClick={() => handleClick("up", product)}>
                          +
                        </button>
                      </div>
                    </div>
                    <span className="text-[14px] xl:text-[20px] bg-bg px-4 xl:px-10 py-1 xl:py-2 text-white rounded-sm">
                      $
                      {product.discountPrice
                        ? product.discountPrice * product.quantity
                        : product.price * product.quantity}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="bg-bg w-full flex justify-center">
        <div className="xl:w-[1440px] flex justify-between items-center text-white px-10 xl:px-24 py-20 gap-10">
          <div className="flex flex-col gap-10 text-[14px] xl:text-[20px]">
            <p>共有{quantity}件商品</p>
            <p>
              運費: $<span className="line-through">60</span>
            </p>

            <p className="text-[20px] xl:text-[24px] font-semibold">
              小記:${total}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-[20px] xl:text-[24px]">
            <div className="border-b pb-4 w-full justify-center flex">
              <p className="font-extrabold">Total: ${total}</p>
            </div>
            <button
              className="px-10 xl:px-32 bg-white text-bg py-2 xl:py-4"
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
