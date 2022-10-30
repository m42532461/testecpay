import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../action/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    dispatch(signin({ email, password }, navigate));
  };
  return (
    <div className="w-[1440px] px-24 flex justify-center ">
      <div className="flex flex-col justify-center items-center p-10 mt-20 border border-bg border-[10px] rounded-[10px] text-bg w-[400px] text-[24px]">
        <div className="flex pb-10">
          <h1 className="font-bold">Login</h1>
        </div>
        <div className="flex flex-col items-center gap-5">
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="text-[18px] mt-10 px-10 py-3 border border-bg border-[3px] hover:bg-bg hover:text-white rounded-full"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
