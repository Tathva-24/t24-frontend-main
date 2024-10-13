import React from "react";
import Button from "../RegisterButton/registerButton";
import BigImage from "../BigImage/BigImage";

const RegPrice = ({ colorOne, colorTwo, colorThree, bigImg }) => {
  return (
    <div className="w-full flex flex-row px-12 ">
      <div className="w-[40%] flex flex-col justify-between">
        <Button
          colorOne={colorOne}
          colorTwo={colorTwo}
          colorThree={colorThree}
        ></Button>
        <Button
          colorOne={colorOne}
          colorTwo={colorTwo}
          colorThree={colorThree}
        ></Button>
      </div>
      <div className="w-[60%]">
        <BigImage bigImg={bigImg} />
      </div>
    </div>
  );
};

export default RegPrice;
