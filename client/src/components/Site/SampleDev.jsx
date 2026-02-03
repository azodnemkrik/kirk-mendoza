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

import Icon_React from "../Icon_React";

const SampleDev = ({ id, className, onOpenModal, onUserInteraction }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	const trackInteraction = (interactionLabel) => {
		if (onUserInteraction) {
			onUserInteraction(interactionLabel);
		}
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

					<p>I recently dove into Full-Stack development at <a href="https://bootcamp.uic.edu/programs/coding" target="_blank" rel="noopener noreferrer"> <span className="school accent-red">UIC / Fullstack Academy</span>
					</a>, where I built my first full React.js project from scratch in just three weeks, handling every aspect myself while keeping up with full-time work. I presented it in a class demo video (starts at <a href="https://youtu.be/KMYDDZ4toh4?si=kV3oInc2ZKB0Ckr1&t=1999" target="_blank" rel="noopener noreferrer" onClick={() => trackInteraction("React Demo Link Click: Timestamp 33:19")}><span className="school">33:19</span></a>). If you have questions or want more details, feel free to reach out—I’m happy to chat about how it works. In that short time, I applied my new skills confidently, solved the tricky parts as they came up, and I’m looking forward to gaining more experience with React through future projects.
					</p>
					
					<div className="section-content">
						<Carousel images={carouselImages} onUserInteraction={onUserInteraction} />
						<iframe width="560" height="315" src="https://www.youtube.com/embed/KMYDDZ4toh4?start=1999" title="React Project Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onClick={() => trackInteraction("React Demo Embed Click")}>
						</iframe>
					</div>


				</div>
			</div>
		</>
	)
}

export default SampleDev;