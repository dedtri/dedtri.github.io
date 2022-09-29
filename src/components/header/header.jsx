import React from 'react'
import './header.css'
import CTA from './CTA'
import avi from '../../assets/avi.png'
import Headersocials from './headersocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2></h2>
        <h1>Martin The Khang Nguyen</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <CTA />
        <Headersocials />

        <div className='avi'>
        <img src={avi} alt=""></img>
        </div>

        <a href='#contact' className='scroll__down'>Surprise Me!</a>


      </div>
    </header>
  )
}

export default header