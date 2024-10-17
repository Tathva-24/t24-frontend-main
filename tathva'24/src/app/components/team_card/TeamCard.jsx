import React from 'react'
import styles from "./TeamCard.module.css"

const TeamCard = () => {
  return (
    <div className={`flex ${styles.inner1} justify-center items-center TeamCard bg-white h-[38vh] w-[30vh] rounded shadow-[0_0_20px_7px_rgba(0,170,255,0.8)]`}>
        <div className={`h-[98%] w-[98%] bg-white flex justify-center items-center rounded`}> 
          <div className="bg-black h-[98%] w-[98%] rounded p-4 flex flex-col justify-between">
            <div className="photo bg-black-500 w-[100%] h-[50%] rounded flex justify-between">
              <div className='w-[60%] h-full bg-white'>imgplaceholder</div>
              <div className='socials flex flex-col justify-between'>
                <img src="/team/instagram.png" className='w-auto h-[30%]'/>
                <img src="/team/linkedin.png" className='w-auto h-[30%]'/>
                <img src="/team/Group.jpg" className='w-auto h-[30%]'/>
              </div>
            </div>
            <div className="name bg-white rounded w-[100%] h-[20%] flex justify-normal items-center p-2 shadow-[inset_0_0_10px_5px_rgba(0,0,0,0.5)]">
              NAME
            </div>
            <div className="name bg-white rounded w-[100%] h-[20%] flex justify-normal items-center p-2 shadow-[inset_0_0_10px_5px_rgba(0,0,0,0.5)]">
              Nigga
            </div>
          </div>
        </div>
    </div>
  )
}

export default TeamCard