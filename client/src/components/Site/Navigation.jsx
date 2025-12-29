import { Link } from "react-router-dom"
import { useEffect, useRef, forwardRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { SplitText } from "gsap/dist/SplitText";
import LogoHero from "./LogoHero";
import HamburgerMenu from "../HamburgerMenu";
import React_Icon from "../React_Icon";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, SplitText);

const navTL = gsap.timeline();

const Navigation = forwardRef(({ id, className, pathname , menuIsOpen, setMenuIsOpen }, ref) => {
	// List of section IDs in scroll order
	const sectionIds = ["home", "banners", "videos", "react", "contact"];
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			// Find the section currently in view
			let found = false;
			for (const id of sectionIds) {
				const el = document.getElementById(id);
				if (el) {
					const rect = el.getBoundingClientRect();
					// Adjust offset as needed (e.g., for fixed nav height)
					if (rect.top <= 180 && rect.bottom > 180) {
						if (activeSection !== id) {
							setActiveSection(id);
							if (window.location.hash !== `#${id}`) {
								window.history.replaceState(null, "", `#${id}`);
							}
						}
						found = true;
						break;
					}
				}
			}
			if (!found && activeSection !== "") {
				setActiveSection("");
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		// Run on mount in case already scrolled
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [activeSection]);

	const internalRef = useRef(null);

	useEffect(() => {
		// Timeline initialized but no animations currently active
		navTL.add("frame1");
	})

	const handleMenuToggle = () => {
		setMenuIsOpen(prev => !prev);
		// console.log("menuIsOpen", menuIsOpen);
	}

	const handlePathnameChange = ( myHash ) => {
		//  Close mobile menu when pathname changes
		if (menuIsOpen) {
			setMenuIsOpen(false);
		}
		window.location.hash = myHash
		console.log("pathname changed:", pathname);
	}

	const onScroll = (e) => {
		// console.log("scrolling", e);
	}


	return (
		<div id={id} className={className} ref={ref || internalRef} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>

			<div className={"float navigation-mobile " + (menuIsOpen ? "showMobileMenu" : "hideMobileMenu")}>
				<ul className={"navigation-bar-mobile "}>

					<li onClick={() => handlePathnameChange('#home')} className={`link-home ${location.hash === '#home' ? 'active' : ''}`}>
						<div className={`container ${location.hash === '#home' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#home' ? 'active' : ''}`}>home</span><span className={`linkLabel ${location.hash === '#home' ? 'active' :""}`}>Home</span></div>
					</li>

					<li onClick={() => handlePathnameChange('#banners')} className={`link-banners ${location.hash === '#banners' ? 'active' : ''}`}>
						<div className={`container ${location.hash === '#banners' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#banners' ? 'active' : ''}`}>image_inset</span><span className={`linkLabel ${location.hash === '#banners' ? 'active' :""}`}>Banners</span></div>
					</li>

					<li onClick={() => { handlePathnameChange('#videos') }} className={`link-videos ${location.hash === '#videos' ? 'active' : ''}`} >
						<div className={`container ${location.hash === '#videos' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#videos' ? 'active' : ''}`}>live_tv</span><span className={`linkLabel ${location.hash === '#videos' ? 'active' :""}`}>Videos</span></div>
					</li>
					<li onClick={() => { handlePathnameChange('#react') }} className={`link-react ${location.hash === '#react' ? 'active' : ''}`} >
						<div className={`container ${location.hash === '#react' ? 'active' : ''}`} ><React_Icon className={`icon-react ${location.hash === '#react' ? 'active' : ''}`} /><span className={`linkLabel ${location.hash === '#react' ? 'active' :""}`}>React</span></div>
					</li>
					<li onClick={() => { handlePathnameChange('#contact') }} className={`link-contact ${location.hash === '#contact' ? 'active' : ''}`} >
						<div className={`container ${location.hash === '#contact' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#contact' ? 'active' : ''}`}>mail</span><span className={`linkLabel ${location.hash === '#contact' ? 'active' :""}`}>Contact</span></div>
					</li>
				</ul>
			</div>


			<div id="navigation" className="centered-container navigation">
				<div className="nav-splitter">
					<div className="nav-left">
						{/* <img src="/km-insignia.svg" alt="Kirk Mendoza Logo Insignia" className="logo-insignia" /> */}
						<LogoHero className="heroLogo" />
					</div>
					<ul className="nav-right navigation-bar">
						<li onClick={() => { handlePathnameChange('#home') }}  className={`link-home ${location.hash === '#home' ? 'active' : ''}`}>
							<div className={`container ${location.hash === '#home' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#home' ? 'active' : ''}`}>home</span><span className={`linkLabel ${location.hash === '#home' ? 'active' :""}`}>Home</span></div>
						</li>
						<li onClick={() => { handlePathnameChange('#banners') }} className={`link-banners ${location.hash === '#banners' ? 'active' : ''}`}>
							<div className={`container ${location.hash === '#banners' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#banners' ? 'active' : ''}`}>image_inset</span><span className={`linkLabel ${location.hash === '#banners' ? 'active' :""}`}>Banners</span></div>
						</li>
						<li onClick={() => { handlePathnameChange('#videos') }} className={`link-videos ${location.hash === '#videos' ? 'active' : ''}`}>
							<div className={`container ${location.hash === '#videos' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#videos' ? 'active' : ''}`}>live_tv</span><span className={`linkLabel ${location.hash === '#videos' ? 'active' :""}`}>Videos</span></div>
						</li>
						<li onClick={() => { handlePathnameChange('#react') }} className={`link-react ${location.hash === '#react' ? 'active' : ''}`}>
							<div className={`container ${location.hash === '#react' ? 'active' : ''}`} ><React_Icon className={`icon-react ${location.hash === '#react' ? 'active' : ''}`} /><span className={`linkLabel ${location.hash === '#react' ? 'active' :""}`}>React</span></div>
						</li>
						<li onClick={() => { handlePathnameChange('#contact') }} className={`link-contact ${location.hash === '#contact' ? 'active' : ''}`}>
							<div className={`container ${location.hash === '#contact' ? 'active' : ''}`} ><span className={`material-symbols-outlined ${location.hash === '#contact' ? 'active' : ''}`}>mail</span><span className={`linkLabel ${location.hash === '#contact' ? 'active' :""}`}>Contact</span></div>
						</li>
					</ul>
					<HamburgerMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} onClick={handleMenuToggle}/>

				</div>

			</div>
		</div>
	)
})
Navigation.displayName = 'Navigation';
export default Navigation;


					// <li onClick={() => { window.location.hash = '#home'; }} className="link-home">
					// 	<div className="container" ><span className="material-symbols-outlined">home</span><span className="linkLabel">Home</span></div>
					// </li>
					// {/* <li onClick={() => { window.location.hash = '#banners'; }} className={`link-banners ${pathname === '#banners' ? 'active' : ''}`}>
					// 	<div className="container" ><span className="material-symbols-outlined">image_inset</span><span className="linkLabel">Banners</span></div>
					// </li> */}
					
					// <li onClick={() => handlePathnameChange('#banners')} className={`link-banners ${pathname === '#banners' ? 'active' : ''}`}>
					// 	<div className="container" ><span className="material-symbols-outlined">image_inset</span><span className="linkLabel">Banners</span></div>
					// </li>

					// <li onClick={() => { window.location.hash = '#videos'; }} className="link-videos">
					// 	<div className="container" ><span className="material-symbols-outlined">live_tv</span><span className="linkLabel">Videos</span></div>
					// </li>
					// <li onClick={() => { window.location.hash = '#react'; }} className="link-react">
					// 	<div className="container" ><React_Icon className="icon-react" /><span className="linkLabel">React</span></div>
					// </li>
					// <li onClick={() => { window.location.hash = '#contact'; }} className="link-contact">
					// 	<div className="container" ><span className="material-symbols-outlined">mail</span><span className="linkLabel">Contact</span></div>
					// </li>