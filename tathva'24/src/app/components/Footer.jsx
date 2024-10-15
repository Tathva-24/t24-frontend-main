import React from 'react'
import FooterDesktop from './FooterDesktop/FooterDesktop'
import FooterMobile from './FooterMobile/FooterMobile'

const Footer = () => {
  return (
    <div className='w-full h-max'>
      <FooterDesktop    />
      <FooterMobile />
    </div>
  )
}

export default Footer
