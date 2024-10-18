'use client'; 
import React, { useState, useEffect } from 'react'; 
import styles from './navbar.module.css'; 
import Link from 'next/link'; 
import Navbar_mob from './navbar_mob'; 

const Navbar = () => {   
  const [isOpen, setIsOpen] = useState(false);    
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

  const toggleMenu = () => {     
    setIsOpen(!isOpen);   
  };    

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900); // Adjust based on your breakpoint
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []); 

  return (     
    <div className="relative">       
      {/* Check if the screen is mobile */}       
      {isMobile ? (         
        <Navbar_mob />       
      ) : (         
        <>           
          {/* Hamburger Icon for larger screens */}           
          {!isOpen && ( // Only show the hamburger if the menu is closed
            <button             
              className="text-white p-2 bg-black fixed top-5 right-5 z-20"             
              style={{ fontSize: '2rem' }}             
              onClick={toggleMenu}           
            >             
              ☰           
            </button>           
          )}            

          {/* Slide Down Menu */}           
          <div             
            className={`fixed inset-0 z-10 bg-blue-500 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}           
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
                    style={{ fontWeight: '100', width: '64px', height: '64px' }}                   
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
                      link={item.link}                     
                    />                   
                  ))}                 
                </div>               
              </div>             
            </div>           
          </div>         
        </>       
      )}     
    </div>   
  ); 
};  

const MenuItem = ({ label, backgroundImage, link }) => {   
  return (     
    <Link href={link} className="relative group">       
      <div>         
        <div className="bg-white flex items-center justify-left pl-5" style={{ width: '400px', height: '64px' }}>           
          <span className="text-4xl font-medium">{label}</span>         
        </div>       
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
    </Link>   
  ); 
};    

const menuItems = [   
  { label: 'HOME', backgroundImage: '/homebg.svg', link: '/' },   
  { label: 'WORKSHOPS', backgroundImage: '/workshopbg.svg', link: '/workshops' },   
  { label: 'EXPO', backgroundImage: '/expobg.svg', link: '/expo' },   
  { label: 'EVENTS', backgroundImage: '/eventbg.svg', link: '/events' },   
  { label: 'LECTURES', backgroundImage: '/lectbg.svg', link: '/lectures' },   
  { label: 'PROSHOW', backgroundImage: '/proshowbg.svg', link: '/proshow' },   
  { label: 'ACCOMMODATION', backgroundImage: '/dronebg.svg', link: '/accommodation' },   
  { label: 'DRONE RACING', backgroundImage: '/dronebg.svg', link: '/drone-racing' },   
  { label: 'CERTIFICATES', backgroundImage: '/dronebg.svg', link: '/certificates' },   
  { label: 'FAQ', backgroundImage: '/faqbg.svg', link: '/faq' },   
  { label: 'COMPETITIONS', backgroundImage: '/compbg.svg', link: '/competitions' },   
  { label: 'TEAMS', backgroundImage: '/teamsbg.svg', link: '/teams' },   
  { label: 'WHEELS', backgroundImage: '/wheelsbg.svg', link: '/wheels' },   
  { label: 'CONTACTS', backgroundImage: '/contactsbg.svg', link: '/contacts' },   
  { label: 'GAMING CONCLAVE', backgroundImage: '/gcbg.svg', link: '/gaming-conclave' }, 
];  

export default Navbar;
