"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";
import Workshopmodal from "./components/Workshopmodal/Workshopmodal";
import Hero from "./components/Hero/Hero";
import Carousal from "./components/updatedcarousal/page";
import GamingPage from "./components/glitchPage/GamingPage";
import ExpoPage from "./components/expo-page/page";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import ProShow from "./components/pro/ProShow";
import OthersLanding from "./components/Others/Other";
import AutomotiveSummit from "./components/AutomotiveSummit/automotiveSummit";
import MainMarquee from "./components/mainPageMarquee/marque";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".hero-container",
      { scale: 1 },
      {
        opacity: 0,
        y: 0,
        duration: 2.5,
        scale: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "60% 50%",
          end: "100% 50%",
          // markers: true,
          toggleActions: "play none play reverse",
          // markers: true
        },
      }
    );

    // Scroll-triggered animation for Carousal
    gsap.fromTo(
      ".text-container",
      { opacity: 0, y: 50, scale: 0.1 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scale: 1,
        ease: "power2.out",
        // marker: true,
        scrollTrigger: {
          trigger: ".text-container",
          start: "top 50%",
          toggleActions: "play none none none",
          // markers: true
        },
      }
    );
    gsap.fromTo(
      ".text-container2",
      { opacity: 0, y: 50, scale: 0.1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        // marker: true,
        scrollTrigger: {
          trigger: ".text-container2",
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true
        },
      }
    );

    gsap.fromTo(
      ".carousal-container",
      { opacity: 0, y: 50, scale: 0.1 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scale: 1,
        ease: "power2.out",
        position: "sticky",
        scrollTrigger: {
          trigger: ".carousal-container",
          start: "top 80%",
          // markers: true,

          toggleActions: "play none none none",
        },
      }
    );

    // Scroll-triggered animation for ProShow
    // gsap.fromTo(
    //   ".proshow-container",
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".proshow-container",
    //       start: "top 20%",
    //       toggleActions: "play none none none",
    //       // markers: true,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   ".expo-container",
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".expo-container",
    //         start: "top 50%",
    //         toggleActions: "play none none none",
    //       // markers: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <div className="min-h-[200vh] relative overflow-x-clip bg-black flex flex-col z-50">
      <Navbar />
      <div className="hero-container h-[130vh]">
        <Hero />
      </div>
      <div className="text-container h-[20vh] md:h-[50vh] opacity-0">
        <div className="w-full h-full">
          <div className="upppercase w-full h-full text-white flex flex-col items-center justify-center ">
            <p className="text-5xl md:text-8xl lg:text-9xl  text-pricedown">What have we </p>
            <p className="text-5xl md:text-8xl lg:text-9xl  text-pricedown">
              got for you ?
            </p>
          </div>
        </div>
      </div>
      <div className="carousal-container h-screen">
        <Carousal />
      </div>

      <div className="text-container2 h-[40vh] md:h-[80vh] opacity-0">
        <div className="w-full h-full">
          <div className="upppercase w-full h-full text-white flex flex-col items-center  justify-center ">
            <p className="text-3xl md:text-8xl lg:text-9xl text-pricedown">And much More... </p>
          </div>
        </div>
      </div>

      <GamingPage />

      <div className="expo-container w-screen h-min-screen my-[4vh] mt-[8vh]">
        <ExpoPage />
      </div>

      <div className="mt-[5vh">
        <AutomotiveSummit />
      </div>

      <div className="w-full mt-[8vh] mb-[18vh]">
        <Image
          src="/divider.svg"
          alt="Divider"
          layout="responsive"
          width={100}
          height={10}
          className="w-full"
        />
      </div>

      <div className="proshow-container my-[2vh] mb-[5vh]">
        <ProShow />
      </div>

      <div className=" mt-[10vh] h-full">
        <OthersLanding />
      </div>

      <div className="footer flex h-screen w-full bottom-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
      <Analytics />
    </div>
  );
}
