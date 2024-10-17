"use client";

import { useState, useEffect } from 'react';
import SmallScreenLayout from '../workshop/small';
import LargeScreenLayout from '../workshop/slider';

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    // Check on mount and when resizing
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isSmallScreen ? <SmallScreenLayout /> : <LargeScreenLayout />;
}
