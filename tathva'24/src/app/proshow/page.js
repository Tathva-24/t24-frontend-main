import React from 'react'
import Marquee from '../components/InnerPages/marquee/marquee_comp'

const Page = () => {
  return (
    <div className='w-screen overflow-x-clip '>
      <Marquee element1='proshow' element2='proshow' color1='#C0FF00' color2='black' />

    </div>
  )
}

export default Page
