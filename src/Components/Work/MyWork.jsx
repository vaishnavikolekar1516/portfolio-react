import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ToDo from '../../assets/ToDo-app_img.png'
import EMS from '../../assets/EMS_Login.png'
import Dashboard from '../../assets/EMS_Dashboard.png'
import Portfolio from '../../assets/img_4.png'
import LMS from '../../assets/LMS.png'
import LMS_Dashboard from '../../assets/LMS_Dashboard.png'

const MyWork = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div id='work' className='work'>
        <div className='work-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt=''/>
        </div>

        <div className="work-container">
          <img src={Portfolio} onClick={() => setSelectedImg(Portfolio)}/>
          <img src={ToDo} onClick={() => setSelectedImg(ToDo)}/>
          {/* <img src={EMS} onClick={() => setSelectedImg(EMS)}/>
          <img src={Dashboard} onClick={() => setSelectedImg(Dashboard)}/> */}
          <img src={LMS} onClick={() => setSelectedImg(LMS)}/>
          <img src={LMS_Dashboard} onClick={() => setSelectedImg(LMS_Dashboard)}/>
        </div>
      
      {selectedImg && (
        <div className='image-modal'>

          <div className='modal-content'>
            <span className='close-btn' onClick={() => setSelectedImg(null)}>
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
