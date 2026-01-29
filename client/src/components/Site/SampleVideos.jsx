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
import Icon_XD from "../Icon_XD";

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
						I create motion graphics videos using Adobe After Effects and Premiere. My focus is on helping clients tell their story clearly and effectively—whether they know exactly what they want or need a bit of guidance along the way.
					</p>

					<p><span className="h2-style medium-blue">Long Format</span></p>

					<div className="section-content">

						{/* Ogilvy: Magic Intro */}
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
								<div onClick={() => onOpenModal(<div><h2>Ogilvy: Magic Intro</h2><video src="https://www.littlerobotmedia.com/media/video/ogilvy_magic_intro.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/ogilvy_magic_intro.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb1} width="300" height="250" className="thumbnail-image video-size" />
						</div>

						{/* Discover: Card Smarts */}
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
								<div onClick={() => onOpenModal(<div><h2>Discover: Card Smarts</h2><video src="https://www.littlerobotmedia.com/media/video/discover_card_smarts.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/discover_card_smarts.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb2} width="300" height="250" className="thumbnail-image video-size" />
						</div>

						{/* Parchment */}
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
								<div onClick={() => onOpenModal(<div><h2>Parchment</h2><video src="https://www.littlerobotmedia.com/media/video/parchment.mp4" type="video/mp4" autoPlay controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/parchment.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb3} width="300" height="250" className="thumbnail-image video-size" />
						</div>
					</div>

					<p><span className="h2-style medium-blue">Short Format</span></p>

					<div className="section-content">

						{/* Microsoft: Work From Home */}
						<div className="thumbnail video-size-vertical">
							<div className="thumbnail-info video-size-vertical">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Microsoft:<br />Work From Home<br /><span className="video-duration">(0:21)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
										<Icon_XD className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div style={{ width: '40vh', height: 'auto' }}><h2>Microsoft: Work From Home</h2><video src="https://www.littlerobotmedia.com/media/video/MSFT_DoDont_Work-From-Home-9x16.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/MSFT_DoDont_Work-From-Home-9x16.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src="https://www.littlerobotmedia.com/media/video/MSFT_DoDont_Work-From-Home-9x16.jpg" width="300" height="375" className="thumbnail-image video-size-vertical" />
						</div>

						{/* Microsoft: Identity Theft */}
						<div className="thumbnail video-size-vertical">
							<div className="thumbnail-info video-size-vertical">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Microsoft:<br />Identity Theft<br /><span className="video-duration">(0:13)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
										<Icon_XD className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div style={{ width: '40vh', height: 'auto' }}><h2>Microsoft: Identity Theft</h2><video src="https://www.littlerobotmedia.com/media/video/MSFT_Defender_Identity-Theft-9x16.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/MSFT_Defender_Identity-Theft-9x16.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src="https://www.littlerobotmedia.com/media/video/MSFT_Defender_Identity-Theft-9x16.jpg" width="300" height="375" className="thumbnail-image video-size-vertical" />
						</div>

						{/* Microsoft: Anniversario */}
						<div className="thumbnail video-size-vertical">
							<div className="thumbnail-info video-size-vertical">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Microsoft:<br />Anniversario<br /><span className="video-duration">(0:26)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
										<Icon_XD className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div style={{ width: '40vh', height: 'auto' }}><h2>Microsoft: Anniversario</h2><video src="https://www.littlerobotmedia.com/media/video/MSFT_GetReady_PowerPoint-Anniversario-V2-9x16.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/MSFT_GetReady_PowerPoint-Anniversario-V2-9x16.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src="https://www.littlerobotmedia.com/media/video/MSFT_GetReady_PowerPoint-Anniversario-V2-9x16.jpg" width="300" height="375" className="thumbnail-image video-size-vertical" />
						</div>

						{/* Muscle Mac: Social*/}
						<div className="thumbnail video-size-vertical">
							<div className="thumbnail-info video-size-vertical">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Muscle Mac<br /><span className="video-duration">(0:15)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_Figma className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div style={{ width: '40vh', height: 'auto' }}><h2>Muscle Mac</h2><video src="https://www.littlerobotmedia.com/media/video/muscle_mac_social_15-seconds.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/muscle_mac_social_15-seconds.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src="https://www.littlerobotmedia.com/media/video/muscle_mac_social_15-seconds.jpg" width="300" height="375" className="thumbnail-image video-size-vertical" />
						</div>

						{/* Muscle Mac: Offer */}
						<div className="thumbnail"  style={{ width: '300px', height: '300px' }}>
							<div className="thumbnail-info"style={{ width: '300px', height: '300px' }}>
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Muscle Mac: Loop<br /><span className="video-duration">(0:15)</span></div>
									<div className="thumbnail-description">Animation • Editing</div>
									<div className="container skills-used">
										<Icon_AfterEffects className="skillIcon" />
										<Icon_Illustrator className="skillIcon" />
										<Icon_Figma className="skillIcon" />
										<Icon_PhotoShop className="skillIcon" />
										<Icon_Premiere className="skillIcon" />
									</div>
								</div>
								<div onClick={() => onOpenModal(<div style={{ width: '40vh', height: 'auto' }}><h2>Muscle Mac: Loop </h2><video src="https://www.littlerobotmedia.com/media/video/MM-Black-Friday.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/MM-Black-Friday.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src="https://www.littlerobotmedia.com/media/video/MM-Black-Friday.jpg" width="300" height="300" className="thumbnail-image" />
						</div>

						{/* Discover: PiggyBank */}
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
								<div onClick={() => onOpenModal(<div style={{ width: '40vh', height: 'auto' }}><h2>Discover: PiggyBank</h2><video src="https://www.littlerobotmedia.com/media/video/discover_piggybank.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/discover_piggybank.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb5} width="250" height="375" className="thumbnail-image" />
						</div>

						{/* Discover: Basketball */}
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
								<div onClick={() => onOpenModal(<div><h2>Discover: Basketball</h2><video src="https://www.littlerobotmedia.com/media/video/discover_basketball.mp4" type="video/mp4" autoPlay loop controls width="auto" min-width="100%" height="20%" background="cover"></video></div>, "https://www.littlerobotmedia.com/media/video/discover_basketball.mp4", false)} className="thumbnail-button">View</div>
							</div>
							<img src={thumb4} width="300" height="250" className="thumbnail-image video-size" />
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