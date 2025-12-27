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

const About = ({ id, className, onOpenModal }) => {

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
					<h2> Web Developer <span className="accent-blue">•</span> Animator <span className="accent-blue">•</span> <span className="noWrap">Project Solver</span></h2>
					<p>With 20+ years of experience, I use code to bring static visuals and idea-sparks to life. Solving project challenges is where I do my best work.</p>
					<h2><span className="accent-blue">Full-Stack</span> Developer</h2>
					<p>I have recently been Full-Stack certified, adding React to my Tech Stack. I look forward to taking on more jobs in this area.</p>
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
						<summary>Credentials & Stuff</summary>
						<div className="about-detail">
							<ul>
								<li className="li-linkedin">Check out my <a href="https://www.linkedin.com/in/kirkmendoza" target="_blank" rel="noopener noreferrer">LinkedIn profile</a> for all the 🥩 & 🥔.</li>
								<li className="li-resume"><a href="./documents/Resume-Kirk-Mendoza-2026.pdf" target="_blank" rel="noopener noreferrer">Download</a> a good old fashioned, formal resume. </li>
								<li className="li-easter">As of today, there are 3. Can you find them? 😜</li>
							</ul>
						</div>
					</details>

					<hr />
					
					<details className="details" name="">
						<summary>Personal Practices</summary>
						<div className="about-detail">
							<ul>
								<li className="li-communication">Clear communication - Let's save on billable time and reduce as many surprises.</li>
								<li className="li-work">Accountability - With roles defined, I know I'm responsible for everything I submit and stand behind my work. </li>
								<li className="li-positive">Positive Vibes - Keeping things positive and collaborative has lead to many great outcomes – including reduced stress. It's really worked so far. ☺️</li>
								<li className="li-puzzle">I see coding, project solving <span className="italic">(and life in general)</span> like building with LEGO – Although challenging, there's a specific fun involved.</li>
								<li className="li-eat">Take your Lunch Breaks - It's truly important that you don't forget to eat!</li>
							</ul>
						</div>
					</details>

					<hr />

					<details className="details" name="">
						<summary>Beyond Work</summary>
						<div className="about-detail">
							<ul>
								<li className="li-chicago" >Situated about an hour from downtown Chicago.</li>
								<li className="li-married" >Married once, parented twice.🧑🏽‍🤝‍🧑🏻</li>
								<li className="li-3dprint" >3D-printing hobbyist.</li>
								<li className="li-toy" >Mild toy collector <span className="italic">(LEGO Star Wars, 80's robots...)</span><br/>
								<div className="detail-image-container"><img src="../images/lego1.jpeg" alt="" /></div></li>
							</ul>
						</div>
					</details>
				</div>
			</div>
			<BrandCrawler className="brand-crawler" onOpenModal={onOpenModal} />
		</div>
	)
}

export default About;