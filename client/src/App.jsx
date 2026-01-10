import { useState, useEffect, useRef, use } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Site/Navigation';
import About from './components/Site/About';
import Contact from './components/Site/Contact';
import Modal from './components/Site/Modal';
import SampleBanners from './components/Site/SampleBanners';
import SampleVideos from './components/Site/SampleVideos';
import SampleDev from './components/Site/SampleDev';
import Footer from './components/Site/Footer';
import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";

function App() {

	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;
	const navRef = useRef(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const [modalSrc, setModalSrc] = useState(null);
	const [showScrubber, setShowScrubber] = useState(true);

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		if (location.hash) {
			const el = document.querySelector(location.hash);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location]);

	useEffect(() => {
		const handleHashChange = () => {
			track("pageview", { hash: window.location.hash });
			console.log("Hash changed to:", window.location.hash);
		};
		window.addEventListener("hashchange", handleHashChange);
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	useEffect(() => {
		const sendHashPageview = () => {
			if (window.gtag) {
				window.gtag('config', 'G-3T7SKWRTEZ', {
					page_path: window.location.pathname + window.location.hash,
				});
			}
		};
		window.addEventListener('hashchange', sendHashPageview);
		// Optionally, send initial pageview with hash
		sendHashPageview();
		return () => {
			window.removeEventListener('hashchange', sendHashPageview);
		};
	}, []);

	return (
		<>
			<Navigation ref={navRef} pathname={pathname} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

			<div className="wrapper">

				<div id="spacer"></div>

				<About id="home" onOpenModal={(content, src, shouldShowScrubber = true) => {
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
				<Footer id="footer" onOpenModal={(content, src, shouldShowScrubber = true) => {
					setModalContent(content);
					setModalSrc(src);
					setShowScrubber(shouldShowScrubber);
					setIsModalOpen(true);
				}} />
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
			<Analytics />
		</>
	)
}

export default App
