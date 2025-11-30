import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Site/Navigation';
import LogoHero from './components/Site/LogoHero';
import About from './components/Site/About';
import WhatIDo from './components/Site/WhatIDo';

function App() {


  return (
    <>
      <Navigation />
      <div className="wrapper">
        <About id="about-me"/>
        <WhatIDo id="what-i-do"/>
        <About id="case-studies"/>
        <LogoHero id="contact"/>
      </div>
    </>
  )
}

export default App
