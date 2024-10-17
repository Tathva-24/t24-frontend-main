import React from 'react'
import styles from "./TeamCard.module.css"

const des = {
  name: "IDK BRO",
  desig : "IDK EITHER"
}

const col = {
  "color1" : "#64CBCC",
  "color2" : "#AF05FF",
  "color3" : "#FF8C05"
}

function hexToRgba(hex, alpha = 1) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse the r, g, b values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Return the RGBA color string
  return `rgba(${r},${g},${b},${alpha})`;
}
const TeamCard = ({details = des,color,className}) => {
  const bg = col[color];
  console.log(bg);
  return (
    <div className={`flex ${styles[color]} justify-center items-center TeamCard h-[38vh] w-[30vh] rounded shadow-[0_0_10px_5px_${hexToRgba(bg,0.2)}] ${className}`}>
        <div className={`h-[98%] w-[98%] bg-white flex justify-center items-center rounded`}> 
          <div className="bg-black h-[98%] w-[98%] rounded p-4 flex flex-col justify-between">
            <div className="photo bg-black-500 w-[100%] h-[50%] rounded flex justify-between">
              <div className='w-[70%] h-full bg-white'>imgplaceholder</div>
              <div className='socials flex flex-col justify-around'>
                <img src="/team/instagram.png" className='w-auto h-[30%]'/>
                <img src="/team/linkedin.png" className='w-auto h-[30%]'/>
              </div>
            </div>
            <div className="text-xl font-jakarta font-bold uppercase tracking-wide bg-white rounded w-[100%] h-[20%] flex justify-center items-center p-2 shadow-[inset_0_0_10px_5px_rgba(0,0,0,0.3)]">
              {details.name}
            </div>
            <div className="text-xl tracking-wide font-jakarta uppercase font-bold bg-white rounded w-[100%] h-[20%] flex justify-center items-center p-2 shadow-[inset_0_0_10px_5px_rgba(0,0,0,0.3)]">
              {details.desig}
            </div>
          </div>
        </div>
    </div>
  )
}

export default TeamCard