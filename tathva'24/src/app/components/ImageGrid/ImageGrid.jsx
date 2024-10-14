import React from "react";
import styles from "./ImageGrid.module.css";
import Image from "next/image";

const ImageGrid = ({ img1, img2, img3, img4, text1, text2, text3, text4 }) => {
  return (
    <div className="flex flex-wrap justify-center h-full w-full ">
      {/* First Image */}
      <div className="relative w-[46%] m-[2%] border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={img1} alt="" className="object-cover" />
        <span className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}>
          {text1}
        </span>
      </div>

      {/* Second Image */}
      <div className="relative w-[46%] m-[2%] border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={img2} alt="" className="object-cover" />
        <span className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}> 
          {text2}
        </span>
      </div>

      {/* Third Image */}
      <div className="relative w-[46%] m-[2%] border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={img3} alt="" className="object-cover" />
        <span className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}>
          {text3}
        </span>
      </div>

      {/* Fourth Image */}
      <div className="relative w-[46%] m-[2%] border-4 rounded-[12px] md:rounded-[30px] overflow-hidden">
        <img src={img4} alt="" className="object-cover" />
        <span className={`w-[98.5%] m-[2px] p-[6px] rounded-b-[6px] md:rounded-b-[24px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}>
          {text4}
        </span>
      </div>
    </div>
  );
};

export default ImageGrid;
