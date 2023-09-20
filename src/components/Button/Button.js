import React from "react";
const Button = ({children, click}) => {
  return (
    <button onClick={click} className="bg-gradient-to-r from-[#254D32] to-[#3A7D44] text-white rounded-md w-[200px] h-[50px]">
      {children}
    </button>
  );
};

export default Button;
