import React from 'react'
import Marquee from '../components/InnerPages/marquee/marquee_comp'

const page = () => {
  return (
    <div className='w-screen h-screen '>
      <Marquee element1={"Auto"} element2={"Summit"} color1={"#B70202"} color2={""} />
    </div>
  )
}

export default page
