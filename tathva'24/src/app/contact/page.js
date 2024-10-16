import React from "react";
import styles from "../../app/contact/contact.module.css";

const page = () => {
  return (
    <div className={styles.bgimg}>
      <div className="flex justify-center pt-36">
        <div className={styles.gameoverimg}></div>
      </div>
      <div className=" w-[360px] float-start  ms-[240px] mt-[150px] text-white">
        <div className="flex justify-center mb-4">
          <div className={styles.contactimg}> </div>
        </div>
        <div className="ms-[20%]">
          <div className={styles.font}>
            Lakshmi Priya S <br />
            +91 62829621911 <br />
            <br />
            Nithin C Lal <br />
            +91 94470512231 <br />
            <br />
            Aditya Suryawanshi <br />
            +91 86683196471 <br />
            <br />
            Polu Koushik Reddy <br />
            +91 63014029841
          </div>
        </div>
      </div>
      <div className=" bg-black float-end w-[360px] me-[240px] mt-[150px] text-white">
        <div className="flex justify-center pb-5">
          <div className={styles.messageimg}></div>
        </div>
        <div className={styles.font}>
          <form action="" className=" ps-8">
            <input
              className="mb-5 ps-2 border-4 border-[#3967BF] border-r-8 border-b-8 placeholder-black"
              type="text"
              color="current-color"
              placeholder="enter name"
            />
            <input
              className="mb-5 ps-2 border-4 border-[#3967BF] border-r-8 border-b-8 placeholder-black"
              type="email"
              placeholder="enter email"
            />
            <input
              className="mb-5 ps-2 pb-[48%] border-4 border-[#3967BF] border-r-8 border-b-8 placeholder-black"
              type="text"
              placeholder="message"
            />
            <div className=" flex justify-center">
              <button className=" flex justify-center items-center border-2 border-r-8 border-b-8 border-[#3967BF] p-2 rounded">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
