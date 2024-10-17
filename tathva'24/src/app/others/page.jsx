import React from "react";
import InnerDescription from "./InnerDescription";
import NewDesc from "./newdesc";
const page = () => {
  return (
    <div className="bg-black lg:px-[5%] pb-5 overflow-x-hidden">
      <div className="flex w-full ">
        <div className="w-[100%] sm:w-[62%] p-5">
          <InnerDescription
            heading={"Meet The Team"}
            text={
              "Team tathva brings the backbone of Tathva 24’ Glance through the people who make who make the magic behind stage happen"
            }
          />
        </div>
        <div className="hidden sm:block  w-[38%] p-5">
          <img
            src="mtt.webp"
            className=" w-full h-full object-cover rounded-3xl  border-white border-2"
          />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-[40%] w-screen p-5 sm:h-auto h-[250px]">
          <img
            src="wgfaq.webp"
            className=" w-full h-full object-cover rounded-3xl border-white border-2"
          />
        </div>
        <div className="sm:w-2/3 w-screen p-5">
          <InnerDescription
            heading={"We've Got FAQ"}
            text={
              "We at tathva team have compiled a list of queries we’ve got and answered and answered some frequently asked question."
            }
          />
        </div>
      </div>
      <div className="flex w-full ">
        <div className="flex w-1/2 flex-col">
          <div className="w-full p-5 text-white lg:text-[3.5vw] md:text-[4.5vw] text-[5.5vw]">
            <h1 className={``}>Other sites</h1>
            <hr className="border-white mt-2" />
          </div>
          <div className="w-full sm:p-5 p-3">
            <NewDesc heading={"Book Rooms"} text={"ROOMS.TATHVA.ORG"} />
          </div>
          <div className="w-full sm:p-5 p-3">
            <NewDesc heading={"Tathva Passes"} text={"PASSES.TATHVA.ORG"} />
          </div>
        </div>
        <div className="w-1/2 sm:p-5 flex">
          <img
            src="othsites.webp"
            className="w-full object-cover  rounded-3xl  border-white border-2 items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
