import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";

const InnerDescription = ({ num, heading, text }) => {
  return (
    <div className={`bg-[#ECECEC] w-[100%] px-[5%] pb-[3%] rounded-[12px] md:rounded-[30px] h-max`}>
      <div className="flex justify-between">
        <div className={`text-black text-[3rem] leading-[3rem] md:text-[150px] md:leading-[150px] ${styles.heading}`}>
          {num}
        </div>
        <div className={`text-black text-[1.5rem] md:text-[50px] ${styles.heading}`}>
          {heading}
        </div>
      </div>

      <hr className="border-black" />

      <div className={`relative text-black text-[9px] md:text-[20px] pt-[2%] ${styles.description}`}>
        {text}
        <div className="float-right ml-[20px] mt-[10px] group relative">
          <div className="h-[53px] w-[71px] md:h-[110px] md:w-[150px] relative">
            {/* Top-left corner */}
            <svg className="absolute top-0 left-0 w-[40%] h-[40%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 41" preserveAspectRatio="xMinYMin meet" fill="none">
              <path stroke="#000" strokeWidth=".6" d="m.712 40.911.003-29.5L11.213.912h30" />
            </svg>

            {/* Top-right corner */}
            <svg className="absolute top-0 right-0 w-[40%] h-[40%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 42" preserveAspectRatio="xMaxYMin meet" fill="none">
              <path stroke="#000" strokeWidth=".6" d="M.212 1.092h28.97l10.544 10.455.125 30" />
            </svg>

            {/* Bottom-left corner */}
            <svg className="absolute bottom-0 left-0 w-[40%] h-[40%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" preserveAspectRatio="xMinYMax meet" fill="none">
              <path stroke="#000" strokeWidth=".6" d="M41.21 40.989H11.588L1.169 30.41v-30" />
            </svg>

            {/* Bottom-right corner */}
            <svg className="absolute bottom-0 right-0 w-[40%] h-[40%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 41" preserveAspectRatio="xMaxYMax meet" fill="none">
              <path stroke="#000" strokeWidth=".6" d="m40.898.697-.17 28.97L30.21 40.147l-30-.05" />
            </svg>
          </div>
          <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
            <div className="w-[28px] h-[25px] md:w-[61px] md:h-[54px] relative">
              <Arrow />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 text-black font-bold">◻◻◻</div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default InnerDescription;
