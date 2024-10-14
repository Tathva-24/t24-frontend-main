import React from 'react'

const FooterDesktop = () => {
  return (
    <div className='w-full h-[75vh] absolute bottom-0 overflow-x-hidden'>
        <div className="bg-[#313234] h-full w-full rounded-t-3xl relative">
            <img src="/screw.svg" alt="My Icon" className="h-10 object-fit z-5 absolute bottom-4 right-5" />
            <img src="/screw.svg" alt="My Icon" className="h-10 object-fit z-5 absolute bottom-4 left-5 " />
            <img src="/screw.svg" alt="My Icon" className="h-10 object-fit z-5 absolute top-4 right-4" />
            <img src="/screw.svg" alt="My Icon" className="h-10 object-fit z-5 absolute top-4 left-5" />

            <img
            src="/upper1.svg"
            alt="My Icon"
            className="w-[20%] object-fit z-[-6] absolute top-[-5%] right-0"
            />

            <img
            src="/upper2.svg"
            alt="My Icon"
            className="w-[20%] object-fit z-[-2] absolute top-[-5%]  left-0"
            />

            <div className=" h-[50%] aspect-square flex justify-between items-center border-l-[2px] border-b-[2px] rounded-bl-[100px] border-[#BCC3CB] absolute right-0 top-0">
                <div className="cont relative w-full h-full ]">
                    {/* <img src="/Footer/FooterSocialBack.webp"  alt="My Icon" className="absolute w-[141%]  aspect-square object-fit " /> */}

                    <div className="flex flex-col rotate-45 footer-console-right absolute left-[22%] top-[20%]">
                        <div className=" flex justify-center items-center">
                            <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2 ">
                                <a href="">
                                    <img src="/Footer/twitter.svg" alt="My Icon" className="h-20 w-20 object-fit" />
                                </a>
                            </div>
                            <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2 ">
                                <img src="/Footer/face.svg" alt="My Icon" className="h-20 w-20 object-fit" />
                            </div>
                        </div>

                        <div className=" flex justify-center items-center">
                            <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2 ">
                                <img src="/Footer/upBtn.svg" alt="My Icon" className="h-20 w-20 object-fit" />
                            </div>
                            <div className="flex -rotate-45 cursor-pointer hover:scale-95 p-2 ">
                                <img src="/Footer/insta.svg" alt="My Icon" className="h-20 w-20 object-fit" />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

            <img src="/metal.svg" alt="My Icon" className="h-[140px] object-fit origin-center absolute left-[50%] z-2 " />

            <div className=" w-[8%] flex flex-col items-center absolute -right-4 top-[50%]">
                <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
                <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
                <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
                <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
                <div className="bg-[#FF7A00] rounded-2xl h-[16px] w-[130px] my-[6px]"></div>
            </div>
          
        </div>
    </div>
  )
}

export default FooterDesktop
