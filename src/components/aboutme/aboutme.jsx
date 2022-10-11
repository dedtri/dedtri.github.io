import React from 'react'
import './aboutme.css'
import pic1 from '../../assets/aboutpic.png'
import {IoBookSharp} from 'react-icons/io5'
import {FaCameraRetro} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaBirthdayCake} from 'react-icons/fa'
import {GiCardJoker} from 'react-icons/gi'
import {FaStar} from 'react-icons/fa'
import {GiPublicSpeaker} from 'react-icons/gi'
import {GiRetroController} from 'react-icons/gi'

const Aboutme = () => {
  return (
    <section id='about'>
      <h2>A little about me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={pic1} alt=""/>
        </div>
        </div>
        <div className="about__content">
<div className="about__cards">
  <div className='about__card' id='card__2' >
    <IoBookSharp className='about__icon'/>
    <h5>Experience</h5>
    <small>2+ Years Coding</small>
  </div>
  <div className='about__card' id='card__1'>
    <FaCameraRetro className='about__icon'/>
    <h5>Secondary skills</h5>
    <small>Video and Photo Editing</small>
  </div>
  <article className='about__card' id='card__3'>
    <FaFolderOpen className='about__icon'/>
    <h5>Projects</h5>
    <small>25+ Completed</small>
  </article>
  <article className='about__card' id='card__4'>
    <FaMapMarkerAlt className='about__icon'/>
    <h5>Location</h5>
    <small>Denmark</small>
  </article>
  <article className='about__card'>
    <FaBirthdayCake className='about__icon'/>
    <h5>Age</h5>
    <small>27</small>
  </article>
  <article className='about__card'>
    <GiPublicSpeaker className='about__icon'/>
    <h5>Languages</h5>
    <small>Fluent Danish & English</small>
  </article>
  <article className='about__card'>
    <GiRetroController className='about__icon'/>
    <h5>Main Hobby</h5>
    <small>Gaming</small>
  </article>
    <article className='about__card'>
    <FaStar className='about__icon'/>
    <h5>Nationality</h5>
    <small>Vietnam</small>
  </article>
  <article className='about__card'>
    <GiCardJoker className='about__icon'/>
    <h5>Fun Fact</h5>
    <small>Fast as F***</small>
  </article>
</div>



        </div>
      </div>
    </section>
  )
}

export default Aboutme