import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";

const InnerDescription = ({ num, heading, text }) => {
  return (
    <div
      className={`bg-[#ECECEC] w-[100%] h-auto px-[5%] pb-[20] rounded-[12px] md:rounded-[30px]`}
    >
      <div className="flex justify-between items-center">
        {/* Number Section */}
        <div
          className={`head text-black lg:text-[8vw] text-[10vw] leading-[2rem] md:leading-[6vw] lg:leading-[4vw] ${styles.heading}`}
        >
          {num}
        </div>

        {/* Heading Section */}
        <div
          className={`text-black lg:text-[5vw] md:text-[7vw] text-[8vw] ${styles.heading}`}
        >
          {heading}
        </div>
      </div>

      <hr className="border-black mt-2" />

      {/* Description Section */}
      <div
        className={`text-black h-[65%] lg:text-[1.8vw] pt-[2%] ${styles.description}`}
      >
        {text}
        <div className=" text-black font-bold">◻◻◻</div>    
        {/* Arrow and Corners */}
        { /* <div className="float-right w-[20%] aspect-square group relative">
          <div className="w-full aspect-square relative">
            {/* Top-left corner 
            <svg
              className="absolute top-0 left-0 w-[20%] h-[20%]"
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

            {/* Top-right corner }
            <svg
              className="absolute top-0 right-0 w-[20%] h-[20%]"
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

            {/* Bottom-left corner }
            <svg
              className="absolute bottom-0 left-0 w-[20%] h-[20%]"
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

            {/* Bottom-right corner }
            <svg
              className="absolute bottom-0 right-0 w-[20%] h-[20%]"
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
          </div> */ }

          {/* Arrow Center }
          <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
            <div className=" w-[80%] h-[40%] relative">
              <Arrow />
            </div>
          </div>
        </div>

        {/* Small square marker */}
        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default InnerDescription;
