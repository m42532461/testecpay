import React from "react";

const FormInput = ({ id, title, handleInput, type = "text", desc }) => {
  return (
    <div className={`flex ${type === "checkbox" ? "" : "flex-col-reverse"}`}>
      <span>{desc}</span>
      <input
        id={`${id}`}
        type={type}
        onChange={handleInput}
        className={`${type === "checkbox" ? "" : "border"}`}
      />
      <label htmlFor={`${id}`}>{title}</label>
    </div>
  );
};

export default FormInput;
