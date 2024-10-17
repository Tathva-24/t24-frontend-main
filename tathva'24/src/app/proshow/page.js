import React from 'react'
import Marquee from '../components/InnerPages/marquee/marquee_comp'
import InnerDescription from '../components/InnerPages/InnerDescription/InnerDescription'
import ImageGrid from '../components/InnerPages/ImageGrid/ImageGrid';
import PrizesWorthBox from '../components/InnerPages/PrizesBox/PrizesWorthBox';

const page = () => {

  const desc = "Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!";

  const imgs = [ "/InnerPages/concert_green.webp","/InnerPages/drone_tesal.webp","/InnerPages/expopic.webp","/InnerPages/red_car.jpq" , "grid/arcade.jpg"]
  const names = ["Pro Show", "Drone Racing" , "Expo", "Red Car", "Arcade"]

  const date = "26-27th Oct"
  const venue = "Ground" ;

  const neon = "[#C0FF00]" ;



  return (
    <div className='h-min-screen w-screen flex flex-col justify-evenly items-center'>

      <div className='w-[90vw] md:h-[20vh] lg:h-[25vh] h-[10vh]  m-2 flex items-center justify-center'>
        <Marquee element1={"Proshow"} element2={"proshow"} color1={"#C0FF00"} color2={"#C0FF00"} />
      </div>

      <div className='w-[90vw] flex-col md:flex-row md:h-[35vh] h-min-[35vh] m-2 flex items-center justify-between'>
          <div className='w-full md:w-[34%] md:h-full h-[20vh]  '>
              <div className="relative flex justify-center items-center xl:mt-[2rem] lg:mt-[1rem] md:mt-[0.8rem] sm:mt-[0.7rem] mt-[0.6rem]">
                <img src="/left_top.jpeg"       alt="idk" className='absolute  top-0    left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
                <img src="/right_top.jpeg"      alt="idk" className='absolute  top-0    right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
                <img src="/right_bottom.jpeg"   alt="idk" className='absolute  bottom-0 right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
                <img src="/left_bottom.jpeg"    alt="idk" className='absolute  bottom-0 left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6'/>
                
                <div className={`prize flex flex-col justify-center py-[5%] px-[5%] z-0`}>
                    <div className="head  xl:text-[2.5rem] lg:text-[3rem] md:text-[2rem] text-[1rem] text-white flex justify-center border-b-2  font-pricedown">Register Now</div>
                    <div className="bod flex flex-col xl:py-4 lg:py-2 py-[10px] pb-0 text-white 2xl:text-[1.08rem] xl:text-[0.85rem] lg:text-[0.68rem] md:text-[0.7rem] text-[0.3rem] justify-between">
                        <div className="date">
                            <span className="font-presstart">{"Date:"}</span>
                            <span className={`font-presstart text-[#C0FF00]`}>{date}</span>
                        </div>
                        <div className="rt whitespace-normal flex justify-between">
                            <span className="venue font-presstart ">{"Venue: "} </span>
                            <span className={`place font-presstart text-right text-[#C0FF00] inline-block w-[60%]`}>{venue}</span>
                        </div>
                    </div>
                    {/* square boxes */}
                    <div className="flex justify-center space-x-1">
                        <div className="h-4 w-4 border-2 border-white"></div>
                        <div className="h-4 w-4 border-2 border-white"></div>
                    <div className="h-4 w-4 border-2 border-white"></div>
                    </div>
                </div>
              
              </div>
          </div>
          <div className='w-full md:w-[64%] md:h-full h-[30vh]  '>
            <div className='  h-full w-full p-2 rounded  '>
              <div className='w-[99%] h-full border-4 border-white rounded-2xl overflow-clip relative object-cover'><img src={'/grid/red_car.jpg'} className='object-cover absolute bottom-0 fill h-full w-full ' /></div>
            </div>
          </div>
      </div>

      <div className='w-[90vw] h-min-[55vh] h- flex-col md:flex-row-reverse  m-2 flex items-center justify-center'>
        <div className='md:w-[40%] w-full md:h-full h-[30vh] '><ImageGrid img1={imgs[0]} img2={imgs[1]} img3={imgs[2]} img4={imgs[4]} text1={names[0]} text2={names[1]} text3={names[2]} text4={names[4]}  /></div>
        <div className=' md:w-[70%] w-[90%] md:h-full h-[50vh] '><InnerDescription num={"03"} heading={"About"} text={desc} /></div>
        
      </div>
      
      
    </div>
  )
}

export default page
