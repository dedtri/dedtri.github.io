import React from 'react'
import './aboutme.css'
import pic1 from '../../assets/aboutpic.png'

const Aboutme = () => {
  return (
    <section id='about'>
      <h3>Hello :)</h3>
      <h2>Let me enlighten you with a few things about me.</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={pic1} alt=""/>
        </div>
        </div>
        <div className="about__content">
<div className="about__cards">
  <article className='about__card'>
    <h5>Experience</h5>
    <small>2+ Years Coding</small>
  </article>
</div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme