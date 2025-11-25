import { Link } from "react-router-dom"
import { useEffect, useRef } from "react";
import profileImage from '../../images/profile-kirk.jpg';
import iconReact from '../../images/react.svg';
const About = ({ }) => {

	const navRef = useRef(null);

	useEffect(() => {

	})

	return (
		<div className="centered-container aboutBG">
			<div className="about-container">
				<div>
					<img className="profileImage" src={profileImage} alt="Kirk Mendoza - Front-End Web Developer, Motion Graphics Designer, Video Editor, Animator" />
				</div>
				<div className="aboutText">
					<h1>Hello, I'm Kirk!</h1>

					<p> I'm a front-end web developer with over 20 years in the industry, creating clean, high-performing digital ad experiences. With a background in animation, my skill set extends into motion graphics and video editing, allowing me to blend strong technical development with eye-catching visual storytelling.</p>

					<p>I recently completed my Full-Stack Developer certification, adding back-end React development to my toolkit. This lets me deliver complete solutions, from polished interfaces to fully functional applications.</p>

					<div className="skills-container">
						<ul>
							<li><img className="skill" src={iconReact} alt="React Icon" style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} /></li>
							<li><img className="skill" src={iconReact} alt="React Icon" style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} /></li>
							<li><img className="skill" src={iconReact} alt="React Icon" style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} /></li>
							<li><img className="skill" src={iconReact} alt="React Icon" style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} /></li>
							<li><img className="skill" src={iconReact} alt="React Icon" style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} /></li>
							<li><img className="skill" src={iconReact} alt="React Icon" style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} /></li>
						</ul>
					</div>

					{/* <p>I've had the opportunity to work with a number of recognizable brands and agencies, collaborating closely with design, marketing, and technical teams. Clear communication is one of my strongest assets, and clients appreciate that I make the process smooth, efficient, and easy to understand.</p>

					<p>Whether I'm developing a responsive interface, producing a motion graphic, or bringing a product story to life with video, I focus on building work that feels professional, intuitive, and impactful.</p>

					<p>Outside of work, I'm a family guy who enjoys creating things — whether it’s code, visuals, or something fun with my kids. I love what I do, and I bring that passion into every project I take on.</p> */}
				</div>
			</div>
		</div>
	)
}

export default About;