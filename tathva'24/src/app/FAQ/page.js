import React from 'react'
import Marquee from '../components/marquee/marquee_comp'

const page = () => {
  return (
    <div className='h-screen'>
      <Marquee color1={"red"} color2={"blue"} element1={"Hello"} element2={"NITC"} />
    </div>
  )
}

export default page
