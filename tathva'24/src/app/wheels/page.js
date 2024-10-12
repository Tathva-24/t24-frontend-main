import React from 'react'
import InnerDescription from '../components/InnerDescription/InnerDescription'
import Marquee from '../components/marquee/marquee_comp'
import ImageGrid from '../components/ImageGrid/ImageGrid'

const page = () => {
  return (
    <div>
        <Marquee element1={"RoboWars"} element2={"RoboWars"} color1={"red"} color2={"black"} />
        <div className="w-full p-10 flex">
        <div className='desc w-full'>
            <div className='desc w-[60%]'>
                <InnerDescription  num="03" heading="About" text="Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!" />
                <ImageGrid />
            </div>    

        </div>
            
           
            
        </div>
        
    </div>
  )
}

export default page
