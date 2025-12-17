import { useState } from "react";
import React from "react";
import thumb1 from '../../../public/banners/visit_mississippi/visit_mississippi-300x250.jpg';
import thumb2 from '../../../public/banners/borden/crisps_n_cubes-300x250.jpg';
import thumb3 from '../../../public/banners/refocus/30-percent-more-film-300x250.jpg';
import thumb4 from '../../../public/banners/microsoft/microsoft_neutral-300x250.jpg';
import thumb5 from '../../../public/banners/xbox/xbox_titan-300x250.jpg';
import thumb6 from '../../../public/banners/discover/stackable-300x250.jpg';
import Peekaboo from "./Peekaboo";
import cssIcon from '../../images/css.svg';
import htmlIcon from '../../images/html.svg';
import gsapIcon from "../../images/gsap.svg";
import aiIcon from '../../images/illustrator.svg';
import Icon_Illustrator from "../Icon_Illustrator";
import Icon_HTML from "../Icon_HTML";
import Icon_CSS from "../Icon_CSS";
import Icon_GSAP from "../Icon_GSAP";
import Icon_Figma from "../Icon_Figma";
import Icon_PhotoShop from "../Icon_PhotoShop";
import Icon_JavaScript from "../Icon_JavaScript";
import Icon_XD from "../Icon_XD";
import Scrubber from "./Scrubber";
import Icon_Premiere from "../Icon_Premiere";

