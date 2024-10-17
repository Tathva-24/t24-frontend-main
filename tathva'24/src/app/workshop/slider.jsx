//"use client";

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Add this import statement
import styles from '../workshop/slider.module.css';

const Home = () => {
  const [bannerSrc, setBannerSrc] = useState("/work.png");
  const [nextBannerSrc, setNextBannerSrc] = useState("/work.png");
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "/work.png",  // Image for "WORKSHOPS"
    "/lec.png",    // Image for "LECTURES"
    "/comp.png"// Image for "COMPETITION"
  ];

  const intervalRef = useRef(null);
  const currentImageIndexRef = useRef(0); // Reference to keep track of the current image index

  const handleMouseEnter = (section) => {
    setIsHovered(true); // Pause automatic image change on hover
    if (section === 'LECTURES') {
      triggerImageChange(images[1]);
    } else if (section === 'COMPETITION') {
      triggerImageChange(images[2]);
    } else if (section === 'WORKSHOPS') {
      triggerImageChange(images[0]);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Resume automatic image change on mouse leave
  };

  const triggerImageChange = (newSrc) => {
    setNextBannerSrc(newSrc);
    setIsAnimating(true);
    
    // Wait for the animation to finish before setting the new banner source
    setTimeout(() => {
      setBannerSrc(newSrc);
      setIsAnimating(false);
    }, 500); // Animation duration
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        // Update index for the next image in sequence
        currentImageIndexRef.current = (currentImageIndexRef.current + 1) % images.length;
        triggerImageChange(images[currentImageIndexRef.current]);
      }, 1500); // Interval to change image

      return () => clearInterval(intervalRef.current); // Cleanup on component unmount or hover
    }
  }, [isHovered]);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.imageContainer}>
          <Image
            src={bannerSrc} // Old Image
            alt="Event Banner"
            width={400}
            height={400}
            className={`${styles.bannerImage} ${isAnimating ? styles.slideOut : ''}`}
          />
          <Image
            src={nextBannerSrc} // New Image
            alt="Event Banner"
            width={400}
            height={400}
            className={`${styles.bannerImage} ${isAnimating ? styles.slideIn : ''}`}
          />
        </div>
      </div>
      <div className={`bg-[white] mr-8 rounded-xl text-white ${styles.rightPanel}`}>
      
        <div
          className={`bg-[black] pr-8 pl-10 rounded-xl text-center w-[98%] mt-[10px] hover:bg-[#7E82E1] cursor-pointer ${styles.text}`}
          onMouseEnter={() => handleMouseEnter('WORKSHOPS')}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/workshops">WORKSHOPS</Link>
        </div>
        
        
        <div
          className={`bg-[black] pr-8 pl-10 rounded-xl text-center w-[98%] hover:bg-[#ACCF99] cursor-pointer ${styles.text}`}
          onMouseEnter={() => handleMouseEnter('LECTURES')}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/workshops">LECTURES</Link>
        </div>
        
        
        <div
          className={`bg-[black] pr-8 pl-10 rounded-xl text-center w-[98%] mb-[10px] hover:bg-[#F6B25E] cursor-pointer ${styles.text}`}
          onMouseEnter={() => handleMouseEnter('COMPETITION')}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/workshops">COMPETITION</Link>
        </div>
        
      </div>
    </div>
  );
  
  
};

export default Home;

