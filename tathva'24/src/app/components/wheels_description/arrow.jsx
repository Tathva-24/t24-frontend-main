import React from "react";

const Arrow = () => {
    return (
            <svg
                className={`transition-transform duration-300 group-hover:rotate-[-33deg] group-hover:scale-110 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
                width="100%"  
                height="100%" 
                viewBox="0 0 61 54" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    fill="#000"
                    d="M.211 22.412h8v8h-8zM11.211 22.412h8v8h-8zM22.211 22.412h8v8h-8zM33.211 22.412h8v8h-8zM52.211 22.412h8v8h-8zM31.875.412l20.422 20.464-5.662 5.65L26.212 6.064zM52.226 33.036l-20.324 20.56-5.69-5.623 20.324-20.561z"
                />
            </svg>
    )
}

export default Arrow;