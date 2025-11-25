import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Site/Navigation';
import LogoHero from './components/Site/LogoHero';
import About from './components/Site/About';

function App() {


  return (
    <div className="wrapper">
      {/* <Navigation /> */}
      <LogoHero />
      <About />
    </div>
  )
}

export default App
