import { useState } from "react";
import thumb1 from '../../../public/videos/ogilvy_magic_intro.jpg';
import thumb2 from '../../../public/videos/discover_card_smarts.jpg';
import thumb3 from '../../../public/videos/parchment.jpg';
import thumb4 from '../../../public/videos/discover_basketball.jpg';
import thumb5 from '../../../public/videos/discover_piggybank.jpg';
import Icon_Illustrator from "../Icon_Illustrator";
import Icon_Figma from "../Icon_Figma";
import Icon_PhotoShop from "../Icon_PhotoShop";
import Icon_AfterEffects from "../Icon_AfterEffects";
import Icon_Premiere from "../Icon_Premiere";
import BrandCrawler from "./BrandCrawler";

const SampleVideos = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>

				<div className="videos-container label-container">
					<h1 onClick={() => { handleCardClick(1) }} className={`section-label section-label-videos`}><div>Videos<span className="material-symbols-outlined asIcon">live_tv</span></div></h1>
				</div>

				<div className="videos-container2 section-container">

					<p>
						<span className="h2-style medium-blue"> I Animate & Edit</span><br />motion graphics videos using Adobe After Effects &  Premiere, respectively. My goal is ensuring that their desired story, message and information is conveyed clearly for my clients. Although not every client knows what they want, all of them can spot what they don't want.
					</p>

					<div className="section-content">

						<div className="thumbnail video-size">
							<div className="thumbnail-info video-size">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Ogilvy: Magic Intro<br /><span className="video-duration">(0:45)</span></div>
									<div className="thumbnail-description">Script Writing • Storyboard • Illustration<br />Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Ogilvy: Magic Intro</h2><video src="https://www.kirk-mendoza.com/video/ogilvy_magic_intro.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/ogilvy_magic_intro.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb1} width="300" height="250" className="thumbnail-image video-size" />
						</div>

						<div className="thumbnail video-size">
							<div className="thumbnail-info video-size">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover:<br />Card Smarts<br /><span className="video-duration">(2:59)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_Figma className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Discover: Card Smarts</h2><video src="https://www.kirk-mendoza.com/video/discover_card_smarts.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/discover_card_smarts.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb2} width="300" height="250" className="thumbnail-image video-size" />
						</div>

						<div className="thumbnail video-size">
							<div className="thumbnail-info video-size">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Parchment<br /><span className="video-duration">(2:01)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Parchment</h2><video src="https://www.kirk-mendoza.com/video/parchment.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/parchment.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb3} width="300" height="250" className="thumbnail-image video-size" />
						</div>

						<div className="thumbnail video-size">
							<div className="thumbnail-info video-size">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover:<br />Basketball<br /><span className="video-duration">(0:04)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_Figma className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div><h2>Discover: Basketball</h2><video src="https://www.kirk-mendoza.com/video/discover_basketball.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/discover_basketball.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb4} width="300" height="250" className="thumbnail-image video-size" />
						</div>

						<div className="thumbnail " style={{ width: '250px', height: '375px' }}>
							<div className="thumbnail-info " style={{ width: '250px', height: '375px' }}>
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover:<br />PiggyBank<br /><span className="video-duration">(0:09)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_Figma className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div style={{ width: '40vh', height: 'auto' }}><h2>Discover: PiggyBank</h2><video src="https://www.kirk-mendoza.com/video/discover_piggybank.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.kirk-mendoza.com/video/discover_piggybank.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb5} width="250" height="375" className="thumbnail-image" />
						</div>

					</div>
				</div>
				{/* <div className="brand-crawler-section">
					<h2>Brands I've worked with</h2>
				</div> */}
				<BrandCrawler className="brand-crawler" />
			</div>
		</>
	)
}

export default SampleVideos;