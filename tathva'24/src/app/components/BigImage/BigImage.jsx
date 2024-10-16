import React from "react";

const BigImage = ({ bigImg }) => {
  return (
    <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden lg:h-[28vw] h-[19vw]">
      <div className="relative w-full h-full">
      <img
        src={bigImg}
        alt=""
        className=" absolute bottom-0 object-cover w-full"
      />
      </div>
      
    </div>
  );
};

export default BigImage;
