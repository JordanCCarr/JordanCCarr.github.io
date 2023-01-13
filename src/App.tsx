import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CompanyBanner from './components/Body/CompanyBanner/CompanyBanner';
import Contact from './components/Body/Contact/Contact';
import MainPicture from './components/Body/MainPicture/MainPicture';
import AboutMe from './components/Body/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPicture />
      <AboutMe />
      <CompanyBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
