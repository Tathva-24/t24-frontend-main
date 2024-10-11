import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";

const InnerDescription = () => {
    return (
        <div className="bg-[#ECECEC]">
            <div className={`flex justify-between`}>
                <div className={`text-black text-[9em] ${styles.heading}`}>
                    03
                </div>

                <div className={`text-black text-[3em] ${styles.heading}`}>
                    About
                </div>
            </div>
            <hr className="border-black"/>
            <div className="bottom">
                <div className={`text-black ${styles.description}`}>
                    Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earnprizes worth 7 lakhs!
                </div>
                <div className="box text-black font-bold">
                    ◻◻◻
                </div>
                <div className="border border-black p-4">
                    <Arrow />
                </div>
            </div>
        </div>

    )
}

export default InnerDescription;