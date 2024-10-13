import React from "react";
import ImageGrid from "../ImageGrid/ImageGrid";
import InnerDescription from "../InnerDescription/InnerDescription";

const DescGrid = ({ num, heading, text, imageProps }) => {
  return (
    <div className="w-full px-10 flex flex-col lg:flex-row justify-between">
      <div className="desc w-full lg:w-[55%] mb-6 lg:mb-0 ml-3">
        <InnerDescription num={num} heading={heading} text={text} />
      </div>

      <div className="gridImg w-full lg:w-[40%] h-full mx-3">
        <ImageGrid
          img1={imageProps.img1}
          img2={imageProps.img2}
          img3={imageProps.img3}
          img4={imageProps.img4}
          text1={imageProps.text1}
          text2={imageProps.text2}
          text3={imageProps.text3}
          text4={imageProps.text4}
        />
      </div>
    </div>
  );
};

export default DescGrid;
