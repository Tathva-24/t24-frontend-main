'use client'; 

import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  // State to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="text-white p-2 bg-black fixed top-5 right-5 z-20"
        style={{ fontSize: '2rem' }}
        onClick={toggleMenu} 
      >
        ☰ 
      </button>

      {/* Slide Down Menu */}
      <div
        className={`fixed inset-0 z-10 bg-blue-500 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-screen flex items-center justify-center relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/navbar_bg.svg')", 
              filter: 'blur(4px)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
            }}
          ></div>

          <div className="md:ml-0 w-full lg:ml-40 p-4 flex flex-col md:flex-row gap-5 md:gap-11 mt-28 mb-28 mr-24 z-10">
            <div className="flex justify-between items-start">
              <button
                onClick={toggleMenu} 
                className="text-7xl w-25 border-none bg-white text-black p-1"
                style={{ fontWeight: '100', width: '64px', height: '64px' }} // Adjusted font weight
              >
                X
              </button>
            </div>

            <div
              className={`grid grid-cols-2 gap-x-36 gap-y-5 text-black font-['ValorantFont'], sans-serif ${styles.val}`}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  label={item.label}
                  backgroundImage={item.backgroundImage} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ label, backgroundImage }) => {
  return (
    <div className="relative group"> 
      <div
        className="bg-white flex items-center justify-left pl-4 "
        style={{ width: '400px', height: '64px' }} 
      >
        <span className="text-3xl font-medium">{label}</span>
      </div>
      
      <div
        className="absolute inset-0 opacity-0 group-hover:cursor-pointer group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

const menuItems = [
  { label: 'HOME', backgroundImage: '/homebg.svg' },
  { label: 'WORKSHOPS', backgroundImage: '/workshopbg.svg' },
  { label: 'EXPO', backgroundImage: '/expobg.svg' },
  { label: 'EVENTS', backgroundImage: '/eventbg.svg' },
  { label: 'LECTURES', backgroundImage: '/lectbg.svg' },
  { label: 'PROSHOW', backgroundImage: '/proshowbg.svg' },
  { label: 'ACCOMMODATION', backgroundImage: '/dronebg.svg' },
  { label: 'DRONE RACING', backgroundImage: '/dronebg.svg' },
  { label: 'CERTIFICATES', backgroundImage: '/dronebg.svg' },
  { label: 'FAQ', backgroundImage: 'faqbg.svg' },
  { label: 'COMPETITIONS', backgroundImage: '/compbg.svg' },
  { label: 'TEAMS', backgroundImage: '/teamsbg.svg' },
  { label: 'WHEELS', backgroundImage: '/wheelsbg.svg' },
  { label: 'CONTACTS', backgroundImage: '/contactsbg.svg' },
  { label: 'GAMING CONCLAVE', backgroundImage: '/gcbg.svg' },
];

export default Navbar;
