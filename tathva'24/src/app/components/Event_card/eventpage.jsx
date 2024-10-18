import React from "react";
import styles from "./eventpage.module.css";
import CartridgeMob from "../workshopCartridge/cartridge_mob";

const Eventpage = ({event, cards}) => {

  return (
    <div className="flex bg-black">
        <marquee className=" w-[5%] h-[100vh] p-4" direction="up" scrollamount="3">
        This is a vertical marquee
        </marquee>

        <div className="flex-grow">
            <div className={`py-[2%] pl-[4%] `}>
                <span className={`bg-white px-[1.5vw] text-[4vw] font-bold rounded-sm md:rounded-md ${styles.supplybold}`}>TATHVA</span>
                <p className={`text-white text-[12vw] m-0 leading-none ${styles.supplyregular}`}>{event}</p>
            </div>
            <hr className="border-t-2 border-white" />
            <div className="flex flex-wrap p-[3vh] md:p-[4%] mx-auto">
                {cards.map((card, index) => (
                    <div key={index} className="mr-10">
                        <div className="">
                        <CartridgeMob
            imageSrc="/WorkshopCartridge/workshop.jpg"
            title="DATA SCIENCE"
            price="₹999"
            date="27 OCT"
            registrationLink="https://www.google.com/"
            description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
          />
        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Eventpage;
