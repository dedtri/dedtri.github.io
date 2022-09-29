import React from 'react'
import './nav.css'
import {IoHomeSharp} from 'react-icons/io5'
import {FaUserTie} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {IoMailSharp} from 'react-icons/io5'
import {MdWork} from 'react-icons/md'
import {useState} from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
    {/* Here we use a useState from react to actively change classes based on boolean statement */}
    <a href="#" className={activeNav === '#' ? 'active' : ''}><IoHomeSharp/></a>
    <a href="#about" onClick={() => setActiveNav('#about')}><FaUserTie/></a>
    <a href="#experience"><FaBrain/></a>
    <a href="#portfolio"><MdWork/></a>
    <a href="#contact"><IoMailSharp/></a>
    </nav>
  )
}

export default nav