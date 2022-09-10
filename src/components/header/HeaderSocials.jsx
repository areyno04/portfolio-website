import React from 'react'
import {IoLogoLinkedin} from 'react-icons/io'
import {SiGithub} from 'react-icons/si'

const HeaderSocials= () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/antonio-reynoso-305092249/" target="_blank"> <IoLogoLinkedin size={'1.5em'}/> </a>
        <a href="https://github.com/areyno04" target="_blank"><SiGithub size={'1.5em'}/></a>
    </div>
  )
}

export default HeaderSocials
