import React from 'react'
import './portfolio.css'
// import port1 from '../../assets/port1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>

<h2>Werk Werk Werk</h2>
<h2>Portfolio</h2>

<div className="container portfolio__container">
  <article className='portfolio__item'>
    <div className="portfolio__item-image"></div>
    <h3>This is a portfolio item title</h3>
    <a href='https://github.com/' className='btn' target='_blank'>Git Hub</a>
    <a href='https://github.com/' className='btn btn-primary' target='_blank'>Live Project</a>

  </article>
</div>

    </section>
  )
}

export default Portfolio