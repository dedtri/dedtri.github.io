import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/dedtri" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/martin-nguyen-805ab4225/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.youtube.com/channel/UCwwlViVNzX4AQ3y3IKWZhmQ" target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default headersocials