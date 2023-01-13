import { element } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../../../util/useOnScreen';
import './CompanyBanner.css';

interface CompanyBannerProps {
    displayEngText: boolean;
}

const CompanyBanner = ({displayEngText}:CompanyBannerProps) => {
    const logoRef = useRef() as React.MutableRefObject<HTMLImageElement>;
    const bannerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const techRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const companyIsVisible = useOnScreen(bannerRef);
    const techIsVisible = useOnScreen(techRef);

    const logoNames = ['java', 'js', 'react', 'redux', 'springboot', 'docker', 'python', 'ansible', 'postgres', 'c', 'c++'];

    const logoDivs = logoNames.map((logo) => {
        return (
            <div className="tech-logo">
                <img 
                    className="logo-png"
                    src={`${logo}.png`}
                    style={{
                        'animation': techIsVisible ? 'fade-in 2s' : '',
                        'opacity': techIsVisible ? 1 : 0,
                    }}
                />
            </div>
        )
    });
    return (
        <div className="company-banner-wrapper">
            {displayEngText ? 'Where I\'ve worked' : '働いた会社'}
            <div className="company-banner" ref={bannerRef}>
                <div className="company-logo">
                    <img
                        className="logo-png"
                        src='gdms-logo-blue.png' 
                        style={{'animation': companyIsVisible ? 'fade-in 2s' : ''}}
                    />
                </div>
                <div className="company-logo">
                    <img
                        className="logo-png"
                        src='confluence.png'
                        style={{'animation': companyIsVisible ? 'fade-in 2s' : ''}}
                    />
                </div>
            </div>
            {displayEngText ? 'What I\'ve worked with' : '使ったプログラミング言語とライブラリ'}
            <div className="tech-wrapper" ref={techRef}>
                {logoDivs}
            </div>
        </div>
    );
};

export default CompanyBanner;