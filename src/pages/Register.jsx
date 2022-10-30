import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../action/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password, firstName, lastName }, navigate));
  };
  return (
    <div className="w-[1440px] px-24 flex justify-center ">
      <div className="flex flex-col justify-center items-center p-10 mt-20 border border-bg border-[10px] rounded-[10px] text-bg w-[400px] text-[24px]">
        <h1 className="pb-10 font-bold">Register</h1>
        <div className="flex flex-col gap-5">
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
          <input
            type="text"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button
            className="text-[18px] mt-10 px-10 py-3 border border-bg border-[3px] hover:bg-bg hover:text-white rounded-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
