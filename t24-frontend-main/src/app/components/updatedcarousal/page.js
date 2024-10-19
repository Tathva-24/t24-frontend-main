// pages/page.js
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Carousal = () => {
  return (
    <div className="flex flex-row bg-transparent p-10 justify-evenly custom-sm:flex-col h-full  items-center text-2xl">
      {/* Card 1 - Workshops */}
      <Link href="/workshops" passHref legacyBehavior>
        <a
          className={`${styles.divcont} relative flex flex-col items-center rounded-2xl overflow-hidden  m-3`}
        >
          {/* <div className={`${styles.heading} ${styles["workshop-heading"]}`}>
            WORKSHOPS
          </div> */}
          <img
            src="/workshop_black.png"
            alt="Lectures"
            className="object-cover rounded-[20px] border-[5px] border-white"
          />
        </a>
      </Link>

      {/* Card 3 - Competitions */}
      <Link href="/events" passHref legacyBehavior>
        <a
          className={`${styles.divcont} relative flex flex-col items-center rounded-2xl overflow-hidden  m-3`}
        >
          {/* <h2 className={`${styles.heading} ${styles["competition-heading"]}`}>
            COMPETITIONS
          </h2> */}
          <img
            src="/comp_black.png"
            alt="Lectures"
            className="object-cover rounded-[20px] border-[5px] border-white"
          />
        </a>
      </Link>

      {/* Card 2 - Lectures */}
      <Link href="/lectures" passHref legacyBehavior>
        <a
          className={`${styles.divcontl} relative flex flex-colitems-center rounded-2xl overflow-hidden  m-3`}
        >
          {/* <h2 className={`${styles.heading} ${styles["lecture-heading"]}`}>
            LECTURES
          </h2> */}
          <img
            src="/lecture_black.png"
            alt="Lectures"
            className="object-cover rounded-[20px] border-[5px] border-white"
          />
        </a>
      </Link>
    </div>
  );
};

export default Carousal;
