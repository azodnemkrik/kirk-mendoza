import { Link } from "react-router-dom"
import { useEffect, useRef } from "react";
import profileImage from '../../images/profile-kirk.jpg';
import iconAfterEffects from '../../images/after_effects.svg';
import iconCSS from '../../images/css.svg';
import iconFigma from '../../images/figma.svg';
import iconGSAP from '../../images/gsap.svg';
import iconHTML from '../../images/html.svg';
import iconIllustrator from '../../images/illustrator.svg';
import iconPhotoshop from '../../images/photoshop.svg';
import iconPremiere from '../../images/premiere.svg';
import iconReact from '../../images/react.svg';
import Icon_AfterEffects from "../Icon_AfterEffects";
import Icon_PhotoShop from "../Icon_PhotoShop";
import Icon_CSS from "../Icon_CSS";
import Icon_HTML from "../Icon_HTML";
import Icon_GSAP from "../Icon_GSAP";
import Icon_Figma from "../Icon_Figma";
import Icon_Illustrator from "../Icon_Illustrator";
import Icon_JavaScript from "../Icon_JavaScript";
import Icon_Premiere from "../Icon_Premiere";
import Icon_React from "../Icon_React";
import Icon_XD from "../Icon_XD";
const Personal = ({ id, className }) => {

	const navRef = useRef(null);

	useEffect(() => {

	})

	return (
		<div id={id} className={`centered-container personalBG ${className}`}>
			<div className="about-container">
				<div>
				</div>
				<div className="aboutText">
					<h1><span className="accent-blue">Personal</span> about me.</h1>

					<p>Whether I'm developing a responsive interface, producing a motion graphic, or bringing a product story to life with video, I focus on building work that feels professional, intuitive, and impactful.</p>

					<p>Outside of work, I'm a family guy who enjoys creating things — whether it’s code, visuals, or something fun with my kids. I love what I do, and I bring that passion into every project I take on.</p>
					
					<p>I've had the opportunity to work with a number of recognizable brands and agencies, collaborating closely with design, marketing, and technical teams. Clear communication is one of my strongest assets, and clients appreciate that I make the process smooth, efficient, and easy to understand.</p>

				</div>
			</div>
		</div>
	)
}

export default Personal;