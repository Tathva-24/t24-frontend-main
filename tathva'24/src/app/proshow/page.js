import React from 'react'
import Marquee from '../components/InnerPages/marquee/marquee_comp'
import InnerDescription from '../components/InnerPages/InnerDescription/InnerDescription'

const page = () => {

  const desc = "Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!";


  return (
    <div className='h-min-screen w-screen flex flex-col items-center'>
      <div className='w-[90vw] md:h-[35vh] h-[35vh] bg-blue-400 m-2 flex items-center justify-center'>

      </div>
      <div className='w-[90vw] md:h-[45vh] h-[55vh] bg-blue-400 m-2 flex items-center justify-center'>
        {/* <div className='w-[40%] h-full '></div> */}
        <div className='w-[90%] h-full '><InnerDescription num={"03"} heading={"About"} text={desc} /></div>
        
      </div>
      <div className='w-[90vw] md:h-[20vh] lg:h-[25vh] h-[10vh] bg-blue-400 m-2 flex items-center justify-center'>
        <Marquee element1={"Proshow"} element2={"proshow"} color1={"#C0FF00"} color2={"#C0FF00"} />
      </div>
      
    </div>
  )
}

export default page
