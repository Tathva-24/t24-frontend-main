import React from 'react';
import './PrizesWorthBox.css';

const PrizesWorthBox = ({date,venue}) => {
    return (
        <div className={`prize flex flex-col justify-center py-8 px-8 w-[38%]`}>
            <div className="head text-5xl text-white flex justify-center border-b-2 py-8 font-pricedown">Prizes Worth</div>
            <div className="bod py-8 pb-0 text-white txt-2xl flex justify-between">
                <div className="date">
                    <span className="font-presstart">Date:</span>
                    <span className="font-presstart" style={{ color: 'var(--neon)' }}>{date}</span>
                </div>
                <div className="rt whitespace-normal w-[44%] flex justify-between">
                    <span className="venue font-presstart w-[30%]">Venue:</span>
                    <span className="place font-presstart text-right inline-block w-[60%]" style={{ color: 'var(--neon)' }}>{venue}</span>
                </div>
            </div>
            <div className="flex justify-center space-x-1">
                <div className="h-4 w-4 border-2 border-white"></div>
                <div className="h-4 w-4 border-2 border-white"></div>
                <div className="h-4 w-4 border-2 border-white"></div>
            </div>
        </div>
    );
};

export default PrizesWorthBox;
