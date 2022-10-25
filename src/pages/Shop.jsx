import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartFromDB } from "../action/cart";

const Shop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cart");
  };
  const { items, quantity, total } = useSelector((state) => state.cart);
  const { authData } = useSelector((state) => state.auth);
  useEffect(() => {
    if (items?.length === 0) {
      dispatch(fetchCartFromDB());
    }
  }, []);

  const products = [
    { title: "商品1", price: 199, id: "asdf199" },
    { title: "商品2", price: 250, id: "asdf250" },
    { title: "商品3", price: 495, id: "asdf495" },
    { title: "商品4", price: 123, id: "asdf123" },
    { title: "商品5", price: 59, id: "asdf59" },
    { title: "商品6", price: 77, id: "asdf77" },
    { title: "商品7", price: 65, id: "asdf65" },
  ];
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={product.price + index}>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <button
              onClick={() => {
                if (!authData) {
                  alert("請先登入");
                  navigate("/login");
                  // TODO: 記錄原本路徑，登入後回到原本位置
                }
                dispatch(addToCart(product.title, product.price, product.id));
              }}
            >
              加入購物車
            </button>
          </div>
        );
      })}
      <button onClick={handleSubmit}>我的購物車</button>
    </div>
  );
};

export default Shop;
