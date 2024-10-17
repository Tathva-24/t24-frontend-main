import React from "react";

const BigImage = ({ bigImg }) => {
  return (
    <div className="relative border-4 rounded-[12px] w-full h-full md:rounded-[30px] overflow-hidden ">
      <div className="relative w-full h-full">
      <img
        src={bigImg}
        alt=""
        className=" absolute bottom-0 object-cover w-full h-auto"
      />
      </div>
      
    </div>
  );
};

export default BigImage;
