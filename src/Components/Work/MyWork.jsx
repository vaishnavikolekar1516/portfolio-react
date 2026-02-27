// import React, { useState } from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import ToDo from '../../assets/ToDo-app_img.png'
// import EMS from '../../assets/EMS_Login.png'
// import Dashboard from '../../assets/EMS_Dashboard.png'
// import Portfolio from '../../assets/img_4.png'
// import LMS from '../../assets/LMS.png'
// import LMS_Dashboard from '../../assets/LMS_Dashboard.png'

// const MyWork = () => {
//   const [selectedImg, setSelectedImg] = useState(null);

//   return (
//     <div id='work' className='work'>
//         <div className='work-title'>
//         <h1>My Latest Work</h1>
//         <img src={theme_pattern} alt=''/>
//         </div>

//         <div className="work-container">
//           <img src={Portfolio} onClick={() => setSelectedImg(Portfolio)}/>
//           <img src={ToDo} onClick={() => setSelectedImg(ToDo)}/>
//           {/* <img src={EMS} onClick={() => setSelectedImg(EMS)}/>
//           <img src={Dashboard} onClick={() => setSelectedImg(Dashboard)}/> */}
//           <img src={LMS} onClick={() => setSelectedImg(LMS)}/>
//           <img src={LMS_Dashboard} onClick={() => setSelectedImg(LMS_Dashboard)}/>
//         </div>
      
//       {selectedImg && (
//         <div className='image-modal'>

//           <div className='modal-content'>
//             <span className='close-btn' onClick={() => setSelectedImg(null)}>
//               ✖
//             </span>
//             <img src={selectedImg} alt='Zoomed work'/>
//           </div>
//           </div>
//       )}
//     </div>
//   )
// }

// export default MyWork


import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ToDo from '../../assets/ToDo-app_img.png'
import Portfolio from '../../assets/img_4.png'
import LMS from '../../assets/LMS.png'
import LMS_Dashboard from '../../assets/LMS_Dashboard.png'

const MyWork = () => {

  const [selectedImg, setSelectedImg] = useState(null)

  const projects = [
    {
      img: Portfolio,
      title: "Portfolio Website",
      tech: "React • CSS • Responsive",
      live: "https://portfolio-react-iota-seven-97.vercel.app/",
      github: "https://github.com/YOUR_GITHUB_LINK"
    },
    {
      img: ToDo,
      title: "To Do App",
      tech: "React • LocalStorage",
      live: "#",
      github: "#"
    },
    {
      img: LMS,
      title: "LMS System",
      tech: "MERN Stack",
      live: "#",
      github: "#"
    },
    {
      img: LMS_Dashboard,
      title: "LMS Dashboard",
      tech: "React • Dashboard UI",
      live: "#",
      github: "#"
    }
  ]

  return (
    <div id='work' className='work'>

      <div className='work-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt=''/>
      </div>

      <div className="work-container">

        {projects.map((project,index)=>(
          <div className="project-card" key={index}>

            <img
              src={project.img}
              alt={project.title}
              onClick={() => setSelectedImg(project.img)}
            />

            <h3>{project.title}</h3>

            <p className="project-tech">
              {project.tech}
            </p>

            <div className="project-buttons">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>
        ))}

      </div>

      {selectedImg && (
        <div className='image-modal'>

          <div className='modal-content'>

            <span
              className='close-btn'
              onClick={() => setSelectedImg(null)}
            >
              ✖
            </span>

            <img src={selectedImg} alt='Zoomed work'/>

          </div>

        </div>
      )}

    </div>
  )
}

export default MyWork