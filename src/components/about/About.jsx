import React from 'react'
import './about.css'
import ME from '../../ProjPitems/running.jpg'
import {GiWarPick} from 'react-icons/gi'
import {FaGraduationCap} from 'react-icons/fa'
import {GiRunningShoe} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiWarPick className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <FaGraduationCap className="about__icon"/>
              <h5>Education</h5>
              <small>Bachelors Degree in Physics</small>
            </article>
            
            <article className='about__card'>
              <GiRunningShoe className="about__icon"/>
              <h5>Hobbies</h5>
              <small>Programmer, Musician, Track and Field Athlete</small>
            </article>
          </div>

          <p>
            Through my time studying physics, computational coding was a necessity for solving complex problems 
            otherwise impossible to do on paper (i.e. questions with too much data or those that would take too 
            long to do by hand). Through this experience, I found a love for coding and started learning about the 
            front and back end side of software developing on my own time.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About