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
					<h1><span className="noWrap">Hi, I'm <span className="accent-blue">Kirk</span></span></h1>
					<h2> Web Dev <span className="accent-blue">•</span> Animation <span className="accent-blue">•</span> <span className="noWrap">Motion Graphics</span></h2>
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
					<details className="details" name="">
						<summary>Personal Practices</summary>
						<div className="about-detail">
							<ul>
								<li className="li-communication">Clear communication - it saves time for everyone and reduces unwanted surprises. </li>
								<li className="li-work">Own the work - I'm responsible for everything I submit and stand behind it, whatever the outcome. </li>
								<li className="li-positive">Positive thinking and strong collaboration can lead to truly great things. </li>
								<li className="li-puzzle">In coding <i>(and life)</i>, I see problem-solving as a jigsaw puzzle or LEGO build - challenging & fun! </li>
								<li className="li-eat">Don’t forget to eat! Seriously - especially lunch. </li>
							</ul>
						</div>
					</details>

					<details className="details" name="">
						<summary>Beyond Work</summary>
						<div className="about-detail">
							<ul>
								<li className="li-chicago" >Situated about an hour outside of Chicago.</li>
								<li className="li-married" >Married once, parented twice.🧑🏽‍🤝‍🧑🏻</li>
								<li className="li-3dprint" >3D-printing hobbyist.</li>
								<li className="li-toy" >Mild toy collector (robots, LEGO, Star Wars...)</li>
							</ul>
						</div>
					</details>
				</div>
			</div>
			<BrandCrawler className="brand-crawler" />
		</div>
	)
}

export default About;