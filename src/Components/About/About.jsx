import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img1 from '../../assets/profile_img1.png'
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <div id='about' className='about container'>

      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt='' />
      </div>

      <div className="about-sections">

        <div className="about-left">
          <img src={profile_img1} alt='profile'/>
        </div>

        <div className="about-right">

          <div className="about-para">
            <p>💻 I am a passionate MERN Stack Developer focused on building responsive, user-friendly, and performance-driven web applications. I enjoy translating ideas into real-world digital solutions using modern JavaScript frameworks and clean, maintainable code.</p>

            <p>My experience includes developing projects such as To-Do-App, portfolio websites, and EMS System applications — with emphasis on scalable architecture, secure APIs, and intuitive UI/UX.</p>

            <p>🚀 I am keen on opportunities where I can learn, collaborate, and contribute to impactful projects in full-stack web development.</p>
          </div>

          <div className="about-skills">

            <div className='about-heading'>
              <h2>FRONTEND</h2>
            </div>

            <div className="about-skill">
              <div className="skill-header">
                <p><FaHtml5 className="skill-icon html"/> HTML & CSS</p>
                <span>80%</span>
              </div>
              <hr style={{width:"80%"}}/>
            </div>

            <div className="about-skill">
              <div className="skill-header">
                <p><FaJsSquare className="skill-icon js"/> JavaScript</p>
                <span>70%</span>
              </div>
              <hr style={{width:"70%"}}/>
            </div>

            <div className="about-skill">
              <div className="skill-header">
                <p><FaReact className="skill-icon react"/> React JS</p>
                <span>65%</span>
              </div>
              <hr style={{width:"65%"}}/>
            </div>

            <div className='about-heading'>
              <h2>BACKEND</h2>
            </div>

            <div className="about-skill">
              <div className="skill-header">
                <p><SiMongodb className="skill-icon mongo"/> MongoDB</p>
                <span>50%</span>
              </div>
              <hr style={{width:"50%"}}/>
            </div>

            <div className="about-skill">
              <div className="skill-header">
                <p><SiExpress className="skill-icon express"/> Express JS</p>
                <span>50%</span>
              </div>
              <hr style={{width:"50%"}}/>
            </div>

            <div className="about-skill">
              <div className="skill-header">
                <p><FaNodeJs className="skill-icon node"/> Node JS</p>
                <span>50%</span>
              </div>
              <hr style={{width:"50%"}}/>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About