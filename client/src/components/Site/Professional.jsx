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
import BrandCrawler from "./BrandCrawler";
const Professional = ({ id, className }) => {

	const navRef = useRef(null);

	useEffect(() => {

	})

	return (
		<div id={id} className={`centered-container professionalBG ${className}`}>
			<div className="about-container">
				<div>
				</div>
				<div className="aboutText">
					<h1>I'm a <span className="accent-blue">Boy at <span className="material-symbols-outlined filled" >favorite</span> </span>!</h1><br/>
					<h2>I enjoy puzzle solving.</h2>
					<p>I believe in clear communication, thoughtful problem-solving, and building solutions that balance performance, design, and usability.</p>
				</div>
			</div>
<BrandCrawler />
		</div>
	)
}

export default Professional;