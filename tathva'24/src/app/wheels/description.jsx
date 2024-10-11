import React from "react";
import Arrow from "./arrowbutton";
import styles from "./description.module.css";

const Wheels = ({num , heading, text}) => {
    return (
        <div className={`bg-[#ECECEC] px-[40px] pb-[25px] rounded-[30px] ${styles.component}`} >
            <div className="flex justify-between flex-wrap">
                <div className={`text-black text-[150px] leading-[150px] ${styles.heading}`}>
                    {num}
                </div>

                <div className={`text-black text-[50px] pt-[5%] ${styles.heading}`}>
                    <h1>{heading}</h1>
                </div>
            </div>

            <hr className="border-black"/>

            <div className={`relative text-black text-[20px] pt-3 ${styles.description}`}>
                {text}
                <div className="float-right ml-[20px] mt-[10px]">
                    <Arrow/>
                </div>
                <div className="absolute bottom-0 left-0 text-black font-bold">
                    ◻◻◻
                </div>
                <div className="clear-both"></div>
            </div>
        </div>   
    )
}

export default Wheels;