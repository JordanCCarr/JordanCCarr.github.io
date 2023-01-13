import React from 'react';
import './AboutMe.css';

interface AboutMeProps {
    displayEngText: boolean;
}

const AboutMe = ({displayEngText}:AboutMeProps) => {
    return (
        <div className="about-me-wrapper">
            <div className="about-text">
                <p>{displayEngText ? 'I\'m a software developer, minimalist, and lifelong fitness enthusiast.' : 'こにちは。ソフトウェア開発者で、ミニマリストで、フィットネス愛好家です。'}</p>
                <p>{displayEngText ? 'My technical capabilties include both backend and frontend development.': 'ユーザーインタフェースのライブラリもサーバのライブラリで開発できます。'} <a href="https://github.com/JordanCCarr/JordanCCarr.github.io">{displayEngText ? 'I even wrote this website myself!': '自分でこのサイトを開発しましたよ。'}</a></p>
                <p>{displayEngText ? 'Since graduating from the University of Pittsburgh in 2018 I have been a full time software developer. When not coding　you can find me outside enjoying nature, preparing for my next marathon, learning about Japanese culture, or enjoying the sights and sounds that travel has to offer.': '2018にピッツバーグ大学を卒業後ソフトウェア開発者の仕事をしています。暇な時に森林浴することや日本の文化について習うことや旅行することやマラソンのためのトレーニングのことが好きです。'}
                </p>
                <p>
                    {displayEngText ? 'My personal beliefs are rooted in the idea that less is more: a life with less is a life more fulfilled. To clear away the clutter,　both literally and figuratively, leaves room for only what we deem essential.': '2018年ミニマリストになりました。'}
                </p>
            </div>
            <img className="about-img" src="hiking.jpeg" />
        </div>
    );
};

export default AboutMe;