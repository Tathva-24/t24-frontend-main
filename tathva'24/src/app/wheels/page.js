import React from "react";
import Marquee from "../components/marquee/marquee_comp";
import DescGrid from "../components/DescGrid/DescGrid";
import RegPrice from "../components/RegPrice/RegPrice";

const page = () => {
  const element1 = "auto";
  const element2 = "summit";
  const color1 = "red";
  const color2 = "black";

  const imageProps = {
    img1: "/InnerPages/concert_green.webp",
    img2: "/InnerPages/drone_tesal.webp",
    img3: "/InnerPages/expopic.webp",
    img4: "/InnerPages/red_car.jpg",
    text1: "gaming conclave",
    text2: "drone racing",
    text3: "expo",
    text4: "automotive summit",
  };

  const bigImg = "/InnerPages/red_car.jpg";

  const colorOne = "#b60203";
  const colorTwo = "#f89fa4";
  const colorThree = "#ffffff";

  const num = "03";
  const heading = "About";
  const text =
    "Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!";

  const regPriceDirection = 1; // 1 for row, 0 for row-reverse
  const descGridDirection = 0; // 1 for row, 0 for row-reverse

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Marquee
        element1={element1}
        element2={element2}
        color1={color1}
        color2={color2}
      />

      <RegPrice
        bigImg={bigImg}
        colorOne={colorOne}
        colorTwo={colorTwo}
        colorThree={colorThree}
        direction={regPriceDirection} // Passing direction prop
      />

      <DescGrid
        num={num}
        heading={heading}
        text={text}
        imageProps={imageProps}
        colorOne={colorOne}
        colorTwo={colorTwo}
        colorThree={colorThree}
        direction={descGridDirection} // Passing direction prop
      />
    </div>
  );
};

export default page;
