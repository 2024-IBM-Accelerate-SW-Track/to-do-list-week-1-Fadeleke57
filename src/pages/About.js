import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import me from '../assets/me.jpg'
import ibm from '../assets/ibm.svg'
  
export default class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className='about-header'>
          <img src={me} alt='farouk'></img>
          <div><h1><span style={{color:'#0f62fe'}}>Farouk</span> Adeleke</h1><small>CS @ Boston University</small></div>
        </div>
        <div className='about-grid-container'>
          <div style={{padding: '0'}}>
            <img src={ibm}></img>
          </div>
          <Link to={'https://www.linkedin.com/in/farouk-adeleke/'} target='blank'>
            <div>
              <h2>A Bit About Me</h2>
              <p>I am a rising junior at Boston University interested in all realms of technology, especially computer vision and workload automation. I love to meet new people and on my free time, I play soccer and run. I actually ran a half marathon in Rhode Island a month ago! </p>
            </div>            
          </Link>
          <div>
            <h2>Looking Foward to...</h2>
            <p>Networking</p>
            <p>Learning</p>
            <p>Expanding my Horizons</p>
            <p>Meeting Like-Minded People</p>
            <p style={{fontWeight: 'bold' }}>CODING!!!</p>
          </div>
        </div>
      </div>
    )
  }
}