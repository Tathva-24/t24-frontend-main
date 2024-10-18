import styles from "./FooterDesktop.module.css";
import Quicklink from "../QuixkLinks/QuickLinks";

const FooterDesktop = () => {
  return (
    <div className="flex flex-col justify-end h-full box-border  relative overflow-y-hidden">
      <div className={`${styles.foot_mob} rounded rounded-t-3xl`}>
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 object-fit z-5 absolute bottom-4 right-5"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 object-fit z-5 absolute bottom-4 left-5 "
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 object-fit z-5 absolute top-4 right-4"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-10 object-fit z-5 absolute top-4 left-5"
        />

        <img
          src="/upper1.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-6] absolute top-[-3%] right-0"
        />

        <img
          src="/upper2.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-2] absolute top-[-3%]  left-0"
        />

        <div className="flex flex-col ">
          <div className="flex w-[90vw] h-[15vh]  justify-end relative right-3 bottom-0 ">
            <img
              src="/metal.svg"
              alt="My Icon"
              className="h-[full] object-fit relative z-2 "
            />
          </div>

          <div className="flex">
            <div className="flex flex-col flex-1">
              <div className="h-[50%] border-b"></div>
              <div></div>
            </div>

            <div className="flex-[8] h-[80%] mt-[3vh] mr-[-1vw] relative z-[5]">
              <img
                src="/small_display.svg"
                alt="My Icon"
                className="h-115 object-fit"
              />
            </div>

            <div className="flex-grow flex-col flex-[1.5]">
              <div className="h-[50%] border-b"></div>
              <div></div>
            </div>
            <div className="flex-[4] flex border border-b-l-2xl border-t-0 border-r-0 justify-center items-center rounded-bl-3xl h-full pl-4 mb-4 pb-4">
              <img
                src="/speaker.svg"
                alt="My Icon"
                className="h-[11vh]  object-fit pb-2 "
              />
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex mt-6 max-h-44">
          <div className=" w-[79%] h-full flex ml-[7vw] mr-[4vw]">
            <Quicklink />
          </div>
          <div className={styles.button}>
            <img
              src="/buttons.svg"
              alt="My Icon"
              className="h-3/5 object-fit "
            />
          </div>
        </div>

        <div className="flex  max-h-44">
          <div className=" w-[47%]  flex justify-center items-center">
            <img
              src="/button.svg"
              alt="My Icon"
              className=" w-full h-4/5 object-fit "
            />
          </div>
          <div className=" w-[45%] flex justify-between items-center border-l-[1px] ">
            <img
              src="/social_buttons.svg"
              alt="My Icon"
              className=" w-full h-98 object-fit "
            />
          </div>
          <div className=" w-[8%] flex flex-col items-center relative">
            <div className="bg-orange-500 rounded-[10000px] h-[16px] w-[200px] my-[6px]"></div>
            <div className="bg-orange-500 rounded-[10000px] h-[16px] w-[200px] my-[6px]"></div>
            <div className="bg-orange-500 rounded-[10000px] h-[16px] w-[200px] my-[6px]"></div>
            <div className="bg-orange-500 rounded-[10000px] h-[16px] w-[200px] my-[6px]"></div>
            <div className="bg-orange-500 rounded-[10000px] h-[16px] w-[200px] my-[6px]"></div>
          </div>
        </div>

        <div className="flex justify-center mr-5 overflow-y-hidden">
          <div className="border-[1px] border-gray-200 rounded-tr-3xl rounded-tl-3xl w-1/3 h-full object-fit p-4 pt-3 border-b-0 ">
            <img
              src="/bottom.svg"
              alt="My Icon"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
