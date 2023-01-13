import React from 'react';
import './Header.css';

interface HeaderProps {
    displayEngText: boolean;
    onChange: () => void;
}

const Header = ({displayEngText, onChange}: HeaderProps) => {
    const engText = 'Jordan Carr';
    const japText = 'ジョーダン•カー';
    return (
        <div className="header">
            <div className="name">{displayEngText ? engText : japText}</div>
            <div className="lang-change" onClick={() => onChange()}>{displayEngText ? '日本語': 'English'}</div>
        </div>
    );
};

export default Header;