import React from "react";
import styles from "./ImageGrid.module.css";
import Image from "next/image";

const ImageGrid = () => {
  const one = "/InnerPages/concert_green.webp";
  const two = "/InnerPages/drone_tesal.webp";
  const three = "/InnerPages/expopic.webp";
  const four = "/InnerPages/red_car.jpg";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto">
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={one} alt="" className="object-cover w-full h-[10.05vw]" />
        <span
          className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}
        >
          gaming conclave
        </span>
      </div>
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={two} alt="" className="object-cover w-full h-[10.05vw]" />
        <span
          className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}
        >
          drone racing
        </span>
      </div>
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={three} alt="" className="object-cover w-full h-[10.05vw]" />
        <span
          className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}
        >
          expo
        </span>
      </div>
      <div className="relative border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={four} alt="" className="object-cover w-full h-[10.05vw]" />
        <span
          className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}
        >
          automotive summit
        </span>
      </div>
    </div>
  );
};

export default ImageGrid;
