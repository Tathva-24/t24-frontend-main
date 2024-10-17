import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";
import Link from "next/link";

const InnerDescription = ({ num, heading, text }) => {
  return (
    <div className={`bg-[#ECECEC] relative  w-full h-full px-[5%] pb-[20] rounded-[12px] md:rounded-[30px]`} >
      <div className="flex justify-between items-center">
        <div className={` text-black lg:text-[8vw] text-[10vw] leading-[2rem] md:leading-[6vw] lg:leading-[4vw] ${styles.heading}`} > {num}</div>
        <div className={`text-black lg:text-[5vw] md:text-[7vw] text-[8vw] ${styles.heading}`}>{heading}</div>
      </div>

      <hr className="border-black mt-2" />

      <div className={`text-black h-min-[65%] lg:text-[1.8vw] pt-[2%] ${styles.description}`} >
      {text}
      <div className=" text-black font-bold absolute bottom-4 ">◻◻◻</div>  
        <Link href={"#"} ><img className="h-[100px] hover:scale-110 transition-all aspect-square absolute bottom-2 right-2 " src="/InnerPages/arrow_border.svg" /></Link>  
        
      </div>
    </div>
  );
};

export default InnerDescription;
