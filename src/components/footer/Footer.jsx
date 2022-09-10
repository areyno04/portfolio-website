import React from 'react'
import './footer.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {IoLogoLinkedin} from 'react-icons/io'
import {SiGithub} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Antonio Reynoso</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/tony.reynoso" target="_blank"><FaInstagramSquare /></a>
        <a href="https://facebook.com/tony.reynoso.714" target="_blank"><FaFacebookF/></a>
        <a href="https://twitter.com/tony_reynoso3" target="_blank"><IoLogoTwitter/></a>
        <a href="https://github.com/areyno04" target="_blank"><SiGithub/></a>
        <a href="https://linkedin.com/in/antonio-reynoso-305092249/" target="_blank"><IoLogoLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer