import React from "react";
const Button = ({children, click}) => {
  return (
    <button onClick={click} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md w-[200px] h-[50px]">
      {children}
    </button>
  );
};

export default Button;
