import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_img.png'
import user_icon from '../../assets/user_icon.svg'
import ComingSoon from '../Comingsoon/ComingSoon.jsx'; 
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react'

const Footer = () => {

    const[showModal, setShowModal]=useState(false);
    const[modalTitle, setModalTitle] = useState("");

    const handleOpen = (title)=>{
        setModalTitle(title);
        setShowModal(true);
    };

  return (
    <div className='footer container'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt=''/>
                <p>Creating meaningful and user-centric web experiences as a MERN Stack Developer — driven by curiosity, collaboration, and a passion for continuous growth.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Vaishnavi Kolekar. All rights reserved.</p>
            <div className="footer-bottom-right">
                {/* <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p> */}

            <p onClick={()=> handleOpen("Terms of Services")}>Term of Services</p>
            <p onClick={()=> handleOpen("Privacy Policy")}>Privacy Policy</p>
            <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
            </div>
        </div>

         {showModal && (
            <ComingSoon 
            title={modalTitle}
            onClose={()=> setShowModal(false)}/>
        )}

    </div>
  )
}

export default Footer
