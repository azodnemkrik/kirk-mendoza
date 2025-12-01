import { useState, useEffect, useRef } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Site/Navigation';
import LogoHero from './components/Site/LogoHero';
import About from './components/Site/About';
import WhatIDo from './components/Site/WhatIDo';

function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const navRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <Navigation ref={navRef} pathname={pathname} isFixed={isFixed} />
      <div className="wrapper">
        <About id="about-me"/>
        <WhatIDo/>
        <LogoHero/>
        <About id="case-studies"/>
        <LogoHero/>
        <WhatIDo id="what-i-do"/>
        <About />
        <LogoHero id="contact"/>
      </div>

      <Routes>
        <Route path="/" element={
          <>
          </>
        } />
      </Routes>
    </>
  )
}

export default App
