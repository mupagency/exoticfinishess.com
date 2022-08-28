import React from "react";

const Button = ({ children }) => {
  return (
    <a className="font-normal text-white hover:text-black hover:bg-primary text-center text-sm md:text-base rounded-full border border-white hover:border-transparent uppercase px-4 md:px-8 py-2 md:min-w-[220px] transition-colors cursor-pointer pointer-events-auto">
      {children}
    </a>
  );
};

export default Button;
