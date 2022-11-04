import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../action/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password, firstName, lastName }, navigate));
  };
  return (
    <div className="w-[1440px] px-24 flex justify-center pb-24">
      <div className="flex flex-col justify-center items-center p-10 mt-20 border-bg border-[10px] rounded-[10px] text-bg w-[400px] text-[24px]">
        <h1 className="pb-10 font-bold">Register</h1>
        <div className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
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

export default Register;
