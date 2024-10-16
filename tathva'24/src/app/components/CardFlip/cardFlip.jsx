"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from './flipAnimation.module.css'; // Assuming this contains necessary animations and styles

export default function FlipImageCard() {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // For responsive animations

  const ghostRef = useRef(null);
  const gekkoRef = useRef(null);
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // If screen width is <= 768px, it's mobile
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Set a 1-second delay before flipping the card
    const flipTimeout = setTimeout(() => {
      setVisible(true);
      setTimeout(() => {
        setFlipped(true); // Trigger flip
        setTimeout(() => {
          setShowCharacters(true);
          animateCharacters(); // Animate the images after the flip
          animateTextAndButton(); // Animate heading, text, and button
        }, 1000); // Trigger image pop-up after flip
      }, 100); // Trigger the flip slightly after showing content
    }, 1000);

    return () => {
      clearTimeout(flipTimeout);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const animateCharacters = () => {
    if (isMobile) {
      // Mobile Animations
      gsap.fromTo(ghostRef.current, 
        { y: 500, x: 0, scale: 0.6, opacity: 0 }, // Mobile start
        { y: 50,  scale: 1.2, opacity: 1, duration: 1, ease: "power2.out" } // Mobile end
      );

      gsap.fromTo(gekkoRef.current, 
        { y: 500,x:0, scale: 0.6, opacity: 0 }, // Mobile start
        { y: 50,x:-600, scale: 1.4, opacity: 1, duration: 1, ease: "power2.out" } // Mobile end
      );
    } else {
      // Desktop Animations
      gsap.fromTo(ghostRef.current, 
        { y: 500, scale: 0.8, opacity: 0 }, // Desktop start
        { y: 100, scale: 1.4, opacity: 1, duration: 1, ease: "power2.out" } // Desktop end
      );

      gsap.fromTo(gekkoRef.current, 
        { y: 500, scale: 0.8, opacity: 0 }, // Desktop start
        { y: 100, scale: 1.8, opacity: 1, duration: 1, ease: "power2.out" } // Desktop end
      );
    }
  };

  const animateTextAndButton = () => {
    const tl = gsap.timeline();

    // Heading animation for both mobile and desktop
    tl.fromTo(headingRef1.current, 
      { opacity: 0, y: -50, x: 0 }, 
      { opacity: 1, y: 0, x: 0, duration: 0.3, ease: "power2.out", delay: 0.1 }
    )
    .fromTo(headingRef2.current, 
      { opacity: 0, y: -50, x: 0 }, 
      { opacity: 1, y: 0, x: 0, duration: 0.3, ease: "power2.out", delay: 0.2 }
    )
    // Text animation
    .fromTo(textRef.current, 
      { opacity: 0, y: -30, x: 0 }, 
      { opacity: 1, y: 0, x: 0, duration: 0.3, ease: "power2.out", delay: 0.3 }
    )
    // Button animation
    .fromTo(buttonRef.current, 
      { opacity: 0, scale: 0.8, x: 0 }, 
      { opacity: 1, scale: 1, x: 0, duration: 0.3, ease: "power2.out", delay: 0.4 }
    );
  };

  return (
    <div className={`flip-card relative flex flex-col justify-center items-center h-screen transition-all duration-1000 overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-center bg-black text-white transition-opacity duration-1000">
        {/* Right Text Section */}
        <div className="title w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:pl-40 z-20">
          <h1 ref={headingRef1} className={`${styles.letters} z-11 text-4xl md:text-8xl font-bold mb-2 md:mb-6 -translate-x-[600px]`}>
            Gaming
          </h1>
          <h1 ref={headingRef2} className={`${styles.letters} z-11 text-4xl md:text-8xl font-bold mb-6 md:mb-20 -translate-x-[700px]`}>
            Conclave
          </h1>
          <p ref={textRef} className="text-base md:text-lg mb-8 z-11 md:mb-20 max-w-md -translate-x-[700px]">
            Gekko the Angeleno leads a tight-knit crew of calamitous creatures.
            His buddies bound forward, scattering enemies out of the way, with
            Gekko chasing them down to regroup and go again.
          </p>

          {/* Button Section */}
          <div ref={buttonRef} className="text-center border-l-stone-50 z-11 border -translate-x-[300px]">
            <button className="bg-red-500 text-white text-xl md:text-2xl font-bold py-2 px-4 md:px-8 w-full">
              PLAY
            </button>
            <div className="bg-gray-600 text-white text-sm font-medium py-1 w-full">
              COMPETITIVE
            </div>
          </div>
        </div>

        {/* Left Image Section (Ghost and Gekko) */}
        <div className="relative w-full md:w-1/2 h-screen flex justify-center items-center">
          {/* Gekko Image (Foreground) */}
          {/* Ghost Image (Behind Gekko) */}
          <div ref={ghostRef} className="absolute z-0 ml-44 transform translate-y-[800px] w-48 md:w-96">
            <img
              src="/ghost.svg"
              alt="Ghost"
              className="h-auto w-full opacity-80"
            />
          </div>
          <div ref={gekkoRef} className="absolute z-10 left-4 md:-left-12 translate-y-[800px] w-48 md:w-96">
            <img
              src="/gekko.svg"
              alt="Gekko Large"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
