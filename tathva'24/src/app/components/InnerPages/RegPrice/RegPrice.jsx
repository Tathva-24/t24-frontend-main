import React from "react";
import Button from "../RegisterButton/registerButton";
import BigImage from "../BigImage/BigImage";
import PrizesWorthBox from "../../PrizesBox/PrizesWorthBox";

const RegPrice = ({ colorOne, colorTwo, colorThree, bigImg, direction }) => {
  const flexDirection = direction === 1 ? "flex-row" : "flex-row-reverse";

  return (
    <div className={`w-full flex flex-col lg:flex-row lg:justify-between px-10 mb-10 lg:gap-0 gap-5`}>

      <div className="lg:w-[40%] w-[100%] flex flex-row lg:flex-col justify-between">

        <button className={`font-pricedown w-full border-4 border-white bg-black p-2 font-bold rounded-[12px] md:rounded-[30px] `}
          style={{ fontSize: 'clamp(0.5rem, 3vw, 4.5rem)' }}
        >
          <span style={{ color: colorOne }}>Re</span>
          <span style={{ color: colorTwo }}>gi</span>
          <span style={{ color: colorThree }}>ste</span>
          <span style={{ color: colorTwo }}>r n</span>
          <span style={{ color: colorOne }}>ow</span>
        </button>

        <PrizesWorthBox date="28/29 Oct" venue="Football ground" neon="red-500" />

      </div>

      <div className="w-[55%]">
        <BigImage bigImg={bigImg} />
      </div>

    </div>
  );
};

export default RegPrice;
