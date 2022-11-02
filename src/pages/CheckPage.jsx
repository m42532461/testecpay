import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import products from "../dumbData/index";

const CheckPage = () => {
  const { items, orderCode, quantity, total } = useSelector(
    (state) => state.cart
  );
  const handleClick = (e) => {
    e.preventDefault();
    // X option1: 再次送所有資料至後端(call checkout的api)
    // O option2: call另一個api, 以訂單編號來查詢已成立訂單, 撈出資料再call checkout api
  };
  const [uuid, setUuid] = useState("");
  console.log(orderCode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" flex flex-col items-center w-[1440px] px-24 mt-24">
      <div className="flex justify-start w-full">
        <h1 className="text-[30px] font-bold text-[#333]">再次確認商品</h1>
      </div>
      <div className="flex w-full mt-24">
        {/* 左邊 */}
        <div className="flex-1 w-full flex flex-col ">
          {
            <ul className="flex flex-col gap-20  justify-center">
              {items?.map((product) => (
                <li key={product._id} className="flex gap-20 border-b-2 pb-10">
                  <div className=" flex items-center justify-center">
                    <img
                      src={product.img}
                      alt=""
                      className="object-contain w-[200px] h-[200px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex w-full justify-start">
                      <span className="text-[24px] text-bg">
                        {product.title}
                      </span>
                    </div>
                    <div className="text-[20px] gap-10 flex justify-between items-center">
                      <div className="gap-10  flex">
                        <span>
                          $
                          {product.discountPrice
                            ? product.discountPrice
                            : product.price}
                        </span>
                        <span className="border px-2 rounded-[5px]">
                          {product.quantity}
                        </span>
                      </div>
                      <span className="text-[20px] bg-bg px-10 py-2 text-white rounded-sm">
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
          }
        </div>
        {/* 右邊 */}
        <div className="flex-1 w-full flex flex-col items-end text-white">
          <div className="bg-bg w-[400px] h-[700px] flex justify-center items-center rounded-xl">
            <div className="flex w-full flex-col  gap-10 text-[20px] p-10">
              <p>共有{quantity}件商品</p>
              <p>
                運費: $<span className="line-through">60</span>
              </p>

              <p className="text-[24px] font-semibold">小記:${total}</p>
              <div className="border-b pb-4 w-full justify-center flex pt-4">
                <p className="font-extrabold">Total: ${total}</p>
              </div>

              <form
                action={`http://localhost:5000/ecpay?orderCode=${orderCode}`}
                method="POST"
              >
                <input
                  type="submit"
                  value="Submit"
                  disabled={!orderCode}
                  className="px-32 bg-white text-bg py-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
