import React from "react";
import Image from "next/image";

const ImageGrid = () => {
  const one = "/InnerPages/concert_green.webp";
  const two = "/InnerPages/drone_tesal.webp";
  const three = "/InnerPages/expopic.webp";
  const four = "/InnerPages/red_car.jpg";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto">
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={one} alt="" className="object-cover w-full h-64" />
      </div>
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={two} alt="" className="object-cover w-full h-64" />
      </div>
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={three} alt="" className="object-cover w-full h-64" />
      </div>
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={four} alt="" className="object-cover w-full h-64" />
      </div>
    </div>
  );
};

export default ImageGrid;
