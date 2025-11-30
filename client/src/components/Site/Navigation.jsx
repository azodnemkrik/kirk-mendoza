import { Link } from "react-router-dom"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { SplitText } from "gsap/dist/SplitText";
import LogoHero from "./LogoHero";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, SplitText);

const Navigation = ({ }) => {
	const navRef = useRef(null);


	useEffect(() => {

	})

	return (
		<>
		<LogoHero />
		<div className="navigation-bar" >
			<Link to="#about-me" className="nav-link link-about-me">
				About Me
			</Link>
			<Link to="#what-i-do" className="nav-link link-what-i-do">
				What I Do
			</Link>
			<Link to="#case-studies" className="nav-link link-case-studies">	
				Case Studies
			</Link>
			<Link to="#contact" className="nav-link link-contact">	
				Contact
			</Link>
		</div>
		</>
	)
}
export default Navigation;