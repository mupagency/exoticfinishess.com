import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="font-normal text-white hover:text-black hover:bg-primary text-center rounded-full border border-white hover:border-transparent uppercase px-8 py-2 min-w-[220px] transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
