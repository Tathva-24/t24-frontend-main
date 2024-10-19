"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar_mob = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      {/* Hamburger/Close Icon */}
      <div
        className="fixed top-4 pt-6 left-1  z-50 cursor-pointer"
        onClick={toggleNavbar}
      >
        <div className="space-y-1">
          {isOpen ? (
            // Close (X) icon
            <div className=" w-8 h-8 bg-white font-bold text-black flex  justify-center align-middle text-3xl">
              ✕
            </div>
          ) : (
            <img src="/hamburgerIcon.svg" alt="Menu" className="w-10 h-10" />
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-full max-w-full transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            WebkitBackdropFilter: "blur(14px)",
            backdropFilter: "blur(14px)",
          }}
        ></div>

        <nav className="relative flex pl-11 pr-2 flex-col justify-start items-center space-y-3 pt-10 overflow-y-auto h-full py-3">
          <Link href="/" className="p-2">
            <img src="/homebg.svg" alt="Home" className="w-30 h-16" />
          </Link>
          <Link href="/expo" className="p-2">
            <img src="/expobg.svg" alt="Expo" className="w-30 h-16" />
          </Link>
          <Link href="/lectures" className="p-2">
            <img src="/lectbg.svg" alt="Lectures" className="w-30 h-16" />
          </Link>
          <Link href="/events" className="p-2">
            <img src="/eventbg.svg" alt="Events" className="w-30 h-16" />
          </Link>
          <Link href="/workshops" className="p-2">
            <img src="/workshopbg.svg" alt="Workshops" className="w-30 h-16" />
          </Link>
          <Link href="/competitions" className="p-2">
            <img src="/compbg.svg" alt="Competitions" className="w-30 h-16" />
          </Link>
          <Link href="/wheels" className="p-2">
            <img src="/wheelsbg.svg" alt="Wheels" className="w-30 h-16" />
          </Link>
          <Link href="/gaming" className="p-2">
            <img src="/gcbg.svg" alt="Gaming Conclave" className="w-30 h-16" />
          </Link>
          <Link href="/proshow" className="p-2">
            <img src="/proshowbg.svg" alt="Proshow" className="w-30 h-16" />
          </Link>
          <Link href="/drone" className="p-2">
            <img src="/dronebg.svg" alt="Drone Racing" className="w-30 h-16" />
          </Link>
          <Link href="/faq" className="p-2">
            <img src="/faqbg.svg" alt="FAQ" className="w-30 h-16" />
          </Link>
          <Link href="/teams" className="p-2">
            <img src="/teamsbg.svg" alt="Teams" className="w-30 h-16" />
          </Link>
          <Link href="/contacts" className="p-2">
            <img src="/contactsbg.svg" alt="Contacts" className="w-30 h-16" />
          </Link>
        </nav>
      </div>

      {/* Overlay to close the menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleNavbar}
        ></div>
      )}
    </div>
  );
};

export default Navbar_mob;
