import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../action/auth";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { CLEAR_ERROR } from "../constants/actionTypes";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const { isLoading, isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password, firstName, lastName }, navigate));

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setIsEmailTouched(false);
    setIsPasswordTouched(false);
    setIsFirstNameTouched(false);
    setIsLastNameTouched(false);
  };

  const handleCloseModal = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  return (
    <>
      <Modal
        showModal={isError}
        closeModal={handleCloseModal}
        title="Email Had Been Registered or Password Invalid"
        p1="Already had membership? Login now and start shopping."
        buttonLink="login"
      />

      <div className="w-[1440px] px-24 flex justify-center pb-24">
        <div className="flex flex-col justify-center items-center p-10 mt-20 border-bg border-[10px] rounded-[10px] text-bg xl:w-[400px] text-[20px] xl:text-[24px]">
          <h1 className="pb-10 font-bold">Register</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setIsEmailTouched(true)}
              />
              {isEmailTouched &&
                (email.trim() === "" || !email.includes("@")) && (
                  <span className="text-red-300 text-sm">Invalid email</span>
                )}
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setIsPasswordTouched(true)}
              />
              {isPasswordTouched && password.trim() === "" && (
                <span className="text-red-300 text-sm">Invalid password</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => setIsFirstNameTouched(true)}
              />
              {isFirstNameTouched && firstName.trim() === "" && (
                <span className="text-red-300 text-sm">Invalid first name</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => setIsLastNameTouched(true)}
              />
              {isLastNameTouched && lastName.trim() === "" && (
                <span className="text-red-300 text-sm">Invalid last name</span>
              )}
            </div>
            <button
              onClick={handleSubmit}
              disabled={
                isLoading ||
                !isEmailTouched ||
                !isPasswordTouched ||
                !isFirstNameTouched ||
                !isLastNameTouched ||
                email.trim() === "" ||
                !email.includes("@") ||
                password.trim() === "" ||
                firstName.trim() === "" ||
                lastName.trim() === ""
              }
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

export default Register;
