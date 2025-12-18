import { useState } from "react";
import React from "react";
import thumb1 from '../../../public/banners/visit_mississippi/visit_mississippi-300x250.jpg';
import thumb2 from '../../../public/banners/borden/crisps_n_cubes-300x250.jpg';
import thumb3 from '../../../public/banners/refocus/30-percent-more-film-300x250.jpg';
import thumb4 from '../../../public/banners/microsoft/microsoft_neutral-300x250.jpg';
import thumb5 from '../../../public/banners/xbox/xbox_titan-300x250.jpg';
import thumb6 from '../../../public/banners/discover/stackable-300x250.jpg';
import Peekaboo from "./Peekaboo";
import Icon_Illustrator from "../Icon_Illustrator";
import Icon_HTML from "../Icon_HTML";
import Icon_CSS from "../Icon_CSS";
import Icon_GSAP from "../Icon_GSAP";
import Icon_Figma from "../Icon_Figma";
import Icon_PhotoShop from "../Icon_PhotoShop";
import Icon_JavaScript from "../Icon_JavaScript";
import Icon_XD from "../Icon_XD";
import Scrubber from "./Scrubber";
import About from "./About";
import Professional from "./Professional";
import Personal from "./Personal";

const ThreeTabs = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	return (
		<>
			<div id={id} className={`three-tabs-BG ${className}`}>

				<div className="three-tabs-container">
					<h1>About Me</h1>
					<div className="three-cards-labels-container">
						<p onClick={() => { handleCardClick(1) }} className={`card-label-3 three-tabs-button ${activeCard === 1 ? 'selected' : ''}`}>Overview</p>
						<p onClick={() => { handleCardClick(2) }} className={`card-label-1 three-tabs-button ${activeCard === 2 ? 'selected' : ''}`}>My Approach</p>
						<p onClick={() => { handleCardClick(3) }} className={`card-label-2 three-tabs-button ${activeCard === 3 ? 'selected' : ''}`}>Beyond Work</p>
					</div>
				</div>
				
				<div className="three-cards-container2">

					{/* Card 1 */}
					<div className={`card card-1 ${activeCard !== 1 ? 'hidden' : 'selected'}`}>
						<About />
					</div>

					{/* Card 2 */}
					<div className={`card card-2 ${activeCard !== 2 ? 'hidden' : 'selected'}`}>
						<Professional />
					</div>

					{/* Card 3 */}
					<div className={`card card-3 ${activeCard !== 3 ? 'hidden' : 'selected'}`}>
						<Personal />
					</div>

				</div>
			</div>
		</>
	)
}

export default ThreeTabs;