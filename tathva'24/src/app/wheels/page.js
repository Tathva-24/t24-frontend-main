import React from 'react'
import InnerDescription from '../components/InnerDescription/InnerDescription'
import Marquee from '../components/marquee/marquee_comp'

const page = () => {
  return (
    <div>
        <Marquee element1={"RoboWars"} element2={"RoboWars"} color1={"red"} color2={"black"} />
        <div className="w-full p-10 ">
            <div className='desc '>

            </div>
            <InnerDescription  num="03" heading="About" text="Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!" />
        </div>
        {/* <ImageGrid /> */}
        
    </div>
  )
}

export default page
