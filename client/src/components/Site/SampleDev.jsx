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

const SampleDev = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>
				<div className="dev-container">
					<h1 onClick={() => { handleCardClick(1) }} className={`card-label card-label-videos`}>Developement</h1>
				</div>
				<div className="dev-container2">

					<div className={`card card-1 ${activeCard !== 1 ? 'hidden' : 'selected'}`}>
						<div className="thumbnails-container">
							<p>These are some examples. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt in ratione dolorem facere neque ut, id quibusdam et eum fugit enim quos eaque dolores est! Suscipit quibusdam ab beatae. Illum facere labore est corporis fugit accusantium numquam earum itaque provident harum. Laborum in quibusdam vel iusto aliquam molestiae facere?</p>
							<div className="carousel-container">
								
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default SampleDev;