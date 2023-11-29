import React from "react";

const Button = ({ children }) => {
  return (
    <div className="font-normal text-white hover:text-black bg-neutral-400 hover:bg-primary text-center text-sm md:text-base rounded-full uppercase px-4 md:px-8 py-1 w-[180px] md:w-[240px] transition-colors cursor-pointer pointer-events-auto border border-white">
      {children}
    </div>
  );
};

export default Button;
