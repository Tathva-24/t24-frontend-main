import React from "react";
import Dinosaur from "./components/dinosaur";
import Marque from "./components/marque";
import Torch from "./components/torch";
import styles from ".//page.module.css";

const DesktopComponent = () => {
  return (
    <div>
      <div className="pt-[2%] h-[10vh]">
        <Marque />
      </div>
      <div className="h-[90vh] flex flex-row">
        <div className="w-[50vw] relative overflow-hidden">
          <div className="w-full h-full relative flex items-center">
            <img
              src="/full_build.svg"
              className="object-cover w-full absolute right-0 select-none	"
            />
          </div>
        </div>

        <div className="flex-[1] flex flex-col justify-around mr-10 ml-8">
          <div className="mt-20">
            <img src="/expo.svg" className="select-none	" />
            <div className="mb-4">
              <p className="text-white">
                National Institute of Technology, Calicut, presents Tathva
                Interface - Asia&apos;s largest student-run Tech Startup Expo. We at
                the Tathva Interface aim to provide a platform for
                all-entrepreneurs.
              </p>
            </div>
            <Dinosaur />
          </div>
          <div className="flex justify-end">
            <Torch />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileComponent = () => {
  return (
    <div>
      <div className="pt-[5%] h-[10vh]">
        <Marque />
      </div>
      <div className="h-[90vh] flex flex-col items-center">
        <img src="/full_build.svg" className="w-[90%] h- mb-4 mt-0" />

        <div className="flex-1 flex flex-col mr-8 ml-8">
          <div className="flex flex-col items-center">
            <img src="/expo.svg" className="ml-3 select-none	" />
            <p className="text-justify text-center px-3 text-white">
              National Institute of Technology, Calicut, presents Tathva
              Interface - Asia&apos;s largest student-run Tech Startup Expo. We at
              the Tathva Interface aim to provide a platform for
              all-entrepreneurs.
            </p>
          </div>
          <div className="flex flex-col px-3 mt-3 select-none	">
            <Dinosaur />
            <div className="flex flex-row justify-end select-none	">
            <Torch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabComponent = () => {
  return (
    <div className="custom-sm:hidden">
      <div className="pt-[5%] h-[10vh] ">
        <Marque />
      </div>
      <div className="h-[90vh] flex flex-col items-center select-none	">
        <img src="/full_build.svg" className="w-[60%] h- mb-4 mt-0 select-none	" />

        <div className="flex-1 flex flex-col mr-8 ml-8">
          <div className="flex flex-col">
            <img src="/expo.svg" className="ml-3 select-none	" />
            <p className=" text-center mx-3 text-white ">
              National Institute of Technology, Calicut, presents Tathva
              Interface - Asia&apos;s largest student-run Tech Startup Expo. We at
              the Tathva Interface aim to provide a platform for
              all-entrepreneurs.
            </p>
          </div>
          <div className="flex flex-col m-3 select-none	">
            <Dinosaur />
            <div className="flex flex-row justify-end select-none	">
            <Torch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ExpoPage() {
  return (
    <section className={` bg-black ${styles.outercontainer}`}>
      <div className="custom-md:hidden">
        <DesktopComponent />
      </div>
      <div className="hidden custom-md:block">
        <TabComponent />
      </div>
      <div className="hidden custom-sm:block">
        <MobileComponent />
      </div>
    </section>
  );
}

export default ExpoPage;
