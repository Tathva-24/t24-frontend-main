import React from "react";
import ImageGrid from "../ImageGrid/ImageGrid";
import InnerDescription from "../InnerDescription/InnerDescription";

const DescGrid = ({ num, heading, text }) => {
  return ( 
    <div className="w-full p-10 flex flex-col gap-4 md:gap-0 justify-between md:flex-row">
      <div className='desc md:w-[55%]'>
        <InnerDescription 
          num={num}
          heading={heading}
          text={text}
        />
      </div>    
      <div className='gridImg md:w-[40%] h-full mx-3'>
        <ImageGrid />
      </div>
    </div>
  );
};

export default DescGrid;
