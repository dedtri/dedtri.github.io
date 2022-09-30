import React from 'react'
import './nav.css'
import {IoHomeSharp} from 'react-icons/io5'
import {FaUserTie} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {IoMailSharp} from 'react-icons/io5'
import {MdWork} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
    {/* Here we use a useState from react to actively change classes based on boolean statement
        onClick helps set the ActiveNav to another useState which we can then use the same statement to change the 
        active state.
        */}
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeSharp/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBrain/></a>
    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWork/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMailSharp/></a>
    </nav>
  )
}

export default Nav