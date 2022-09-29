import React from 'react'
import './nav.css'
import {IoHomeSharp} from 'react-icons/io5'
import {FaUserTie} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {IoMailSharp} from 'react-icons/io5'
import {MdWork} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activenav, setactivenav] = useState('#')
  return (
    <nav>
    {/* Here we use a useState from react to actively change classes based on boolean statement */}
    <a href="#" className={activenav === '#' ? 'active' : ''}><IoHomeSharp/></a>
    <a href="#about" onClick={() => setactivenav('#about')}><FaUserTie/></a>
    <a href="#experience"><FaBrain/></a>
    <a href="#portfolio"><MdWork/></a>
    <a href="#contact"><IoMailSharp/></a>
    </nav>
  )
}

export default Nav