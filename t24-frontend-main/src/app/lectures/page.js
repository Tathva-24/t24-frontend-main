"use client"; // Add this directive at the top to mark this as a client-side component

import React, { useState, useEffect } from "react";
import Eventpage from "../components/Event_card/eventpage";
import Pacman from "../components/pacman/Pacman";
import Marqueework from "../components/marquee_workshop/marquee_comp";
import Navbar from "../components/Navbar/Navbar";
const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "fecee17e1e701ae4b85dfe015508ab24270c911fed283fa78752a6a233c11a2c232c464cc88dd0d96a07a9a71c82f6f04391795e58f94561fdfafa45a8d22d88209ee67f06b0ecfbe8ff6be3473f533fab42d6fd3b0c5cbc9a860b6733e744104818e113022e0e46f3b459acb648f8e04bc66198cd47ed303ea62a1f7186c980";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await fetch(`${CMS_URL}/api/lectures?populate=coverImage`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CMS_API_TOKEN}`,
          },
        });
        const fetchedData = await res.json();
        console.log(fetchedData);
        setData(fetchedData.data || []); // Ensure data is always an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lectures:", error);
        setLoading(false);
      }
    };

    fetchLectures();
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative p-10 md:p-8">
      {loading || (data && data.length === 0) ? ( // Render Pacman if loading or data is empty
        <div className="flex justify-center items-center h-[100vh]">
          <Pacman />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <div
              className="-rotate-90 z-20"
              style={{
                height: "100vw",
                display: "flex",
              }}
            >
              <Marqueework
                element1={"TATHVA 2024"}
                element2={"WORKSHOP"}
                color={"#b7c9e2"}
              />
            </div>
          </div>

          {/* Navbar and Event Content */}
          <Navbar />

          <div className="relative z-10">
            <Eventpage event="LECTURES" cards={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
