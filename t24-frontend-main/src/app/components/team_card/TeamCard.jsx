import React from 'react'
import styles from "./TeamCard.module.css"
import Link from 'next/link'



const col = {
  "color1" : "shadow-[0_0_10px_5px_rgba(100,203,204,0.3)]",
  "color2" : "shadow-[0_0_10px_5px_rgba(175,5,255,0.3)]",
  "color3" : "shadow-[0_0_10px_5px_rgba(255,140,5,0.3)]"
}


const TeamCard = ({details,color,className}) => {
  const bg = col[color];
  return ( 
    <div className={`${styles.c1} w-[100vw] h-[60vh] sm:w-[18vw] sm:h-[20vw] m-10`}>
        <img src={details.img} className='aspect-square overflow-clip w-[60%] h-[60%]'/>
    </div>
  )
}

export default TeamCard