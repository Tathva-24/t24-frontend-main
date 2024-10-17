import React from 'react'
import Marquee from '../components/InnerPages/marquee/marquee_comp'

const page = () => {
  return (
    <div className='h-min-screen w-screen flex flex-col items-center'>
      <div className='w-[90vw] md:h-[35vh] h-[35vh] bg-blue-400 m-2 flex items-center justify-center'>

      </div>
      <div className='w-[90vw] md:h-[45vh] h-[55vh] bg-blue-400 m-2 flex items-center justify-center'></div>
      <div className='w-[90vw] md:h-[20vh] lg:h-[25vh] h-[10vh] bg-blue-400 m-2 flex items-center justify-center'>
        <Marquee element1={"Proshow"} element2={"proshow"} color1={"#C0FF00"} color2={"#C0FF00"} />
      </div>
      
    </div>
  )
}

export default page
