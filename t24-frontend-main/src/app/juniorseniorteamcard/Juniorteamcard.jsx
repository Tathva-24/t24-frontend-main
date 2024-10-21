import React from 'react'
import styles from "./Juniorteamcard.module.css"
import Link from 'next/link'



const col = {
  "color1" : "shadow-[0_0_10px_5px_rgba(100,203,204,0.3)]",
  "color2" : "shadow-[0_0_10px_5px_rgba(175,5,255,0.3)]",
  "color3" : "shadow-[0_0_10px_5px_rgba(255,140,5,0.3)]"
}


const Juniorteamcard = ({details,color,className}) => {
  const bg = col[color];
  return (
    <div className={`${styles.c1} w-[18vw] h-[20vw] m-10`}>
        
    </div>
  )
}

export default Juniorteamcard