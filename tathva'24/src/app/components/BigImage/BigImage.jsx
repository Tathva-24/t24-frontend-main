import React from "react";

const BigImage = ({ bigImg }) => {
  return (
    <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden h-[17vw] w-[80%] mx-auto">
      <img
        src={bigImg}
        alt=""
        className="object-cover w-full -translate-y-[200px]"
      />
    </div>
  );
};

export default BigImage;
