import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../action/auth";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { CLEAR_ERROR } from "../constants/actionTypes";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: { email: "test@gmail.com", password: "test" },
  });
  const onSubmit = async (data) => {
    console.log(data);
    console.log(errors);
    dispatch(signup(data, navigate));
  };
  const { isLoading, isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    reset({ email: "", password: "", firstName: "", lastName: "" });
  }, [isSubmitSuccessful]);

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
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "This is required",
                  // minLength: {
                  //   value: 6,
                  //   message: "Invalid email",
                  // },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: "Invalid email",
                  },
                })}
              />
              <p className="text-red-300 text-sm">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col">
              <input
                id="password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 6,
                    message: "Password too short",
                  },
                })}
              />
              <p className="text-red-300 text-sm">{errors.password?.message}</p>
            </div>
            <div className="flex flex-col">
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                {...register("firstName", {
                  required: "This is required",
                })}
              />
              <p className="text-red-300 text-sm">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <input
                id="lastName"
                type="text"
                placeholder="Last name"
                {...register("lastName", {
                  required: "This is required",
                })}
              />
              <p className="text-red-300 text-sm">{errors.lastName?.message}</p>
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
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
