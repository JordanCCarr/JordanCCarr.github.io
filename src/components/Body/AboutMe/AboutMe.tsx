import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-wrapper">
            <div className="about-text">
                <p>I'm a software developer, minimalist, and lifelong fitness enthusiast.</p>
                <p>My technical capabilties include both backend and frontend development. <a href="https://github.com/JordanCCarr/JordanCCarr.github.io">I even wrote this website myself!</a></p>
                <p>Since graduating from the University of Pittsburgh in 2018 I have been a full time software developer. When not coding
                    you can find me outside enjoying nature, preparing for my next marathon, or enjoying the sights and sounds that travel has to offer.
                </p>
                <p>
                    My personal beliefs are rooted in the idea that less is more: a life with less is a life more fulfilled. To clear away the clutter,
                    both literally and figuratively, leaves room for only what we deem essential.
                </p>
            </div>
            <img className="about-img" src="hiking.jpeg" />
        </div>
    );
};

export default AboutMe;