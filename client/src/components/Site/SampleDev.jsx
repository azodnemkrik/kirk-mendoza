import { useState } from "react";
import React from "react";
import carouselImg1 from '../../../public/dev/carousel/itg-frame-01.jpg';
import carouselImg2 from '../../../public/dev/carousel/itg-frame-02.jpg';
import carouselImg3 from '../../../public/dev/carousel/itg-frame-03.jpg';
import carouselImg4 from '../../../public/dev/carousel/itg-frame-04.jpg';
import carouselImg5 from '../../../public/dev/carousel/itg-frame-05.jpg';
import carouselImg6 from '../../../public/dev/carousel/itg-frame-06.jpg';
import carouselImg7 from '../../../public/dev/carousel/itg-frame-07.jpg';
import carouselImg8 from '../../../public/dev/carousel/itg-frame-08.jpg';
import carouselImg9 from '../../../public/dev/carousel/itg-frame-09.jpg';
import carouselImg10 from '../../../public/dev/carousel/itg-frame-10.jpg';
import Carousel from "./Carousel";
import Icon_Illustrator from "../Icon_Illustrator";
import Icon_HTML from "../Icon_HTML";
import Icon_CSS from "../Icon_CSS";
import Icon_GSAP from "../Icon_GSAP";
import Icon_Figma from "../Icon_Figma";
import Icon_PhotoShop from "../Icon_PhotoShop";
import Icon_JavaScript from "../Icon_JavaScript";
import Icon_XD from "../Icon_XD";
import Scrubber from "./Scrubber";
import Icon_React from "../Icon_React";

const SampleDev = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	// Carousel images - easily add/remove images from this array
	const carouselImages = [
		{ src: carouselImg1, alt: "ITG Frame 1" },
		{ src: carouselImg2, alt: "ITG Frame 2" },
		{ src: carouselImg3, alt: "ITG Frame 3" },
		{ src: carouselImg4, alt: "ITG Frame 4" },
		{ src: carouselImg5, alt: "ITG Frame 5" },
		{ src: carouselImg6, alt: "ITG Frame 6" },
		{ src: carouselImg7, alt: "ITG Frame 7" },
		{ src: carouselImg8, alt: "ITG Frame 8" },
		{ src: carouselImg9, alt: "ITG Frame 9" },
		{ src: carouselImg10, alt: "ITG Frame 10" },
		// Add more images here as needed
	];

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>

				<div className="dev-container ">
					<h1 onClick={() => { handleCardClick(1) }} className={`section-label section-label-dev`}><span>React <Icon_React className="" /></span></h1>
				</div>

				<div className="dev-container2 section-container">


					<p>
						<span className="h2-style medium-blue"> I Graduated</span><br />recently from

						<a href="https://bootcamp.uic.edu/programs/coding" target="_blank" rel="noopener noreferrer"> <span className="school accent-red">UIC / Fullstack Academy</span>	
						</a> completing an intensive, project-based curriculum. I honed in on my skills in React.js and Full-Stack Development. Ask me about my final project - I'd love to demo it for you! Let's put these new skills to work! <span className="nowrap-text">🤜🤛</span>
					</p>
					<div className="section-content">
						<Carousel images={carouselImages} />
					</div>

				</div>
			</div>
		</>
	)
}

export default SampleDev;