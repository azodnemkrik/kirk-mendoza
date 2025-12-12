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
						<h2 onClick={() => { handleCardClick(1) }} className={`card-label card-label-3 ${activeCard === 1 ? 'selected' : ''}`}>Hi there!</h2>
						<h2 onClick={() => { handleCardClick(2) }} className={`card-label card-label-1 ${activeCard === 2 ? 'selected' : ''}`}>Professionally</h2>
						<h2 onClick={() => { handleCardClick(3) }} className={`card-label card-label-2 ${activeCard === 3 ? 'selected' : ''}`}>Boy at <span className="material-symbols-outlined filled" >favorite</span> </h2>
						<h2 onClick={() => { handleCardClick(4) }} className={`card-label card-label-3 ${activeCard === 4 ? 'selected' : ''}`}>Game Show Host</h2>
					</div>
				</div>
				<div className="three-cards-container">

					{/* Card 1 */}
					<div className={`card card-1 ${activeCard !== 1 ? 'hidden' : 'selected'}`}>
						<About />
						{/* <div className="thumbnails-container">
							<p>These are some examples. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt in ratione dolorem facere neque ut, id quibusdam et eum fugit enim quos eaque dolores est! Suscipit quibusdam ab beatae. Illum facere labore est corporis fugit accusantium numquam earum itaque provident harum. Laborum in quibusdam vel iusto aliquam molestiae facere?</p>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Visit<br />Mississippi</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-300x250/index.html", false)} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_Illustrator className="skillIcon" />
											<Icon_Figma className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb1} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Borden<br />Cheese</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/borden/crisps_n_cubes-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_PhotoShop className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb2} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Refocus</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Refocus</h2><iframe src="/banners/refocus/30-percent-more-film-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/refocus/30-percent-more-film-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_Figma className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb3} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Microsoft</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Microsoft</h2><iframe src="/banners/microsoft/microsoft_neutral-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/microsoft/microsoft_neutral-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_XD className="skillIcon" />
											<Icon_PhotoShop className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb4} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">XBox</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/xbox/xbox_titan-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_XD className="skillIcon" />
											<Icon_PhotoShop className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb5} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Discover</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Discover</h2><iframe src="/banners/discover/stackable-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/stackable-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_Figma className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb6} width="300" height="250" className="thumbnail-image" />
							</div>
						</div>
						<Peekaboo id="peekaboo-container" onClick={() => onOpenModal(<video className="flash-content" src="https://www.kirk-mendoza.com/video/pg-site.mp4" type="video/mp4" autoPlay loop muted controls width="auto" height="20%"></video>, "https://www.kirk-mendoza.com/video/pg-site.mp4")} /> */}
					</div>

					{/* Card 2 */}
					<div className={`card card-2 ${activeCard !== 2 ? 'hidden' : 'selected'}`}>
						<About />
					</div>

					{/* Card 3 */}
					<div className={`card card-3 ${activeCard !== 3 ? 'hidden' : 'selected'}`}>
						<About />
					</div>

					{/* Card 4 */}
					<div className={`card card-4 ${activeCard !== 4 ? 'hidden' : 'selected'}`}>
						<About />
					</div>

				</div>
			</div>
		</>
	)
}

export default ThreeTabs;