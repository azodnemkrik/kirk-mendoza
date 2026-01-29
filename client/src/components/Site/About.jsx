import { useEffect, useRef } from "react";
import profileImage from '../../images/profile-kirk.jpg';
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
					<h1><span className="noWrap">Hi, I'm <span className="accent-blue">Kirk</span>!</span></h1>
					<h2>Multimedia Developer</h2>
					<p>I’m a Multimedia Developer who blends code, motion graphics, and design to create interactive experiences across web, video, and digital campaigns. With 20+ years in digital work, I approach challenges with optimism—figuring things out, adapting quickly, and solving problems hands-on, while picking up new skills like React along the way.</p>
				</div>

			</div>

			<div className="about-sections">
				<h2 style={{textAlign: "left", marginBottom: "1rem"}}>Tech Stack</h2>
				<div className="skills-container">
					<Icon_HTML className="grayScale" alt="HTML" />
					<Icon_CSS className="grayScale" alt="CSS" />
					<Icon_JavaScript className="grayScale" alt="JavaScript" />
					<Icon_GSAP className="grayScale gsap" alt="GSAP" />
					<Icon_React className="grayScale" alt="React" />
					<Icon_AfterEffects className="grayScale" alt="After Effects" />
					<Icon_Premiere className="grayScale" alt="Premiere" />
					<Icon_Figma className="grayScale" alt="Figma" />
					<Icon_PhotoShop className="grayScale" alt="Photoshop" />
					<Icon_Illustrator className="grayScale" alt="Illustrator" />
					<Icon_XD className="grayScale" alt="Adobe XD" />
				</div>
				<div className="details-container">

					<details className="details" name="">
						<summary>Credentials</summary>
						<div className="about-detail">
							<ul>
								<li className="li-linkedin">Check out my <a href="https://www.linkedin.com/in/kirkmendoza" target="_blank" rel="noopener noreferrer">LinkedIn profile</a> for details on my work history and all the 🥩 & 🥔.</li>
								<li className="li-resume"><a href="./documents/Resume-Kirk-Mendoza-2026.pdf" target="_blank" rel="noopener noreferrer">Download</a> a good old fashioned, formal resume. </li>
							</ul>
						</div>
					</details>

					<hr />
					
					<details className="details" name="">
						<summary>Personal Practices</summary>
						<div className="about-detail">
							<ul>
								<li className="li-communication">I value clear communication—it saves time, reduces surprises, and keeps projects moving smoothly.</li>
								<li className="li-work">I take ownership of my work and stand behind what I deliver.</li>
								<li className="li-positive">Maintaining a positive, collaborative mindset has consistently led to better outcomes (and less stress). </li>
								<li className="li-puzzle">I approach coding and problem-solving like building with LEGO—challenging, but genuinely fun.</li>
								<li className="li-eat">And yes… taking lunch breaks matters. Good work needs fuel.</li>
							</ul>
						</div>
					</details>

					<hr />

					<details className="details" name="">
						<summary>Beyond Work</summary>
						<div className="about-detail">
							<ul>
								<li className="li-easter">There are four Easter eggs hidden across this site—can you find them? If you do, send me a note <a href="#contact">here</a> and I might send you a sticker. <i>(6 still available!)</i><br/>
								<span className="hint">HINT: There are 2x peekaboos</span> 👀 <span className="hint">and 2x touchpoints</span> 🫆</li>
								<li className="li-chicago" >I’m based about an hour outside of downtown Chicago.</li>
								<li className="li-married" >Married once, parented twice.🧑🏽‍🤝‍🧑🏻</li>
								<li className="li-3dprint" >I’m a 3D-printing hobbyist who enjoys tinkering and building things off-screen.</li>
								<li className="li-toy" >Mild toy collector, with a soft spot for LEGO Star Wars and classic ’80s robots.<br/>
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