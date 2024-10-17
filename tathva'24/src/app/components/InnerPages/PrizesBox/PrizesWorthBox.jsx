import React from 'react';

const PrizesWorthBox = ({text,date,venue,neon}) => {
    return (
        <div className="relative flex justify-center items-center xl:mt-[2rem] lg:mt-[1rem] md:mt-[0.8rem] sm:mt-[0.7rem] mt-[0.6rem]">
            <img src="/left_top.jpeg"       alt="idk" className='absolute  top-0    left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
            <img src="/right_top.jpeg"      alt="idk" className='absolute  top-0    right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
            <img src="/right_bottom.jpeg"   alt="idk" className='absolute  bottom-0 right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
            <img src="/left_bottom.jpeg"    alt="idk" className='absolute  bottom-0 left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
            
            <div className={`prize flex flex-col justify-center py-[5%] px-[5%] z-0`}>
                <div className="head  xl:text-[2.5rem] lg:text-[3rem] md:text-[2rem] text-[1rem] text-white flex justify-center border-b-2  font-pricedown">Prizes Worth</div>
                <div className="bod xl:py-4 lg:py-2 py-[10px] pb-0 text-white 2xl:text-[1.08rem] xl:text-[0.85rem] lg:text-[0.68rem] md:text-[0.7rem] text-[0.3rem] flex justify-between">
                    <div className="date">
                        <span className="font-presstart">Date:</span>
                        <span className={`font-presstart text-${neon}`}>{date}</span>
                    </div>
                    <div className="rt whitespace-normal w-[44%] flex justify-between">
                        <span className="venue font-presstart w-[30%]">Venue:</span>
                        <span className={`place font-presstart text-right text-${neon} inline-block w-[60%]`}>{venue}</span>
                    </div>
                </div>
                {/* square boxes */}
                <div className="flex justify-center space-x-1">
                    <div className="h-4 w-4 border-2 border-white"></div>
                    <div className="h-4 w-4 border-2 border-white"></div>
                <div className="h-4 w-4 border-2 border-white"></div>
                </div>
            </div>
            {/* Corner images */}
           
        </div>
    );
};

export default PrizesWorthBox;