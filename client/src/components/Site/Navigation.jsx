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
			<div id="navigation" className="centered-container">
				<LogoHero className="heroLogo" />
				<HamburgerMenu />
				<nav >
					<ul className="navigation-bar">
						<li>
							<Link to={{ pathname: '/', hash: '#about-me' }} className="nav-link link-about-me">About Me</Link>
						</li>
						<li>
							<Link to={{ pathname: '/', hash: '#banners' }} className="nav-link link-about-me">Banners</Link>
						</li>
						<li>
							<Link to={{ pathname: '/', hash: '#videos' }} className="nav-link link-about-me">Videos</Link>
						</li>
						<li>
							<Link to={{ pathname: '/', hash: '#react' }} className="nav-link link-about-me">React</Link>
						</li>
						<li>
							<Link to={{ pathname: '/', hash: '#contact' }} className="nav-link link-about-me">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
})
Navigation.displayName = 'Navigation';
export default Navigation;