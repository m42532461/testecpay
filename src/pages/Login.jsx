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
    <div>
      <h1>Login</h1>
      <div className="">
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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
