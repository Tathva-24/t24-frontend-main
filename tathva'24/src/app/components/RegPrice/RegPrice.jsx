import React from "react";
import Button from "../RegisterButton/registerButton";
import BigImage from "../BigImage/BigImage";

const RegPrice = ({ colorOne, colorTwo, colorThree, bigImg, direction }) => {
  const flexDirection = direction === 1 ? "flex-row" : "flex-row-reverse";

  return (
    <div className={`w-full flex ${flexDirection} px-12`}>
      <div className="w-[40%] flex flex-col justify-between">
        <Button
          colorOne={colorOne}
          colorTwo={colorTwo}
          colorThree={colorThree}
        />
        <Button
          colorOne={colorOne}
          colorTwo={colorTwo}
          colorThree={colorThree}
        />
      </div>
      <div className="w-[60%]">
        <BigImage bigImg={bigImg} />
      </div>
    </div>
  );
};

export default RegPrice;
