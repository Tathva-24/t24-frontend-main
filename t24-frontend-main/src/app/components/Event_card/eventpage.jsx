import React from "react";
import styles from "./eventpage.module.css";
import CartridgeMob from "../workshopCartridge/cartridge_mob";

const CMS_URL = "https://cms.tathva.org";

// Function to format the date to "DD MMM" format
const formatDate = (dateString) => {
  const date = new Date(dateString); // Parse the date
  const options = { day: "numeric", month: "short" }; // Format options for day and month
  return date.toLocaleDateString("en-US", options).toUpperCase(); // e.g., "27 OCT"
};

const Eventpage = ({ event, cards }) => {
  return (
    <div className="flex bg-black">
      <marquee
        className=" w-[5%] h-[100vh] p-4"
        direction="up"
        scrollamount="3"
      >
        This is a vertical marquee
      </marquee>

      <div className="flex-grow">
        <div className={`py-[2%] pl-[4%] `}>
          <span
            className={`bg-white px-[1.5vw] text-[4vw] font-bold rounded-sm md:rounded-md ${styles.supplybold}`}
          >
            TATHVA
          </span>
          <p
            className={`text-white text-[12vw] m-0 leading-none ${styles.supplyregular}`}
          >
            {event}
          </p>
        </div>
        <hr className="border-t-2 border-white" />
        <div className="flex flex-wrap p-[3vh] md:p-[4%] mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="mr-10">
              <div className="">
                <CartridgeMob
                  imageSrc={CMS_URL + card.posterImage.url}
                  title={card.name}
                  price={card.regPrice}
                  date={formatDate(card.eventDate)}
                  registrationLink={card.regLink}
                  docID={card.documentId}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventpage;
