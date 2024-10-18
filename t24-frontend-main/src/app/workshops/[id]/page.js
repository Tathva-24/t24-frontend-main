"use client";

import React, { useEffect, useState } from "react";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "fecee17e1e701ae4b85dfe015508ab24270c911fed283fa78752a6a233c11a2c232c464cc88dd0d96a07a9a71c82f6f04391795e58f94561fdfafa45a8d22d88209ee67f06b0ecfbe8ff6be3473f533fab42d6fd3b0c5cbc9a860b6733e744104818e113022e0e46f3b459acb648f8e04bc66198cd47ed303ea62a1f7186c980";

const Page = ({ params }) => {
  const { id } = params;

  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Document ID:", id);
    if (!id) return;

    const fetchWorkshop = async () => {
      try {
        const res = await fetch(`${CMS_URL}/api/workshops/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CMS_API_TOKEN}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Error fetching workshop: ${res.statusText}`);
        }

        const data = await res.json();
        setWorkshop(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWorkshop();
  }, [id]);

  useEffect(() => {
    if (workshop) {
      console.log("Updated workshop:", workshop); // Logs workshop only after it updates
    }
  }, [workshop]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!workshop) return <p>No workshop data found</p>;

  return <div>{<h1>{workshop.name}</h1>}</div>;
};

export default Page;
