import React from 'react';
import Image from 'next/image';

const ImageGrid = () => {

  const one = "public/InnerPages/concert_green.webp";
  const two = "public/InnerPages/drone_tesal";
  const three = "public/InnerPages/expopic.webp";
  const four = "public/InnerPages/red_car.webp";

  return (
    <div className='w-full h-full flex flex-col mx-2'>
      <div className="one flex w-full h-64 relative ratio ">
        <div className="relative w-[50%] h-full flex">
          <img src={one} alt="" className='w-max'/>
          <img src={two} alt="" className='w-max'/>
        </div>
      </div>
      <div className="one flex w-full h-64 relative">
        <div className="relative w-[50%] h-full flex">
        <img src={three} alt="" className='w-max'/>
        <img src={four} alt="" className='w-max'/>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
