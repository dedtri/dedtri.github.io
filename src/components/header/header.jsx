import React from 'react'
import './header.css'
import CTA from './CTA'
import avi from '../../assets/avi.png'
import Headersocials from './headersocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Martin The Khang Nguyen</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Headersocials />

        <div className='avi'>
        <img src={avi} alt=""></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header