import React from "react";
import ImageGrid from "../ImageGrid/ImageGrid";
import InnerDescription from "../InnerDescription/InnerDescription";

const DescGrid = ({ num, heading, text }) => {
  return (
    <div className="w-full p-10 flex flex-col lg:flex-row justify-between">
      <div className="desc w-full lg:w-[55%] mb-6 lg:mb-0 ml-3">
        <InnerDescription num={num} heading={heading} text={text} />
      </div>
      <div className="gridImg w-full lg:w-[40%] h-full mx-3">
        <ImageGrid />
      </div>
    </div>
  );
};

export default DescGrid;
