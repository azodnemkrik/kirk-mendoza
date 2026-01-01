import { useState } from "react";
import React from "react";
import thumb1 from '../../../public/banners/visit_mississippi/visit_mississippi-300x250.jpg';
import thumb2 from '../../../public/banners/borden/crisps_n_cubes-300x250.jpg';
import thumb3 from '../../../public/banners/refocus/seller_benefits-300x250.jpg';
import thumb4 from '../../../public/banners/microsoft/microsoft_neutral-300x250.jpg';
import thumb5 from '../../../public/banners/xbox/xbox_titan-300x250.jpg';
import thumb6 from '../../../public/banners/discover/storefronts-300x250.jpg';
import thumb7 from '../../../public/banners/discover/cityscapes-300x250.jpg';
import thumb8 from '../../../public/banners/discover/stackable-300x250.jpg';
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
import BrandCrawler from "./BrandCrawler";

const SampleBanners = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>


				<div className="banners-container label-container">
					<h1 onClick={() => { handleCardClick(1) }} className={`section-label section-label-banners`}><div>Banners<span className="material-symbols-outlined asIcon">image_inset</span></div></h1>
				</div>

				<div className="banners-container2 section-container">
				
					<p>
						<span className="h2-style light-blue"> Every display ad </span><br />is built with attention to detail and utilizes the <i>GreenSock Animation Platform (GSAP)</i>. I aim to create work that feels premium, intentional, and far from cookie-cutter.
					</p>
					
					<div className="section-content">



						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Visit<br />Mississippi</div><br />
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Illustrator className="" />
										<Icon_Figma className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-300x250/index.html", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb1} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Borden<br />Cheese</div><br />
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_PhotoShop className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/borden/crisps_n_cubes-300x250/index.html", true)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb2} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Refocus</div><br />
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Refocus</h2><iframe src="/banners/refocus/seller_benefits-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/refocus/seller_benefits-300x250/index.html", true)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb3} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Microsoft</div><br />
									<div className="thumbnail-description">Animation • Development<br />Project Management</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_XD className="" />
										<Icon_PhotoShop className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Microsoft</h2><iframe src="/banners/microsoft/microsoft_neutral-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/microsoft/microsoft_neutral-300x250/index.html", true)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb4} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">XBox</div><br />
									<div className="thumbnail-description">Animation • Development<br />Project Management</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_PhotoShop className="" />
										<Icon_Premiere className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/xbox/xbox_titan-300x250/index.html", true)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb5} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover: Storefronts</div><br />
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Discover: Storefronts</h2><iframe src="/banners/discover/storefronts-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/storefronts-300x250/index.html", true)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb6} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover: Cityscapes</div><br />
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Discover: Cityscapes</h2><iframe src="/banners/discover/cityscapes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/cityscapes-300x250/index.html", true)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb7} width="300" height="250" className="thumbnail-image" />
						</div>

						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover: No</div><br />
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Discover: No</h2><iframe src="/banners/discover/stackable-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/stackable-300x250/index.html", true)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb8} width="300" height="250" className="thumbnail-image" />
						</div>

						{/* <Peekaboo id="peekaboo-container" onClick={() => onOpenModal(<video className="flash-content" src="https://www.kirk-mendoza.com/video/pg-site.mp4" type="video/mp4" autoPlay loop muted controls width="auto" height="20%"></video>, "https://www.kirk-mendoza.com/video/pg-site.mp4")} /> */}
						{/* <Peekaboo id="peekaboo-container" onClick={() => onOpenModal(<div><h2>IRI: Digital Greeting Card</h2><iframe src="/flash/iri_christmas/index.html" style={{ display: "block", width: "100vw", height: "100vh", border: "none", margin: 0, overflow: "hidden" }} allowFullScreen className="iri" ></iframe></div>, "/flash/iri_christmas/index.html", false)} /> */}
						<Peekaboo id="peekaboo-container" onClick={() => onOpenModal(<div><h2>IRI: Digital Greeting Card</h2><iframe src="https://www.littlerobotmedia.com/media/flash/iri_christmas/index.html" style={{ display: "block", width: "100vw", height: "100vh", border: "none", margin: 0, overflow: "hidden" }} allowFullScreen className="iri" ></iframe></div>, "https://www.littlerobotmedia.com/media/flash/iri_christmas/index.html", false)} />
					</div>
				</div>
			</div >
		</>
	)
}

export default SampleBanners;