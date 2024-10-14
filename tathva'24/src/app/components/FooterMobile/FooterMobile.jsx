"use client";
import { useState, useEffect } from "react";
import styles from "./footermobile.module.css";
import Quicklink from "../QuixkLinks/QuickLinks";

const FooterMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Function to check screen size and update state
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 1400);
    };

    // Set initial state based on current screen size
    checkScreenWidth();

    // Add event listener to update on window resize
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  if (!isMobile) {
    return null; // Return null for screens larger than 1400px
  }

  return (
    <div className="flex flex-col justify-end h-[100vh] box-border relative ">
      <div className={styles.foot_mob}>
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute bottom-4 right-5"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute bottom-4 left-5 "
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute top-4 right-4"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute top-4 left-5"
        />

        <img
          src="/upper1.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-6] absolute top-[-8px] right-0"
        />

        <img
          src="/upper2.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-2] absolute top-[-8px] left-0"
        />

        <div className="flex flex-col ">
          <div className="flex w-[90vw] h-[7vh] justify-end relative right-3 bottom-0 ">
            <img
              src="/metal.svg"
              alt="My Icon"
              className="h-120 object-fit relative z-2"
            />
          </div>

          <div className="flex">
            <div className="flex flex-col flex-1">
              <div className="h-[50%] border-b"></div>
              <div></div>
            </div>
            <div className="flex-[8] h-[80%] mt-[3vh] mr-[-1vw] relative z-[5]">
              <img
                src="/small_display.svg"
                alt="My Icon"
                className="h-115 object-fit"
              />
            </div>
            <div className="flex-grow flex-col flex-[1.5]">
              <div className="h-[50%] border-b"></div>
              <div></div>
            </div>
            <div className="flex-[4] flex border border-b-l-2xl border-t-0 border-r-0 justify-center items-center rounded-bl-3xl h-full pl-4 mb-4 pb-4">
              <img
                src="/speaker.svg"
                alt="My Icon"
                className="h-[11vh] object-fit pb-2"
              />
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex mt-6 max-h-44">
          <div className=" w-[79%] h-full flex ml-[7vw] mr-[4vw]">
            <Quicklink />
          </div>
          <div className={styles.button}>
            <img
              src="/buttons.svg"
              alt="My Icon"
              className="h-3/5 object-fit"
            />
          </div>
        </div>
        <div className="flex max-h-44 relative">
          {/* Left side */}
          <div className="w-[47%] flex justify-center items-center">
            <img
              src="/button.svg"
              alt="My Icon"
              className="w-full h-4/5 object-fit"
            />
          </div>

          {/* Right side with social buttons */}
          <div className="w-[45%] flex justify-center items-center border-l-[1px] p-5 relative">
            <img
              src="/footerPadMobile.svg"
              alt="Social Buttons"
              className="w-auto h-80 object-contain"
            />

            {/* Icon Group overlaying social_buttons.svg */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Adjusting positions for each icon */}

              {/* Twitter Icon */}
              <div
                className="absolute"
                style={{
                  top: "15%",
                  left: "40%",
                  transform: "translate(-10%, 10%)",
                }}
              >
                <a href="">
                  <img
                    src="/Footer/twitter.svg"
                    alt="Twitter"
                    className="h-12 w-12 object-contain cursor-pointer hover:scale-95"
                  />
                </a>
              </div>

              {/* Facebook Icon */}
              <div
                className="absolute"
                style={{
                  top: "40%",
                  left: "60%",
                  transform: "translate(-10%, -10%)",
                }}
              >
                <img
                  src="/Footer/face.svg"
                  alt="Facebook"
                  className="h-12 w-12 object-contain cursor-pointer hover:scale-95"
                />
              </div>

              {/* Up Icon */}
              <div
                className="absolute"
                style={{
                  top: "60%",
                  left: "40%",
                  transform: "translate(-10%, -10%)",
                }}
              >
                <img
                  src="/Footer/upBtn.svg"
                  alt="Up"
                  className="h-12 w-12 object-contain cursor-pointer hover:scale-95"
                />
              </div>

              {/* Instagram Icon */}
              <div
                className="absolute"
                style={{
                  top: "40%",
                  left: "20%",
                  transform: "translate(-10%, -10%)",
                }}
              >
                <img
                  src="/Footer/insta.svg"
                  alt="Instagram"
                  className="h-12 w-12 object-contain cursor-pointer hover:scale-95"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mr-5 ">
          <div className="border-[1px] border-gray-200 rounded-tr-3xl rounded-tl-3xl w-1/3 h-full object-fit p-4 pt-3 border-b-0">
            <img
              src="/bottom.svg"
              alt="My Icon"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
