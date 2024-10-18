"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import styles from "./marquee.module.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSRulePlugin, Draggable);

export default function Marquee({ element1, element2, color1, color2 }) {
  const marqueeRef = useRef(null);

// How to use : 

// const element1 = "automative ";
// const element2 = "summit ";
// const color1 = "#b70202";
// const color2 = "#0a0a00";

// const Page = () => {
// return (
//   <div>
//     <Marquee
//       element1={element1}
//       element2={element2}
//       color1={color1}
//       color2={color2}
//     />
//   </div>
// );
// };


  useEffect(() => {
    const marquee = marqueeRef.current;
    marquee.innerHTML += marquee.innerHTML;
    const totalWidth = marquee.scrollWidth / 2;

    // Animate the marquee scrolling
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 50,
      repeat: -1,
      delay: 1,
    });

    // Animate the scale and opacity on load
    gsap.fromTo(
      marquee,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  }, [marqueeRef]);

  return (
    <div className={`relative overflow-hidden flex h-min items-center justify-center m-0 ${styles.marqueecont}`}>
      <div ref={marqueeRef} className={`${styles.marquee} whitespace-nowrap flex text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]   `}>

        <span
          style={{ color: color1 }}
          className={` mx-4 ${styles.element1}`}
        >
          {element1}
        </span>

        <span
          style={{
            color: "black",
            textShadow: `-2px -2px 0  ${color1}, 2px -2px 0 ${color1}, -2px 2px 0 ${color1}, 2px 2px 0 ${color1} ; -webkit-text-stroke: 2px ${color1};`,
          }}
          className={` mx-4  ${styles.element2}`}
        >
          {element2}
        </span> 

      </div>
    </div>
  );
}
