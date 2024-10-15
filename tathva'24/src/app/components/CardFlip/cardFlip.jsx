"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import './flipAnimation.module.css';

export default function FlipImageCard() {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set a 1-second delay before flipping the images
    const flipTimeout = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setFlipped(true), 100); // Trigger the flip slightly after showing content
    }, 1000);

    return () => clearTimeout(flipTimeout);
  }, []);

  return (
    <div className={`flex justify-center items-center h-screen bg-black transition-all duration-1000 ${flipped ? 'bg-yellow-300' : ''}`}>
      <div
        className={`relative w-full h-full flex justify-center items-center transition-transform duration-1000 ${flipped ? 'scale-50' : ''}`}
        style={{ perspective: '1000px' }}
      >
        <div className={`absolute w-full h-full backface-hidden flex items-center justify-center`}>
          {/* Front Card with Image */}
          <div className="w-full h-full flex items-center justify-center bg-blue-500 rounded-lg">
            <img
              src="https://via.placeholder.com/256x256.png?text=Front+Image"
              alt="Front"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className={`absolute w-full h-full rotate-y-180 backface-hidden flex items-center justify-center`}>
          {/* Back Card with Image */}
          <div className="w-full h-full flex items-center justify-center bg-red-500 rounded-lg">
            <img
              src="https://via.placeholder.com/256x256.png?text=Back+Image"
              alt="Back"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {flipped && visible && (
        <div className="ml-4 max-w-md text-white">
          <p className="text-gray-200">
            This paragraph appears next to the flipping images after the flip animation. You can customize the content and style as needed!
          </p>
        </div>
      )}
    </div>
  );
}