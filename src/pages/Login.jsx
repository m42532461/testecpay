import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../action/auth";
import { fetchCartFromDB } from "../action/cart";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { CLEAR_ERROR } from "../constants/actionTypes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.auth);

  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({ email, password }, navigate));
    dispatch(fetchCartFromDB());
    setEmail("");
    setPassword("");
    setIsEmailTouched(false);
    setIsPasswordTouched(false);
  };
  return (
    <>
      <Modal
        showModal={isError}
        closeModal={handleCloseModal}
        title="Wrong Password or No Such User"
        p1="Not had membership yet? Register now so we can keep your
                      items in cart and get your wishlist at any devices."
        buttonLink="register"
      />
      <div className="w-[1440px] px-24 flex justify-center pb-24">
        <div
          ref={parent}
          className="flex flex-col justify-center items-center p-10 mt-20 border-bg border-[10px] rounded-[10px] text-bg xl:w-[400px] text-[20px] xl:text-[24px]"
        >
          <div className="flex pb-10">
            <h1 className="font-bold">Login</h1>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  setIsEmailTouched(true);
                }}
              />
              {isEmailTouched &&
                (email.length === 0 || !email.includes("@")) && (
                  <span className="text-red-300 text-sm">Invalid email</span>
                )}
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  setIsPasswordTouched(true);
                }}
              />
              {isPasswordTouched && password.length === 0 && (
                <span className="text-red-300 text-sm">invalid password</span>
              )}
            </div>
            <button
              disabled={
                email.trim() === "" ||
                !email.includes("@") ||
                password.trim() === "" ||
                !isEmailTouched ||
                !isPasswordTouched
              }
              onClick={handleSubmit}
              // disabled={isLoading}
              className={`text-[18px] mt-10 px-10 py-3 border-bg border-[3px] hover:bg-bg hover:text-white rounded-full ${
                isLoading ? "hover:bg-gray-400 bg-gray-400 border-gray-600" : ""
              }`}
            >
              Submit
            </button>
            {isLoading && <CircularProgress />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
