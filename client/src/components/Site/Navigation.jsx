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

const Navigation = forwardRef(({ id, className, pathname, isFixed }, ref) => {
	const internalRef = useRef(null);

	useEffect(() => {
		// Timeline initialized but no animations currently active
		navTL.add("frame1");
	})

	return (
		<div id={id} className={className} ref={ref || internalRef} style={{ position: isFixed ? 'fixed' : 'sticky', top: 0, width: '100%', zIndex: 1000 }}>
			<div id="navigation" className="centered-container navigation">
				<div className="nav-splitter">
					<div className="nav-left">
						{/* <img src="/km-insignia.svg" alt="Kirk Mendoza Logo Insignia" className="logo-insignia" /> */}
						<LogoHero className="heroLogo" />
					</div>
					<ul className="nav-right navigation-bar">
						<li onClick={() => { window.location.hash = '#home'; }} className="link-home">
							<div className="container" ><span className="material-symbols-outlined">home</span><span className="linkLabel">Home</span></div>
						</li>
						<li onClick={() => { window.location.hash = '#banners'; }} className="link-banners">
							<div className="container" ><span className="material-symbols-outlined">image_inset</span><span className="linkLabel">Banners</span></div>
						</li>
						<li onClick={() => { window.location.hash = '#videos'; }} className="link-videos">
							<div className="container" ><span className="material-symbols-outlined">live_tv</span><span className="linkLabel">Videos</span></div>
						</li>
						<li onClick={() => { window.location.hash = '#react'; }} className="link-react">
							<div className="container" ><React_Icon className="icon-react" /><span className="linkLabel">React</span></div>
						</li>
						<li onClick={() => { window.location.hash = '#contact'; }} className="link-contact">
							<div className="container" ><span className="material-symbols-outlined">mail</span><span className="linkLabel">Contact</span></div>
						</li>
						<HamburgerMenu />
					</ul>

				</div>

			</div>
		</div>
	)
})
Navigation.displayName = 'Navigation';
export default Navigation;