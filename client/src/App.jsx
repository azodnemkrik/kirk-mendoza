import { useState, useEffect, useRef } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Site/Navigation';
import LogoHero from './components/Site/LogoHero';
import About from './components/Site/About';
import ThreeTabs from './components/Site/ThreeTabs';
import BrandCrawler from './components/Site/BrandCrawler';
import CaseStudies from './components/Site/CaseStudies';
import Contact from './components/Site/Contact';
import Modal from './components/Site/Modal';
import SampleBanners from './components/Site/SampleBanners';
import SampleVideos from './components/Site/SampleVIdeos';
import SampleDev from './components/Site/SampleDev';
import Footer from './components/Site/Footer';

function App() {

	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;
	const navRef = useRef(null);
	const [isFixed, setIsFixed] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const [modalSrc, setModalSrc] = useState(null);
	const [showScrubber, setShowScrubber] = useState(true);

	useEffect(() => {
		if (location.hash) {
			const el = document.querySelector(location.hash);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		}

		const handleScroll = () => {
			setIsFixed(window.scrollY > 30000);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);


	}, [location]);

	return (
		<>
		<Navigation ref={navRef} pathname={pathname} isFixed={isFixed} />
		<div className="wrapper">
			{/* <ThreeTabs id="about" onOpenModal={(content, src, shouldShowScrubber = true) => {
				setModalContent(content);
				setModalSrc(src);
				setShowScrubber(shouldShowScrubber);
				setIsModalOpen(true);
			}} /> */}
			<About id="about" onOpenModal={(content, src, shouldShowScrubber = true) => {
				setModalContent(content);
				setModalSrc(src);
				setShowScrubber(shouldShowScrubber);
				setIsModalOpen(true);
			}} />
			<SampleBanners id="banners" className="banners-BG" onOpenModal={(content, src, shouldShowScrubber = true) => {
				setModalContent(content);
				setModalSrc(src);
				setShowScrubber(shouldShowScrubber);
				setIsModalOpen(true);
			}} />
			<SampleVideos id="videos" className="videos-BG" onOpenModal={(content, src, shouldShowScrubber = true) => {
				setModalContent(content);
				setModalSrc(src);
				setShowScrubber(shouldShowScrubber);
				setIsModalOpen(true);
			}} />
			<SampleDev id="react" className="dev-BG" onOpenModal={(content, src, shouldShowScrubber = true) => {
				setModalContent(content);
				setModalSrc(src);
				setShowScrubber(shouldShowScrubber);
				setIsModalOpen(true);
			}} />
			<Contact id="contact" className="contact-BG" />
			<Footer />
		</div>

		<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} src={modalSrc} showScrubber={showScrubber}>
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
