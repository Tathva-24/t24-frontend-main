import React from "react";
import styles from "./ImageGrid.module.css";
import Image from "next/image";

const ImageGrid = ({ img1, img2, img3, img4, text1, text2, text3, text4 }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="flex w-full h-[46%]">

        <div className="relative w-[46%] h-full border-4 rounded-[12px] md:rounded-[30px] overflow-hidden m-[2%]  ">
          <img src={img1} alt="" className="object-cover w-full h-full" />
          <span className={`w-full p-[6px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}>
            {text1}
          </span>
        </div>  

        <div className="relative w-[46%] h-full border-4 rounded-[12px] md:rounded-[30px] overflow-hidden m-[2%]  ">
          <img src={img2} alt="" className="object-cover w-full h-full" />
          <span className={`w-full p-[6px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}> 
            {text2}
          </span>
        </div>
      </div>
      

      {/* Second Image */}

      <div className="flex w-full h-[46%]">
        <div className="relative w-[46%] h-full border-4 rounded-[12px] md:rounded-[30px] overflow-hidden m-[2%]  ">
          <img src={img3} alt="" className="object-cover w-full h-full" />
          <span className={`w-full p-[6px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}>
            {text3}
          </span>
        </div>
        <div className="relative w-[46%] h-full border-4 rounded-[12px] md:rounded-[30px] overflow-hidden m-[2%]  ">
          <img src={img4} alt="" className="object-cover w-full h-full" />
          <span className={`w-full p-[6px] bg-black/70 absolute block text-center text-white bottom-0 ${styles.about}`}>
            {text4}
          </span>
        </div>
      </div>


      </div>
      

      
  );
};

export default ImageGrid;
