import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img1 from '../../assets/profile_img1.png'
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <div id='about' className='about'>

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
            <p>I’m a MERN Stack Developer with a passion for creating modern, responsive, and user-friendly web applications. I specialize in MongoDB, Express.js, React, and Node.js, building full-stack solutions that are scalable, efficient, and visually appealing.</p>

            <p>I love turning ideas into real products—from designing intuitive interfaces to implementing robust backend systems. Writing clean, maintainable code, optimizing performance, and ensuring smooth user experiences are at the core of everything I build.</p>

            <p>I enjoy learning new technologies, experimenting with innovative tools, and staying updated with the latest trends in web development. Over the years, I’ve worked on projects ranging from personal portfolio websites to full-fledged web applications, always aiming to solve real-world problems and create meaningful digital experiences. 💻</p>

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