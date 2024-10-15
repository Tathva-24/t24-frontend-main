import React from 'react';
import './PrizesWorthBox.css';

const PrizesWorthBox = ({date,venue}) => {
    return (
        <div className="relative xl:w-[550px] lg:w-[350px]">
            <div className={`prize flex flex-col justify-center py-8 px-8 xl:w-[500px] lg:w-[300px] z-0`}>
                <div className="head xl:text-5xl lg:text-2xl text-white flex justify-center border-b-2 xl:py-4 lg:py-2 font-pricedown">Prizes Worth</div>
                <div className="bod xl:py-4 lg:py-2 pb-0 text-white xl:text-[14px] lg:text-[7.59px] flex justify-between">
                    <div className="date">
                        <span className="font-presstart">Date:</span>
                        <span className="font-presstart" style={{ color: 'var(--neon)' }}>{date}</span>
                    </div>
                    <div className="rt whitespace-normal w-[44%] flex justify-between">
                        <span className="venue font-presstart w-[30%]">Venue:</span>
                        <span className="place font-presstart text-right inline-block w-[60%]" style={{ color: 'var(--neon)' }}>{venue}</span>
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
            <img src="/left_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] left-[00px] xl:w-20 xl:h-20 lg:w-10 lg:h-10' z-50/>
            <img src="/left_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] left-[00px] xl:w-20 xl:h-20 lg:w-10 lg:h-10' z-50/>
            <img src="/left_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] left-[00px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'z-50/>
            <img src="/left_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] left-[00px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'z-50/>
            <img src="/right_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/right_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/right_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/right_top.jpeg" alt="idk" className='absolute lg:top-[20px] xl:top-[0px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/right_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/right_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/right_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/right_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] xl:left-[440px] lg:left-[270px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/left_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] left-[0px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/left_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] left-[00px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/left_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] left-[00px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
            <img src="/left_bottom.jpeg" alt="idk" className='absolute xl:top-[150px] lg:top-[130px] left-[00px] xl:w-20 xl:h-20 lg:w-10 lg:h-10'/>
        </div>
    );
};

export default PrizesWorthBox;
