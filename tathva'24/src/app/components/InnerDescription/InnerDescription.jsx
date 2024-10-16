import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";

const InnerDescription = ({ num, heading, text }) => {
  return (
    <div
      className={`bg-[#ECECEC] w-[100%] px-[5%] pb-[3%] rounded-[12px] md:rounded-[30px] `}
    >
      <div className="flex justify-between">
        {/* Number Section */}
        <div
          className={`text-black text-[2rem] leading-[2rem] md:text-[6vw] lg:text-[4vw] md:leading-[6vw] lg:leading-[4vw] ${styles.heading}`}
        >
          {num}
        </div>

        {/* Heading Section */}
        <div
          className={`text-black text-[1.5rem] md:text-[5vw] lg:text-[3vw] ${styles.heading}`}
        >
          {heading}
        </div>
      </div>

      <hr className="border-black mt-2" />

      {/* Description Section */}
      <div
        className={`relative text-black text-[9px] md:text-[18px] lg:text-[16px] xl:text-[22px] 2xl:text-[24px] pt-[2%] ${styles.description}`}
      >
        {text}

        {/* Arrow and Corners */}
        <div className="float-right ml-[10px] md:ml-[20px] lg:ml-[30px] mt-[5px] md:mt-[10px] group relative">
          <div className="h-[40px] w-[50px] md:h-[100px] md:w-[120px] lg:h-[150px] lg:w-[180px] relative">
            {/* Top-left corner */}
            <svg
              className="absolute top-0 left-0 w-[30%] h-[30%] md:w-[35%] md:h-[35%] lg:w-[40%] lg:h-[40%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 41"
              preserveAspectRatio="xMinYMin meet"
              fill="none"
            >
              <path
                stroke="#000"
                strokeWidth=".6"
                d="m.712 40.911.003-29.5L11.213.912h30"
              />
            </svg>

            {/* Top-right corner */}
            <svg
              className="absolute top-0 right-0 w-[30%] h-[30%] md:w-[35%] md:h-[35%] lg:w-[40%] lg:h-[40%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41 42"
              preserveAspectRatio="xMaxYMin meet"
              fill="none"
            >
              <path
                stroke="#000"
                strokeWidth=".6"
                d="M.212 1.092h28.97l10.544 10.455.125 30"
              />
            </svg>

            {/* Bottom-left corner */}
            <svg
              className="absolute bottom-0 left-0 w-[30%] h-[30%] md:w-[35%] md:h-[35%] lg:w-[40%] lg:h-[40%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 42"
              preserveAspectRatio="xMinYMax meet"
              fill="none"
            >
              <path
                stroke="#000"
                strokeWidth=".6"
                d="M41.21 40.989H11.588L1.169 30.41v-30"
              />
            </svg>

            {/* Bottom-right corner */}
            <svg
              className="absolute bottom-0 right-0 w-[30%] h-[30%] md:w-[35%] md:h-[35%] lg:w-[40%] lg:h-[40%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 41"
              preserveAspectRatio="xMaxYMax meet"
              fill="none"
            >
              <path
                stroke="#000"
                strokeWidth=".6"
                d="m40.898.697-.17 28.97L30.21 40.147l-30-.05"
              />
            </svg>
          </div>

          {/* Arrow Center */}
          <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
            <div className="w-[20px] h-[20px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] relative">
              <Arrow />
            </div>
          </div>
        </div>

        {/* Small square marker */}
        <div className="absolute bottom-0 left-0 text-black font-bold">◻◻◻</div>

        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default InnerDescription;
