"use client";
import React, { useEffect, useState } from "react";
import Quicklink from "../QuixkLinks/QuickLinks";

const FooterDesktop = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1400px)");
    const handleMediaChange = (e) => {
      setIsVisible(e.matches); // Set visibility based on media query
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Initial check
    setIsVisible(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  if (!isVisible) {
    return null; // Return null to hide component when screen width is less than 1400px
  }

  return (
    <div className="w-full h-[75vh] absolute bottom-0 overflow-x-clip z-100">
      <div className="bg-[#313234] h-full w-full rounded-t-[58px] relative ">
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 hover:rotate-180 transition-all object-fit z-30 absolute bottom-4 right-5"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 hover:rotate-180 transition-all object-fit z-30 absolute bottom-4 left-5 "
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 hover:rotate-180 transition-all object-fit z-30 absolute top-4 right-4"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 hover:rotate-180 transition-all object-fit z-30 absolute top-4 left-5"
        />

        <img
          src="/upper1.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-6] absolute top-[-5%] right-0"
        />
        <img
          src="/upper2.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-2] absolute top-[-5%] left-0"
        />

        <img
          src="/metal.svg"
          alt="My Icon"
          className="h-[140px] object-fit origin-center absolute left-[50%] top-[-5%] z-2 "
        />

        <div className="absolute top-[40%] scale-[1.5] left-[45%] bg-black">
          <Quicklink />
        </div>

        <div className="border-[#BCC3CB] border-r-[3px] absolute w-[35%] h-[70%] top-0 left-0 ">
          <div className="relative w-full h-full">
            <img
              src="/speaker.svg"
              alt=""
              className="absolute right-[10%] top-[65%] w-[20%]"
            />
          </div>
        </div>

        <div className="border-[#BCC3CB] border-t-[3px] border-r-[3px] absolute w-[35%] h-[30%] bottom-0 left-0">
          <div className="relative">
            <img
              src="/bottom.svg"
              alt=""
              className="absolute right-[1%] top-5 w-[40%]"
            />
          </div>
        </div>

        <div className="border-[#BCC3CB] border-t-[3px] border-r-[3px] absolute w-[20%] h-[50%] bottom-0 left-0 rounded-tr-[100px] bg-[#313234]">
          <div className="cont w-full h-full relative flex">
            <img
              src="/button.svg"
              alt="My Icon"
              className="m-10 absolute w-[70%] top-0 right-0 aspect-square object-fit"
            />
          </div>
        </div>

        <img
          src="/small_display.svg"
          alt=""
          className="w-[35%] absolute left-[5%] top-[5%]"
        />

        <div className="h-[50%] aspect-square flex justify-between items-center border-l-[3px] border-b-[3px] rounded-bl-[100px] border-[#BCC3CB] absolute right-0 top-0">
          <div className="cont relative w-full h-full">
            <img
              src="/Footer/FooterSocialBack.webp"
              alt="My Icon"
              className="absolute w-[141%] aspect-square object-fit"
            />

            <div className="flex flex-col rotate-45 footer-console-right absolute left-[22%] top-[20%]">
              <div className="flex justify-center items-center">
                <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2">
                  <a href="">
                    <img
                      src="/Footer/twitter.svg"
                      alt="My Icon"
                      className="h-20 w-20 object-fit"
                    />
                  </a>
                </div>
                <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2">
                  <img
                    src="/Footer/face.svg"
                    alt="My Icon"
                    className="h-20 w-20 object-fit"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2">
                  <img
                    src="/Footer/upBtn.svg"
                    alt="My Icon"
                    className="h-20 w-20 object-fit"
                  />
                </div>
                <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2">
                  <img
                    src="/Footer/insta.svg"
                    alt="My Icon"
                    className="h-20 w-20 object-fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/buttons.svg"
          alt="My Icon"
          className="m-10 absolute w-[10%] origin-center top-[50%] right-[10%] object-fit"
        />

        <div className="w-[8%] flex flex-col items-center absolute -right-4 top-[50%]">
          <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
          <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
          <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
          <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
          <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
