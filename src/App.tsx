import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CompanyBanner from './components/Body/CompanyBanner/CompanyBanner';
import Contact from './components/Body/Contact/Contact';
import MainPicture from './components/Body/MainPicture/MainPicture';
import AboutMe from './components/Body/AboutMe/AboutMe';

function App() {
  const [displayEngText, setDisplayEngText] = useState(true);
  return (
    <div className="App">
      <Header displayEngText={displayEngText} onChange={() => { setDisplayEngText(!displayEngText)}}/>
      <MainPicture displayEngText={displayEngText}/>
      <AboutMe displayEngText={displayEngText}/>
      <CompanyBanner displayEngText={displayEngText}/>
      <Contact displayEngText={displayEngText}/>
      <Footer />
    </div>
  );
}

export default App;
