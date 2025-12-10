import { useState } from "react";
import React from "react";
import thumb1 from '../../../public/videos/ogilvy_magic_intro.jpg';
import thumb2 from '../../../public/videos/discover_card_smarts.jpg';
import thumb3 from '../../../public/videos/parchment.jpg';
import Icon_Illustrator from "../Icon_Illustrator";
import Icon_HTML from "../Icon_HTML";
import Icon_CSS from "../Icon_CSS";
import Icon_GSAP from "../Icon_GSAP";
import Icon_Figma from "../Icon_Figma";
import Icon_PhotoShop from "../Icon_PhotoShop";
import Icon_JavaScript from "../Icon_JavaScript";
import Icon_XD from "../Icon_XD";
import Scrubber from "./Scrubber";
import Icon_AfterEffects from "../Icon_AfterEffects";
import Icon_Premiere from "../Icon_Premiere";

const SampleVideos = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>
				<div className="videos-container">

					{/* <div className="three-cards-labels-container"> */}
					<h1 onClick={() => { handleCardClick(1) }} className={`card-label card-label-videos`}>Videos</h1>

					{/* </div> */}
				</div>

				<div className="videos-container2">

					<div className={`card card-1 `}>
						<div className="thumbnails-container">
							<p>These are some examples. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt in ratione dolorem facere neque ut, id quibusdam et eum fugit enim quos eaque dolores est! Suscipit quibusdam ab beatae. Illum facere labore est corporis fugit accusantium numquam earum itaque provident harum. Laborum in quibusdam vel iusto aliquam molestiae facere?</p>
							<div className="thumbnail video-size">
								<div className="thumbnail-info video-size">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Ogilvy: Magic Intro</div>
										<div className="thumbnail-description">Script Writing • Storyboard • Illustration<br />Animation • Editing</div>
									</div>
									<div className="thumbnail-info-bottom container">

										<div onClick={() => onOpenModal(<div><h2>Ogilvy: Magic Intro</h2><video src="https://www.kirk-mendoza.com/video/ogilvy_magic_intro.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/ogilvy_magic_intro.mp4", false)} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_AfterEffects className="skillIcon" />
											<Icon_Illustrator className="skillIcon" />
											<Icon_PhotoShop className="skillIcon" />
											<Icon_Premiere className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb1} width="300" height="250" className="thumbnail-image video-size" />
							</div>
							<div className="thumbnail video-size">
								<div className="thumbnail-info video-size">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Discover:<br />Card Smarts</div>
										<div className="thumbnail-description">Animation • Editing</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Discover: Card Smarts</h2><video src="https://www.kirk-mendoza.com/video/discover_card_smarts.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/discover_card_smarts.mp4", false)} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_AfterEffects className="skillIcon" />
											<Icon_Illustrator className="skillIcon" />
											<Icon_PhotoShop className="skillIcon" />
											<Icon_Figma className="skillIcon" />
											<Icon_Premiere className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb2} width="300" height="250" className="thumbnail-image video-size" />
							</div>
							<div className="thumbnail video-size">
								<div className="thumbnail-info video-size">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Parchment</div>
										<div className="thumbnail-description">Animation • Editing</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Parchment</h2><video src="https://www.kirk-mendoza.com/video/parchment.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/parchment.mp4", false)} className="nav-link">View</div>
										<div className="container skills-used">
											<Icon_AfterEffects className="skillIcon" />
											<Icon_Illustrator className="skillIcon" />
											<Icon_PhotoShop className="skillIcon" />
											<Icon_Premiere className="skillIcon" />
										</div>
									</div>
								</div>
								<img src={thumb3} width="300" height="250" className="thumbnail-image video-size" />
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default SampleVideos;