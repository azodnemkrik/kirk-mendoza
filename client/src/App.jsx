import { useState, useEffect, useRef } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Site/Navigation';
import LogoHero from './components/Site/LogoHero';
import About from './components/Site/About';
import StuffIDone from './components/Site/StuffIDone';
import BrandCrawler from './components/Site/BrandCrawler';
import CaseStudies from './components/Site/CaseStudies';
import ContactMe from './components/Site/ContactMe';
import Modal from './components/Site/Modal';

function App() {

	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;
	const navRef = useRef(null);
	const [isFixed, setIsFixed] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const [modalSrc, setModalSrc] = useState(null);

	useEffect(() => {
		if (location.hash) {
			const el = document.querySelector(location.hash);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
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
			<About id="about-me" />
			<StuffIDone id="stuff-i-done" onOpenModal={(content, src) => {
				setModalContent(content);
				setModalSrc(src);
				setIsModalOpen(true);
			}} />
			<CaseStudies id="case-studies" />
			<BrandCrawler />
			<ContactMe id="contact" />
		</div>

		<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} src={modalSrc}>
			{modalContent}
		</Modal>

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
