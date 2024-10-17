import React from 'react'
import Marquee from '../components/InnerPages/marquee/marquee_comp'
import Arrow from '../components/InnerPages/InnerDescription/arrow';

const page = () => {


  const desc = "Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!";


  return (
    <div className='w-full h-max overflow-x-clip  '>
      <div className='h-screen'>
        <div className='w-full h-[15%] lg:h-[20%] flex justify-between items-center p-2 '>
          <div className='m-2 h-full w-full p-2 rounded  '>
            <Marquee element1={"automative "} element2={"summit "} color1={"#b70202"} color2={"#0a0a00"} />
          </div>
        </div>

        {/* desktop */}
        <div className='w-full hidden h-[40%] lg:flex justify-between items-center p-2 '>
          <div className='m-2 h-full w-[34%] p-2 rounded flex flex-col justify-between items-center '>
            <div className='w-full h-[49%] m-1 flex justify-between' >
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
            </div>
            <div className='w-full h-[49%] m-1 flex justify-between' >
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
            </div>
          </div>
          <div className='m-2  h-full w-[64%] p-2 rounded  '>
            <div className='w-[99%] h-full border-4 border-white rounded-2xl overflow-clip'><img src={'/grid/arcade.jpg'} className=' object-cover fill h-full w-full ' /></div>
          </div>
        </div>

        {/* Mobile */}
        <div className='w-full lg:hidden h-[50%] flex flex-col justify-between items-center p-2 '>

          <div className='m-2 h-[38%] w-full rounded flex items-center justify-center'>
            <div className='w-[99%] h-full border-4 border-white rounded-3xl overflow-clip'><img src={'/grid/arcade.jpg'} className=' object-cover fill h-full w-full ' /></div>
          </div>

          <div className='m-2  h-[58%] w-full rounded flex flex-col items-center justify-center'>
            <div className='w-full h-[49%] m-1 flex justify-between' >
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
            </div>
            <div className='w-full h-[49%] m-1 flex justify-between' >
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
              <div className='w-[49%] border-4 border-white rounded-2xl overflow-clip relative'> <p className='w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center '>Arcade</p> <img src={'/grid/expo.webp'} style={{ fontFamily: '"Pricedown", sans-serif' }} className=' object-cover fill h-full w-full ' /></div>
            </div>
          </div>

        </div>

        {/* Mobile */}
        <div className='w-full h-[35%] lg:hidden flex justify-between items-center p-2 '>
          <div className='m-2 bg-white h-full w-full p-2 rounded-2xl border-1 border-black flex flex-col justify-between items-center '>
            <div className='w-[90%] h-[19%] flex justify-between px-6 border-black border-b-[1px] '><p className='text-5xl'>03</p><p className='text-2xl'>About</p></div>
            <div className='w-[90%] h-[79%]  '>
              <p className='text-lg relative h-full  '>{desc}
              <span className='absolute bottom-0 right-0 h-[20%] m-4 aspect-square '><Arrow /></span>
                </p> 
               
            </div>
          </div>
        </div>

        <div className='w-full h-[40%] lg:flex hidden justify-between items-center p-2 '>
          <div className='m-2 bg-blue-400 h-full w-full p-2 rounded border-2 border-white  '></div>
        </div>
      </div>

    </div>
  )
}

export default page
