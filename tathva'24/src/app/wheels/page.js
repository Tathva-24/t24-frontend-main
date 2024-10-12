import React from 'react'
import InnerDescription from '../components/InnerDescription/InnerDescription'
import Marquee from '../components/marquee/marquee_comp'
import ImageGrid from '../components/ImageGrid/ImageGrid'
import Button from '../components/RegisterButton/registerButton'
import DescGrid from '../components/DescGrid/DescGrid'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <DescGrid num="03"
                heading="About"
                text="Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!"
      />          
        {/* <Marquee element1={"auto"} element2={"summit"} color1={"red"} color2={"black"} />
        <div className='w-full px-10'>
          <Button colorOne={"#b60203"} colorTwo={"#f89fa4"} colorThree={"#ffffff"} ></Button>
        </div>
        <div className="w-full p-10 flex justify-between">
        <div className='desc w-[55%]'>
          <InnerDescription 
            num="03" 
            heading="About" 
            text="Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!" 
          />
        </div>    
        <div className='gridImg w-[40%] h-full mx-3'>
          <ImageGrid />
        </div>
      </div> */}
    </div>
  )
}

export default page
