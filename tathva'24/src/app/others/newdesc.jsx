import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";

const NewDesc = ({ num, heading, text }) => {
  return (
    <div
      className={`bg-[#ECECEC] w-[100%] h-auto px-[15%] ${styles.newdesc} relative`}
    >
      <div className="flex justify-between items-center w-full sm:h-20 h-10">
        <div
          className={`text-black lg:text-[2.5vw] md:text-[3.5vw] text-[4.5vw] pb-[5] text-center${styles.heading}`}
        >
          {heading}
        </div>
      </div>

      <div className="absolute bottom-3 right-[5%] hidden sm:block">
        <img src="arrow2.svg"></img>
      </div>
    </div>
  );
};

export default NewDesc;
