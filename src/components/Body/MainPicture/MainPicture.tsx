import React from 'react';
import './MainPicture.css';

const MainPicture = () => {
    return (
        <div className="main-picture-container">
            <img className="main-picture" src="front-page.jpeg"/>
            <div className="text-overlay">
                Full Stack Developer <br/>
                Pittsburgh, PA
            </div>
        </div>
    );
};

export default MainPicture;