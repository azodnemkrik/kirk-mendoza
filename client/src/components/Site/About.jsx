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
const About = ({ id, className }) => {

	const navRef = useRef(null);

	useEffect(() => {

	})

	return (
		<div id={id} className={`centered-container aboutBG ${className}`}>

			<div className="about-container">

				<div className="profile-container">
					<img className="profileImage" src={profileImage} alt="Kirk Mendoza - Front-End Web Developer, Motion Graphics Designer, Video Editor, Animator" />
				</div>

				<div className="aboutText">
					<h1>Hi, I'm <span className="accent-blue">Kirk</span></h1>
					<h2> Web Dev <span className="accent-blue">•</span> Animation <span className="accent-blue">•</span> Motion Graphics</h2>
					<p>With 20+ years of experience, blending visuals and code to solve problems is where I do my best work.</p>
					<h2><span className="accent-blue">Full-Stack</span> Developer</h2>
					<p>Recently Full-Stack certified, adding back-end development and React.</p>
				</div>

			</div>

			<div className="about-sections">

				<div className="skills-container">
					<Icon_HTML className="grayScale" />
					<Icon_CSS className="grayScale" />
					<Icon_JavaScript className="grayScale" />
					<Icon_GSAP className="grayScale gsap" />
					<Icon_Figma className="grayScale" />
					<Icon_XD className="grayScale" />
					<Icon_PhotoShop className="grayScale" />
					<Icon_Illustrator className="grayScale" />
					<Icon_AfterEffects className="grayScale" />
					<Icon_Premiere className="grayScale" />
					<Icon_React className="grayScale" />
				</div>

				<div className="details-container">
					<details className="details" name="about-section">
						<summary>My Approach</summary>
						<div className="about-detail">
							<p>
								I care a lot about how things are built and how they're communicated. Clear conversations upfront lead to better solutions and fewer surprises later.
							</p>
							<p>
								I enjoy solving problems at the intersection of visuals and code—finding clean, practical answers to complex challenges.
							</p>
							<p>
								With over 20 years of experience, I've learned that the best work comes from collaboration, curiosity, and keeping things simple.
							</p>
						</div>
					</details>

					<details className="details" name="about-section">
						<summary>Beyond Work</summary>
						<div className="about-detail">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam adipisci totam tenetur eligendi repudiandae ratione ducimus blanditiis delectus minus laboriosam, provident neque porro cum laborum explicabo, consequuntur iste eos nesciunt.
						</div>
					</details>
				</div>

			</div>

		</div>
	)
}

export default About;