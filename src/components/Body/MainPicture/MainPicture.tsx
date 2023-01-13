import React from 'react';
import './MainPicture.css';

interface MainPictureProps {
    displayEngText: boolean;
}

const MainPicture = ({displayEngText}: MainPictureProps) => {
    return (
        <div className="main-picture-container">
            <img className="main-picture" src="front-page.jpeg"/>
            <div className="text-overlay">
                {displayEngText ? 'Full Stack Developer' : 'ソフトウェア開発者'}<br/>
                {displayEngText ? 'Pittsburgh, PA' : 'ピッツバーグペンシルベニア州'}
            </div>
        </div>
    );
};

export default MainPicture;