const SampleBanners = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>

				<div className="banners-container ">
					<h1 onClick={() => { handleCardClick(1) }} className={`card-label card-label-banners`}>Banners<span className="material-symbols-outlined asIcon">image_inset</span></h1>
				</div>

				<div className="banners-container2 section-container">

					<div className="section-content">

						<p>These are some examples. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt in ratione dolorem facere neque ut, id quibusdam et eum fugit enim quos eaque dolores est! Suscipit quibusdam ab beatae. Illum facere labore est corporis fugit accusantium numquam earum itaque provident harum. Laborum in quibusdam vel iusto aliquam molestiae facere?</p>

						{/* <div className="thumbnail">
								<div className="thumbnail-info">
										<div className="thumbnail-info-title">Visit<br />Mississippi</div>
										<div className="thumbnail-description">Animation • Development</div>
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
								<img src={thumb1} width="300" height="250" className="thumbnail-image" />
							</div>

							<div className="thumbnail">
								<div className="thumbnail-info">
										<div className="thumbnail-info-title">Borden<br />Cheese</div>
										<div className="thumbnail-description">Animation • Development</div>
										<div onClick={() => onOpenModal(<div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/borden/crisps_n_cubes-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_PhotoShop className="skillIcon" />
										</div>
									</div>
								<img src={thumb2} width="300" height="250" className="thumbnail-image" />
							</div>

							<div className="thumbnail">
								<div className="thumbnail-info">
										<div className="thumbnail-info-title">Refocus</div>
										<div className="thumbnail-description">Animation • Development</div>
										<div onClick={() => onOpenModal(<div><h2>Refocus</h2><iframe src="/banners/refocus/30-percent-more-film-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/refocus/30-percent-more-film-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_Figma className="skillIcon" />
										</div>
									</div>
								<img src={thumb3} width="300" height="250" className="thumbnail-image" />
							</div>

							<div className="thumbnail">
								<div className="thumbnail-info">
										<div className="thumbnail-info-title">Microsoft</div>
										<div className="thumbnail-description">Animation • Development<br />Project Management</div>
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
								<img src={thumb4} width="300" height="250" className="thumbnail-image" />
							</div>

							<div className="thumbnail">
								<div className="thumbnail-info">
										<div className="thumbnail-info-title">XBox</div>
										<div className="thumbnail-description">Animation • Development<br />Project Management</div>
										<div onClick={() => onOpenModal(<div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/xbox/xbox_titan-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_PhotoShop className="skillIcon" />
											<Icon_Premiere className="skillIcon" />
										</div>
								</div>
								<img src={thumb5} width="300" height="250" className="thumbnail-image" />
							</div>

							<div className="thumbnail">
								<div className="thumbnail-info">
										<div className="thumbnail-info-title">Discover</div>
										<div className="thumbnail-description">Animation • Development</div>
										<div onClick={() => onOpenModal(<div><h2>Discover</h2><iframe src="/banners/discover/stackable-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/stackable-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_HTML className="skillIcon" />
											<Icon_CSS className="skillIcon" />
											<Icon_JavaScript className="skillIcon" />
											<Icon_GSAP className="skillIcon gsap" />
											<Icon_Figma className="skillIcon" />
										</div>
								</div>
								<img src={thumb6} width="300" height="250" className="thumbnail-image" />
							</div> */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Visit<br />Mississippi</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="skillIcon" />
										<Icon_CSS className="skillIcon" />
										<Icon_JavaScript className="skillIcon" />
										<Icon_GSAP className="skillIcon gsap" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_Figma className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-300x250/index.html", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb1} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-title">Borden<br />Cheese</div>
								<div className="thumbnail-description">Animation • Development</div>
								<div onClick={() => onOpenModal(<div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/borden/crisps_n_cubes-300x250/index.html")} className="nav-link">View</div>
								<div className="container skills-used">
									<Icon_HTML className="skillIcon" />
									<Icon_CSS className="skillIcon" />
									<Icon_JavaScript className="skillIcon" />
									<Icon_GSAP className="skillIcon gsap" />
									<Icon_PhotoShop className="skillIcon" />
								</div>
							</div>
							<img src={thumb2} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-title">Refocus</div>
								<div className="thumbnail-description">Animation • Development</div>
								<div onClick={() => onOpenModal(<div><h2>Refocus</h2><iframe src="/banners/refocus/30-percent-more-film-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/refocus/30-percent-more-film-300x250/index.html")} className="nav-link">View</div>
								<div className="container skills-used">
									<Icon_HTML className="skillIcon" />
									<Icon_CSS className="skillIcon" />
									<Icon_JavaScript className="skillIcon" />
									<Icon_GSAP className="skillIcon gsap" />
									<Icon_Figma className="skillIcon" />
								</div>
							</div>
							<img src={thumb3} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-title">Microsoft</div>
								<div className="thumbnail-description">Animation • Development<br />Project Management</div>
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
							<img src={thumb4} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-title">XBox</div>
								<div className="thumbnail-description">Animation • Development<br />Project Management</div>
								<div onClick={() => onOpenModal(<div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/xbox/xbox_titan-300x250/index.html")} className="nav-link">View</div>
								<div className="container skills-used">
									<Icon_HTML className="skillIcon" />
									<Icon_CSS className="skillIcon" />
									<Icon_JavaScript className="skillIcon" />
									<Icon_GSAP className="skillIcon gsap" />
									<Icon_PhotoShop className="skillIcon" />
									<Icon_Premiere className="skillIcon" />
								</div>
							</div>
							<img src={thumb5} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-title">Discover</div>
								<div className="thumbnail-description">Animation • Development</div>
								<div onClick={() => onOpenModal(<div><h2>Discover</h2><iframe src="/banners/discover/stackable-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/stackable-300x250/index.html")} className="nav-link">View</div>
								<div className="container skills-used">
									<Icon_HTML className="skillIcon" />
									<Icon_CSS className="skillIcon" />
									<Icon_JavaScript className="skillIcon" />
									<Icon_GSAP className="skillIcon gsap" />
									<Icon_Figma className="skillIcon" />
								</div>
							</div>
							<img src={thumb6} width="300" height="250" className="thumbnail-image" />
						</div>

						<Peekaboo id="peekaboo-container" onClick={() => onOpenModal(<video className="flash-content" src="https://www.kirk-mendoza.com/video/pg-site.mp4" type="video/mp4" autoPlay loop muted controls width="auto" height="20%"></video>, "https://www.kirk-mendoza.com/video/pg-site.mp4")} />

					</div>
				</div>

			</div>
		</>
	)
}

export default SampleBanners;