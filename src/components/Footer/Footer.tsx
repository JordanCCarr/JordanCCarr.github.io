import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icon-wrapper">
                <a href="https://www.instagram.com/nihongo_jordy/" target="_blank">
                    <img className="footer-icon" src="instagram.png"/>
                </a>
            </div>
            <div className="footer-icon-wrapper">
                <a href="https://github.com/JordanCCarr" target="_blank">
                    <img className="footer-icon" src="github.png"/>
                </a>
            </div>
            <div className="footer-icon-wrapper">
                <a href="https://www.linkedin.com/in/jordan-c-carr/" target="_blank">
                    <img className="footer-icon" src="linkedin.png"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;