import React from 'react'
import './nav.css'
import {RiHomeSmileFill} from 'react-icons/ri'
import {RiUser3Line} from 'react-icons/ri'
import {TbShovel} from 'react-icons/tb'
import {AiFillFolderOpen} from 'react-icons/ai'
import {TiContacts} from 'react-icons/ti'
import{useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeSmileFill /></a>
      <a href="#about" onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser3Line /></a>
      <a href="#experience" onClick={ () => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbShovel /></a>
      <a href="#portfolio" onClick={ () => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillFolderOpen /></a>
      <a href="#contact" onClick={ () => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
    </nav>
  )
}

export default Nav