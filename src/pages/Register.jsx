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
    <div>
      <h1>Register</h1>
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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Register;
