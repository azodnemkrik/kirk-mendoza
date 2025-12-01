import { useState, useEffect, useRef } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Site/Navigation';
import LogoHero from './components/Site/LogoHero';
import About from './components/Site/About';
import WhatIDo from './components/Site/WhatIDo';
import BrandCrawler from './components/Site/BrandCrawler';

function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const navRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if(location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth'});
    }

    const handleScroll = () => {
      setIsFixed(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);


  }, [location]);
  
  return (
    <>
      <Navigation ref={navRef} pathname={pathname} isFixed={isFixed} />
      <div className="wrapper">
        <About id="about-me"/>
        <BrandCrawler />
        <WhatIDo/>
        <LogoHero/>
        <About id="what-i-do"/>
        <BrandCrawler />
        <WhatIDo/>
        <LogoHero/>
        <About id="case-studies"/>
        <BrandCrawler />
        <WhatIDo/>
        <LogoHero/>
        <About id="contact"/>
        <BrandCrawler />
        <WhatIDo/>
        <LogoHero/>
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
