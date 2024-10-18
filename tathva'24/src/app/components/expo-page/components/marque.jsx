"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

const Marque = () => {

  useEffect(() => {
    gsap.to(".marqueitem", {
      x: "-100%",
      duration: 15,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative bg-white text-black text-base overflow-x-hidden w-screen font-semibold">
      <div className="marquecontainer flex whitespace-nowrap">
        <div className="marqueitem p-[10px] pr-[30px]">
          National Institute of Technology, Calicut, presents Tathva Interface - Asia&apos;s largest student-run Tech Startup Expo.
        </div>
        <div className="marqueitem p-[10px] pr-[30px]">
          National Institute of Technology, Calicut, presents Tathva Interface - Asia&apos;s largest student-run Tech Startup Expo.
        </div>
        <div className="marqueitem p-[10px] pr-[30px]">
          National Institute of Technology, Calicut, presents Tathva Interface - Asia&apos;s largest student-run Tech Startup Expo.
        </div>
        <div className="marqueitem p-[10px] pr-[30px]">
          National Institute of Technology, Calicut, presents Tathva Interface - Asia&apos;s largest student-run Tech Startup Expo.
        </div>
        <div className="marqueitem p-[10px] pr-[30px]">
          National Institute of Technology, Calicut, presents Tathva Interface - Asia&apos;s largest student-run Tech Startup Expo.
        </div>
      </div>
    </section>
  );
};

export default Marque;
