import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";

const InnerDescription = ({ heading, text }) => {
  return (
    <div
      className={`bg-[#ECECEC] w-[100%] h-auto px-[5%] pb-[7%] rounded-[12px] md:rounded-[30px] relative`}
    >
      <div className="flex justify-between items-center">
        {/* Number Section */}

        {/* Heading Section */}
        <div
          className={`text-black lg:text-[3.5vw] md:text-[4.5vw] text-[5.5vw] ${styles.heading}`}
        >
          {heading}
        </div>
      </div>

      <hr className="border-black mt-2" />

      {/* Description Section */}
      <div
        className={`text-black lg:text-[1.6vw] pt-[2%] w-[75%] ${styles.description}`}
      >
        {text}
        <div className=" text-black font-bold w-1/4 absolute bottom-[0]">
          ◻◻◻
        </div>
        {/* Arrow and Corners */}

        <div className="flex justify-center items-center w-full absolute bottom-[0vw] left-[32vw] sm:left-[19vw] md:left-[20vw] ">
          <div className="w-[90px] h-[90px] sm:w-[160px] sm:[160px] ">
            <Arrow />
          </div>
        </div>

        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default InnerDescription;
