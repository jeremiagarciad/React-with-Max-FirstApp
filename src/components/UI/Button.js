import React from "react";
import "./Button.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button className="button" type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
