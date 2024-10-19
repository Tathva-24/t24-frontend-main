import React, { useRef, useEffect } from "react";
import InnerDescription from "./InnerDescription";
import NewDesc from "./newdesc";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

const OthersLanding = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateOnScroll = (ref, startValue) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.8 }, // Initial state (hidden and smaller)
        {
          opacity: 1,
          scale: 1, // Final state (fully visible and normal size)
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: startValue,
            toggleActions: "play none none none",
          },
        }
      );
    };

    // Apply animations on all referenced elements
    animateOnScroll(ref2, "top 70%");
    animateOnScroll(ref3, "top 75%");
    animateOnScroll(ref4, "top 85%");
    animateOnScroll(ref5, "top 90%");
    animateOnScroll(ref6, "top 95%");
    animateOnScroll(ref7, "top 100%");

  }, []);

  return (
    <div ref={ref1} className="bg-black lg:px-[5%] pb-5 overflow-x-hidden">
      <div ref={ref2} className="flex w-full ">
        <Link href='/team' className="w-[100%] sm:w-[62%] p-5">
          <InnerDescription
            heading={"Meet The Team"}
            text={
              'Team tathva brings the backbone of Tathva 24&apos; Glance through the people who make the magic behind stage happen'
            }
          />
        </Link>
        <div className="hidden sm:block  w-[38%] p-5">
          <img
            src="mtt.webp"
            className=" w-full h-full object-cover rounded-3xl  border-white border-2"
          />
        </div>
      </div>

      <div ref={ref3} className="flex sm:flex-row flex-col">
        <div className="sm:w-[40%] w-screen p-5 sm:h-auto h-[250px]">
          <img
            src="wgfaq.webp"
            className=" w-full h-full object-cover rounded-3xl border-white border-2"
          />
        </div>
        <Link href='/faq' className="sm:w-2/3 w-screen p-5">
          <InnerDescription
            heading={"We've Got FAQ"}
            text={
              "We at tathva team have compiled a list of queries we’ve got and answered some frequently asked questions."
            }
          />
        </Link>
      </div>

      <div className="flex w-full">
        <div className="flex w-1/2 flex-col">
          <div ref={ref4} className="w-full p-5 text-white lg:text-[3.5vw] md:text-[4.5vw] text-[5.5vw]">
            <h1>Other sites</h1>
            <hr className="border-white mt-2" />
          </div>
          <div ref={ref5} className="w-full sm:p-5 p-3">
            <NewDesc heading={"Book Rooms"} text={"ROOMS.TATHVA.ORG"} />
          </div>
          <div ref={ref6} className="w-full sm:p-5 p-3">
            <NewDesc heading={"Tathva Passes"} text={"PASSES.TATHVA.ORG"} />
          </div>
        </div>
        <div ref={ref7} className="w-1/2 sm:p-5 flex">
          <img
            src="othsites.webp"
            className="w-full object-cover rounded-3xl border-white border-2 items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default OthersLanding;
