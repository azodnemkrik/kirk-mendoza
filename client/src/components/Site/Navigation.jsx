import { Link } from "react-router-dom"
import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { SplitText } from "gsap/dist/SplitText";
import LogoHero from "./LogoHero";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, SplitText);

const navTL = gsap.timeline();

const Navigation = forwardRef(({ id, className, pathname, isFixed }, ref) => {
	const internalRef = useRef(null);


	useEffect(() => {
		navTL
			.add("frame1")
			// .to("#navigation", 1 ,{ height: "5em" , ease: "power4.out"}, "frame1+=3.5")
			.to(".logo-container", 1, { width: "40em", ease: "power4.out" }, "frame1+=3.5")
			;

	})

	return (
		<div id={id} className={className} ref={ref || internalRef} style={{ position: isFixed ? 'fixed' : 'sticky', top: 0, width: '100%', zIndex: 1000 }}>
			<div id="navigation" className="centered-container">
				<LogoHero className="heroLogo" />
				<div className="navigation-bar" >
					<Link to="/about-me" className="nav-link link-about-me">
						About Me
					</Link>
					<Link to="/what-i-do" className="nav-link link-what-i-do">
						What I Do
					</Link>
					<Link to="/case-studies" className="nav-link link-case-studies">
						Case Studies
					</Link>
					<Link to="/contact" className="nav-link link-contact">
						Contact
					</Link>
				</div>
			</div>
		</div>
	)
})
Navigation.displayName = 'Navigation';
export default Navigation;