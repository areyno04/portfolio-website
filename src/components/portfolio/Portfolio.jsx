import React from 'react'
import './portfolio.css'
import IMG1 from '../../ProjPitems/atoms.jpg'
import IMG2 from '../../ProjPitems/comingsoon.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Quantum State Probability Calculator</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/areyno04/Quantum-State-Probability-Calculator" className='btn' target='blank'>Github</a>
            <a href="https://areyno04.github.io/Quantum-State-Probability-Calculator/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>To Be Announced</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='blank'>Github</a>
            <a href="http://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>To Be Announced</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='blank'>Github</a>
            <a href="http://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>        
      </div>
    </section>
  )
}

export default Portfolio