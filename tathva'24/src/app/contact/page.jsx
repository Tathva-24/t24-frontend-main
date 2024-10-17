import React from "react";
import styles from "../../app/contact/contact.module.css";

function page() {
  return (
    <div>
      <div className=" pt-10 pb-10 p-4 bg-black">
        <div className="p-2 flex justify-center">
          <img src="game.svg" className="w-[400px] px-10" alt="" />
        </div>
        <div className="p-2 flex justify-center">
          <img src="over.svg" className="w-[400px] px-10" alt="" />
        </div>
      </div>
      <div className="bg-black text-white">
        <h1 className="p-8 flex justify-center">
          <img src="contact.svg" className="w-[400px]" alt="contact" />
        </h1>
        <div className={styles.textfont}>
          <div className="flex justify-center pb-6">
            Lakshmi Priya S <br />
            +91 62829621911
          </div>
          <div className="flex justify-center pb-6">
            Nithin C Lal <br />
            +91 94470512231
          </div>
          <div className="flex justify-center pb-6">
            Aditya Suryawanshi <br />
            +91 86683196471
          </div>
          <div className="flex justify-center pb-6">
            Polu Koushik Reddy <br />
            +91 63014029841
          </div>
        </div>
      </div>
      <div className="bg-black  text-white">
        <h1 className="p-8 flex justify-center">
          <img src="message.svg" className="w-[400px]" alt="message" />
        </h1>
        <div className="flex justify-center pb-6">
          <div className={styles.formfont}>
            <form action="">
              <input
                type="text"
                className="placeholder-black ps-2 text-black
                border-4 border-[#3967BF] border-r-8 border-b-8 mb-6 flex"
                placeholder="enter name"
              />
              <input
                type="text"
                className="placeholder-black ps-2 text-black
                border-4 border-[#3967BF] border-r-8 border-b-8 mb-6 flex"
                placeholder="enter name"
              />
              <input
                type="text"
                className="placeholder-black ps-2 pb-48 text-black
                border-4 border-[#3967BF] border-r-8 border-b-8 mb-6 flex"
                placeholder="enter name"
              />
              <div className="flex justify-center">
                <div className={styles.submitbg}>
                  <submit className="flex justify-center align-middle text-[#FFA400]">
                    submit
                  </submit>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
