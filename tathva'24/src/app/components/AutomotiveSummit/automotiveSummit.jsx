"use client";
import React, { useState, useEffect } from 'react';
import styles from './auto.module.css'; // Assuming this has any additional custom styling

const cars = [
  {
    name: 'Exotic Executioner',
    model: 'Bolide',
    image: './car1.png',
  },
  {
    name: 'Porsche',
    model: 'Model 2',
    image: './car3.png',
  },
];

const AutomotiveSummit = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentCar = cars[currentCarIndex];

  return (
    <>

    <div className={`flex flex-col bg-black  h-screen relative ${styles.main}`}>
    <div
      className="flex flex-col w-full text-white text-center  h-[80vh] bg-[url('/carbg.svg')] bg-no-repeat bg-cover  mt-[5vh]"
    >
      {/* Border Around the Entire Center Content */}
      <div className="rounded-lg p-6 w-[100vw] sm:w-[80%] max-w-5xl mx-auto h-[70vh] ">
        {/* Header */}
        <h1 className="font-valorant text-3xl sm:text-4xl font-bold  ">
          AUTOMOTIVE 'SUMMIT
        </h1>

        {/* Dashboard */}
        <div className="relative flex justify-center items-center mt-6">
          <img
            src="./dials.svg"
            alt="Combined Dials"
            className="hidden sm:block"
          />
          <img
            src="link_to_combined_dials_image_mobile"
            alt="Combined Dials Mobile"
            className="block sm:hidden w-full max-w-xs"
          />

          {/* Icon Navigation (Now Above Carousel) */}
          <div className="flex items-center justify-center p-1 bg-gray-800 rounded-full sm:p-2 mb-4 w-56 absolute top-2">
            {/* Left Icon */}
            <button className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4zM4 8a6 6 0 0112 0v5h1a1 1 0 010 2h-1v2a1 1 0 01-2 0v-2H6v2a1 1 0 01-2 0v-2H3a1 1 0 010-2h1V8z" />
              </svg>
            </button>

            {/* Middle Button (Selected) */}
            <button className="flex items-center bg-white text-black rounded-full p-1 mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-1.14 1.902-1.14 2.202 0l.518 1.978a1 1 0 00.95.69h2.067c1.22 0 1.717 1.593.741 2.326l-1.668 1.282a1 1 0 00-.36 1.118l.518 1.978c.3 1.14-.943 2.074-1.884 1.446l-1.668-1.282a1 1 0 00-1.175 0l-1.668 1.282c-.941.628-2.184-.306-1.884-1.446l.518-1.978a1 1 0 00-.36-1.118L4.465 7.92c-.976-.733-.478-2.326.741-2.326h2.067a1 1 0 00.95-.69l.518-1.978z" />
              </svg>
              <span className="text-xs">Wheels</span>
            </button>

            {/* Right Icon */}
            <button className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zm3 14a1 1 0 100-2 1 1 0 000 2zm0-3a1 1 0 100-2 1 1 0 000 2zm1-4.1a1.1 1.1 0 11-2.2 0V6.9a1.1 1.1 0 012.2 0v2.1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Carousel in the center */}
          <div className="absolute flex flex-col items-center m-3 mt-14 p-3">
            <img
              src={currentCar.image}
              alt={currentCar.name}
              className={`w-48 h-36 sm:w-36 sm:h-20 object-contain mb-4 ${styles.imgg}`}
            />
            <p className="text-sm sm:text-base p-1 font-supply ">{currentCar.name}</p>
            <p className="text-xs">{currentCar.model}</p>
          </div>
        </div>
      
        {/* Explore Button Inside the Border */}
        <div className="justify-center bg-[url('/explore_show.svg')] bg-contain">
          <button className="mt-6 mb-6 px-6 py-2 bg-red-600 rounded-full text-lg font-semibold font-valorant">
            EXPLORE THE SHOW
          </button>
        </div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="relative w-full flex justify-center align-center">
        {/* Curved background with SVG */}
        <div className={`flex fixed bottom-0  w-[100vw]  bg-[url('/hud_down1.svg')] bg-no-repeat bg-center bg-contain ${styles.down} `}></div>
        {/* Navigation Links */}
        <div className={`relative z-10 flex justify-center align-center mt-3 text-white font-supply font-normal ${styles.links}`}>
          <a href="#!" className="px-4 py-2 text-xs sm:text-0.685rem border-x-r border-gray-600">
            Motography
          </a>
          <a href="#!" className="px-4 py-2 text-xs sm:text-0.685rem border-x border-gray-600">
            Rally
          </a>
          <a href="#!" className="px-4 py-2 text-xs sm:text-0.685rem border-x border-gray-600">
            Autoshow
          </a>
          <a href="#!" className="px-4 py-2 text-xs sm:text-0.685rem border-x border-gray-600">
            Stunts
          </a>
          <a href="#!" className="px-4 py-2 text-xs sm:text-0.685rem border-x-l border-gray-600">
            Superbikes
          </a>
        </div>
      </div>
 
    </div></>
  );
};

export default AutomotiveSummit;
