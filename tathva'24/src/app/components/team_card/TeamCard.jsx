import React from 'react'
import styles from "./TeamCard.module.css"
import Link from 'next/link'

const des = {
  name: "IDK BRO",
  desig : "IDK EITHER",
  inst : "https://www.google.com",
  linked : "https://www.linkedin.com"
}

const col = {
  "color1" : "shadow-[0_0_10px_5px_rgba(100,203,204,0.3)]",
  "color2" : "shadow-[0_0_10px_5px_rgba(175,5,255,0.3)]",
  "color3" : "shadow-[0_0_10px_5px_rgba(255,140,5,0.3)]"
}


const TeamCard = ({details = des,color,className}) => {
  const bg = col[color];
  return (
    <div className={`flex ${styles[color]} justify-center items-center TeamCard lg:h-[38vh] lg:w-[30vh] h-[30vh] w-[26vh] rounded ${bg} ${className}`}>
        <div className={`h-[98%] w-[98%] bg-white flex justify-center items-center rounded`}> 
          <div className="bg-black h-[98%] w-[98%] rounded p-4 flex flex-col justify-between">
            <div className="photo bg-black-500 w-[100%] h-[50%] rounded flex justify-between ">
              <div className='w-[70%] h-full bg-white rounded'>imgplaceholder</div>
              <div className='socials flex flex-col justify-around items-end'>
                <Link className='m-0 p-0 w-[60%]' href={`${details.inst}`}><img src="/team/instagram.png" className=''/></Link>
                <Link className='m-0 p-0 w-[60%]' href={`${details.linked}`}><img src="/team/linkedin.png" className=''/></Link>
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