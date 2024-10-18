import React from "react";
import styles from "./workshopCartridge.module.css";
import Link from "next/link";

const CartridgeMob = ({
  imageSrc,
  title,
  price,
  date,
  registrationLink,
  docID,
  teamSize,
}) => {
  return (
    <div className="relative w-[292px] h-[309px] mt-10">
      {/* Background image */}
      <img src="/card.svg" alt="Background" className="" />

      <Link href={`./workshops/${docID}`}>
        <div className="absolute top-0 left-3 flex flex-col justify-between overflow-hidden">
          <div className=" flex justify-center pr-[0.4%] ">
            <div
              className={`w-[73%] h-full rounded-md md:rounded-xl ${styles.innerShadow}`}
            >
              {/* poster image */}
              <img src={imageSrc} alt={title} className="w-full h-full" />
            </div>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-center absolute left-[22%] bottom-[2%]">
        <img src="/black4.svg" alt="Inner box" className="" />
      </div>

      <div className="w-full h-max flex items-center justify-center absolute top-[60%] ">
        <p
          className={`absolute top-4 left-[18%] text-black text-[.8rem] ${styles.titlemob}`}
        >
          {title}
        </p>
      </div>

      <p
        className={`absolute top-[74%] left-[28%] text-white text-[1.3rem] font-bold`}
      >
        {price}
      </p>
      <p
        className={`absolute top-[83%] left-[28%] text-white text-[0.7rem] font-bold`}
      >
        {date}
      </p>
      {teamSize ? (
        <p
          className={`absolute top-[81%] right-[19%] text-white border-[0.5px] border-dashed text-[0.6rem] font-bold pr-1 pl-1 pt-[0.6]`}
        >
          TEAM SIZE: {teamSize}
        </p>
      ) : (
        <p
          className={`absolute top-[81%] right-[19%] text-white border-[0.5px] border-dashed text-[0.6rem] font-bold pr-1 pl-1 pt-[0.6]`}
        >
          Tathva 24`
        </p>
      )}
      <Link
        className={`absolute top-[89%] right-[19%] text-white font-bold rounded-[03%] py-[1%] px-[4%] w-max text-[0.6rem]  text-ellipsis bg-red-600 `}
        href={registrationLink}
      >
        REGISTER
      </Link>
      <Link
        className={`absolute top-[89%] left-[28%] text-white font-bold rounded-[03%] py-[1%] px-[3%] w-max text-ellipsis text-[0.6rem]  bg-yellow-500`}
        href={`./workshops/${docID}`}
      >
        LEARN MORE
      </Link>

      {/* <div className="w-full h-max flex items-center justify-center absolute left-[5%] top-[80%] bottom-0">
                <p    className={`absolute w-[50%] text-white  ${styles.description}`}  >{description.slice(0,100)}...</p>
            </div>  */}
    </div>
  );
};

export default CartridgeMob;

const Cartridge = ({
  imageSrc,
  title,
  description,
  price,
  date,
  registrationLink,
}) => {
  return (
    <div className="relative h-full w-full ">
      {/* Background image */}
      <img
        src="/WorkshopCartridge/bg.svg"
        alt="Background"
        className="w-full h-auto"
      />

      <div className="absolute top-1 left-0 right-0 bottom-0 flex flex-col justify-between">
        <div className="h-[61%] flex justify-center pr-[0.4%]">
          <div
            className={`w-[77.4%] h-full rounded-md md:rounded-xl pb-[3%] px-[7.5%] ${styles.innerShadow}`}
          >
            {/* poster image */}
            <img src={imageSrc} alt={title} className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="w-full h-max flex flex-col items-center justify-center relative bg-gray-500">
        <div className="w-full h-max flex items-center justify-center">
          <p className={`${styles.title}`}>{title}</p>
        </div>

        {/* Lower div with image and the columns */}
        <div className="w-full h-max flex flex-col items-center justify-center">
          <img
            src="/barcodeBG.png"
            alt="Inner box"
            className=" absolute bottom-4"
          />

          {/* Columns placed over the image */}
          <div className="absolute w-full flex left-[20%] items-center p-4 bottom-0">
            {/* Left column with price, date, and team size */}
            <div className="flex flex-col text-white">
              <p className={`${styles.price}`}>{price}</p>
              <p className={`${styles.date}`}>{date}</p>
              <p className="border-[0.5px] border-dashed p-1">{`Team Size : 5`}</p>
            </div>

            {/* Right column with REGISTER and Learn More buttons */}
            <div className="flex flex-col">
              <Link
                className={`text-white font-bold rounded-[03%] py-[1%] px-[4%] w-max bg-red-600 ${styles.register}`}
                href={registrationLink}
              >
                REGISTER
              </Link>
              <div
                className={`text-white font-bold rounded-[03%] py-[1%] px-[3%] w-max bg-yellow-600 ${styles.register}`}
              >
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Cartridge;
