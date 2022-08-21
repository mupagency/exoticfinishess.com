import React from "react";
import { ScrollDownIcon } from "components/ui/icons";

const ScrollDown = () => {
  return (
    <div className="sticky bottom-0 mx-auto">
      <div className="cursor-pointer text-center w-32 mx-auto pb-4">
        <h4 className="text-lg leading-none mb-2">Scroll Down</h4>
        <div className="mx-auto w-6 h-6">
          <ScrollDownIcon />
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;
