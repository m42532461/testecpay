import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../action/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signin({ email, password }, navigate));
  };
  return (
    <div className="w-[1440px] px-24 flex justify-center pb-24">
      <div className="flex flex-col justify-center items-center p-10 mt-20 border-bg border-[10px] rounded-[10px] text-bg w-[400px] text-[24px]">
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
            disabled={isLoading}
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
  );
};

export default Login;
