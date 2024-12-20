import React from "react";
import imgBackground from "../assets/back-2.jpg"

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <img
        src={imgBackground}
        alt="Background"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Background;
