import React, { useState } from "react";
import { useNavigate } from "react-router";

const Modal = ({ showModal, closeModal }) => {
  const navigate = useNavigate();

  return (
    <div>
      {showModal ? (
        <div className="relative flex justify-center">
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            onClick={() => closeModal(false)}
          ></div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          <div className="fixed z-[89990] w-auto text-center">
            <div className="relative w-auto my-10 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none z-[80]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Please Login</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => closeModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-[#888] text-lg leading-relaxed text-start flex flex-col justify-between">
                    <span>
                      Not had membership yet? Register now so we can keep your
                      items in cart and get your wishlist at any devices.
                    </span>
                    <br />
                    <span className="text-[18px] text-[#333]">
                      Enjoy Your Trip!!!
                    </span>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-lg  bg-[#F4F6F6]"
                    type="button"
                    onClick={() => closeModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-bg text-white"
                    type="button"
                    onClick={() => {
                      closeModal(false);
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
