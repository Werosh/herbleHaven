import React from "react";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <img
        src="src/assets/back-2.jpg"
        alt="Background"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Background;
