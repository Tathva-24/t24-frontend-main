import React from 'react'

const CentreConsole = () => {
  return (
    <div className='w-full h-full '>
      <div className="relative w-full h-min z-20 ">
        <img src="/Hero/center.webp"
                alt="Center image"
                className='hero-center absolute origin-center '
            />

        <div className="absolute top-[20%] w-full flex items-center justify-center z-30">
            <div className="relative  w-[64%] ">
                <img src="/Hero/moreblack.gif" alt="" className=' mix-blend-multiply w-full '/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CentreConsole
