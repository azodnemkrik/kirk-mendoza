import { Link } from "react-router-dom"
import { useEffect, useRef, forwardRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { SplitText } from "gsap/dist/SplitText";
import LogoHero from "./LogoHero";
import HamburgerMenu from "../HamburgerMenu";
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
						<LogoHero className="heroLogo" />
					</div>
					<div className="nav-right">
						<nav>
							<ul className="navigation-bar">
								<li onClick={() => { window.location.hash = '#about'; }} className="link-about-me">
									<div>About Me</div>
									{/* <div onClick={() => { handleCardClick(1) }} className={`card-label-3 three-tabs-button ${activeCard === 1 ? 'selected' : ''}`}>About Me</div> */}
								</li>
								<li onClick={() => { window.location.hash = '#banners'; }} className="link-banners">
									<div>Banners</div>
								</li>
								<li onClick={() => { window.location.hash = '#videos'; }} className="link-videos">
									<div>Videos</div>
								</li>
								<li onClick={() => { window.location.hash = '#react'; }} className="link-react">
									<div>React</div>
								</li>
								<li onClick={() => { window.location.hash = '#contact'; }} className="link-contact">
									<div>Contact</div>
								</li>
							</ul>
						</nav>
						<HamburgerMenu />
					</div>

				</div>

			</div>
		</div>
	)
})
Navigation.displayName = 'Navigation';
export default Navigation;