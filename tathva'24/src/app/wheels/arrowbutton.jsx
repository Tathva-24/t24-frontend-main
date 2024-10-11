import React from "react";
import Arrow from "./arrow"

const ArrowBorder = ()=>{
    return (
        <div className="group relative">
            <div className="h-[110px] w-[150px] relative">
                {/* Top-left corner */}
                <svg
                    className="absolute top-0 left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="41"
                    fill="none"
                >
                    <path stroke="#000" strokeWidth=".6" d="m.712 40.911.003-29.5L11.213.912h30" />
                </svg>

                {/* Top-right corner */}
                <svg
                    className="absolute top-0 right-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="42"
                    fill="none"
                >
                    <path stroke="#000" strokeWidth=".6" d="M.212 1.092h28.97l10.544 10.455.125 30" />
                </svg>

                {/* Bottom-left corner */}
                <svg
                    className="absolute bottom-0 left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    fill="none"
                >
                    <path stroke="#000" strokeWidth=".6" d="M41.21 40.989H11.588L1.169 30.41v-30" />
                </svg>

                {/* Bottom-right corner */}
                <svg
                    className="absolute bottom-0 right-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="41"
                    fill="none"
                >
                    <path stroke="#000" strokeWidth=".6" d="m40.898.697-.17 28.97L30.21 40.147l-30-.05" />
                </svg>
            </div>
            <Arrow/>
        </div>
    )
}

export default ArrowBorder;