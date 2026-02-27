import React from 'react'
import './Hero.css'
import profile_img3 from '../../assets/profile_img3.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img3} alt='Profile Img'/>
      <h1 className='hero-title'>
        <span className='hero-name'>I'm Vaishnavi Kolekar,</span>
      <br/>
       MERN Stack Developer based in Maharashtra.</h1>
      <p>I am a MERN Stack Developer passionate about building responsive, user-friendly, and efficient web applications. I enjoy turning ideas into real digital solutions and continuously improving my skills in full-stack development.</p>
    <div className='hero-action'>
      <a href='https://www.linkedin.com/in/Vaishnavi-kolekar-998931367'
      target='_blank'
      rel='noopener noreferrer'
      className='hero-connect'
      >
        🌐Connect with me
      </a>
     <a href='/Vaishnavi_Kolekar.pdf' 
     target='_blank' 
     rel='noopener noreferrer' 
     className='hero-resume'
     >
      📄My resume
      </a>
    </div>
    </div>
  )
}

export default Hero
