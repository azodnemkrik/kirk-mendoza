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

const SampleBanners = ({ id, className, onOpenModal, onUserInteraction }) => {

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	const trackAndOpenModal = (interactionLabel, content, src, shouldShowScrubber = false) => {
		if (onUserInteraction) {
			onUserInteraction(interactionLabel);
		}
		onOpenModal(content, src, shouldShowScrubber);
	}

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>


				<div className="banners-container label-container">
					<h1 onClick={() => { handleCardClick(1) }} className={`section-label section-label-banners`}><div>Banners<span className="material-symbols-outlined asIcon">image_inset</span></div></h1>
				</div>

				<div className="banners-container2 section-container">

					<p>
						Most banners are built from scratch and hand-coded using techniques that keep files lean for fast, smooth performance.
I avoid bloated tools so each piece feels intentional, polished, and far from cookie-cutter.
					</p>
					<p><span className="h2-style light-blue">Interactive Ads</span></p>
					<div className="section-content">

						{/* XBox */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">XBox</div>
									<div className="thumbnail-description">Animation • Development<br />Editing • Project Management</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_PhotoShop className="" />
										<Icon_Premiere className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: XBox 160x600", <div className="v-container"><h2 className="view-horizontal-text">XBox</h2><iframe src="/banners/xbox/xbox_titan-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/xbox/xbox_titan-160x600/index.html", true)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: XBox 300x250", <div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/xbox/xbox_titan-300x250/index.html", true)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: XBox 300x600", <div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/xbox/xbox_titan-300x600/index.html", true)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: XBox 728x90", <div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/xbox/xbox_titan-728x90/index.html", true)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb5} width="300" height="250" className="thumbnail-image" />
						</div>
						
						{/* Coca-Cola */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Coca-Cola</div>
									<div className="thumbnail-description">Design • Animation<br/>Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Illustrator className="" />
										<Icon_Figma className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Coca-Cola 160x600", <div className="v-container"><h2 className="view-horizontal-text">Coca-Cola</h2><iframe src="/banners/coca_cola/coca_cola-share-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/coca_cola/coca_cola-share-160x600/index.html", false)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Coca-Cola 300x250", <div><h2>Coca-Cola</h2><iframe src="/banners/coca_cola/coca_cola-share-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/coca_cola/coca_cola-share-300x250/index.html", false)}>300x250</div>
										</div>
									</div>
								</div>
							</div>
							<img src="/banners/coca_cola/coca_cola-share-300x250.jpg" width="300" height="250" className="thumbnail-image" />
						</div>
						
						{/* Apple Watch */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Apple Watch</div>
									<div className="thumbnail-description">Design • Animation<br/>Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_PhotoShop className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Apple Watch 300x600", <div><h2>Apple Watch</h2><iframe src="/banners/apple/apple_watch-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/apple/apple_watch-300x600/index.html", false)}>300x600</div>
										</div>
									</div>
								</div>
							</div>
							<img src="/banners/apple/apple_watch-300x600.jpg" width="300" height="600" className="thumbnail-image" />
						</div>
						
						{/* Visit Mississippi */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Visit<br />Mississippi</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Illustrator className="" />
										<Icon_Figma className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Visit Mississippi 160x600", <div className="v-container"><h2 className="view-horizontal-text">Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-160x600/index.html", false)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Visit Mississippi 300x250", <div><h2>Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-300x250/index.html", false)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Visit Mississippi 300x600", <div><h2>Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-300x600/index.html", false)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: Visit Mississippi 728x90", <div><h2>Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-728x90/index.html", false)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb1} width="300" height="250" className="thumbnail-image" />
						</div>
						
						{/* MVB Bank */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">MVB: Market Stats</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Illustrator className="" />
										<Icon_Figma className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: MVB Market Stats 160x600", <div className="v-container"><h2 className="view-horizontal-text">MVB: Market Stats</h2><iframe src="/banners/mvb/market_stats-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/mvb/market_stats-160x600/index.html", false)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: MVB Market Stats 300x250", <div><h2>MVB: Market Stats</h2><iframe src="/banners/mvb/market_stats-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/mvb/market_stats-300x250/index.html", false)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: MVB Market Stats 300x600", <div><h2>MVB: Market Stats</h2><iframe src="/banners/mvb/market_stats-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/mvb/market_stats-300x600/index.html", false)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: MVB Market Stats 728x90", <div><h2>MVB: Market Stats</h2><iframe src="/banners/mvb/market_stats-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/mvb/market_stats-728x90/index.html", false)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src="/banners/mvb/market_stats-300x250.jpg" width="300" height="250" className="thumbnail-image" />
						</div>

						{/* Refocus */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Refocus</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Refocus 160x600", <div className="v-container"><h2 className="view-horizontal-text">Refocus</h2><iframe src="/banners/refocus/seller_benefits-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/refocus/seller_benefits-160x600/index.html", false)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Refocus 300x250", <div><h2>Refocus</h2><iframe src="/banners/refocus/seller_benefits-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/refocus/seller_benefits-300x250/index.html", false)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Refocus 300x600", <div><h2>Refocus</h2><iframe src="/banners/refocus/seller_benefits-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/refocus/seller_benefits-300x600/index.html", false)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: Refocus 728x90", <div><h2>Refocus</h2><iframe src="/banners/refocus/seller_benefits-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/refocus/seller_benefits-728x90/index.html", false)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb3} width="300" height="250" className="thumbnail-image" />
						</div>
					</div>

					<p>
						<span className="h2-style light-blue"> Animated Ads </span><br />
					</p>

					<div className="section-content">
						{/* Microsoft */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Microsoft</div>
									<div className="thumbnail-description">Animation • Development<br />Project Management</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_XD className="" />
										<Icon_PhotoShop className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Microsoft 160x600", <div className="v-container"><h2 className="view-horizontal-text">Microsoft</h2><iframe src="/banners/microsoft/microsoft_neutral-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/microsoft/microsoft_neutral-160x600/index.html", true)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Microsoft 300x250", <div><h2>Microsoft</h2><iframe src="/banners/microsoft/microsoft_neutral-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/microsoft/microsoft_neutral-300x250/index.html", true)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Microsoft 300x600", <div><h2>Microsoft</h2><iframe src="/banners/microsoft/microsoft_neutral-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/microsoft/microsoft_neutral-300x600/index.html", true)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: Microsoft 728x90", <div><h2>Microsoft</h2><iframe src="/banners/microsoft/microsoft_neutral-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/microsoft/microsoft_neutral-728x90/index.html", true)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb4} width="300" height="250" className="thumbnail-image" />
						</div>

						{/* Borden */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Borden<br />Cheese</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_PhotoShop className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Borden Cheese 160x600", <div><h2 className="view-horizontal-text">Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/borden/crisps_n_cubes-160x600/index.html", false)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Borden Cheese 300x250", <div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/borden/crisps_n_cubes-300x250/index.html", false)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Borden Cheese 300x600", <div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/borden/crisps_n_cubes-300x600/index.html", false)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: Borden Cheese 728x90", <div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/borden/crisps_n_cubes-728x90/index.html", false)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb2} width="300" height="250" className="thumbnail-image" />
						</div>

						{/* Discover: Storefronts */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover: Storefronts</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover Storefronts 160x600", <div className="v-container"><h2 className="view-horizontal-text">Discover: Storefronts</h2><iframe src="/banners/discover/storefronts-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/discover/storefronts-160x600/index.html", true)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover Storefronts 300x250", <div><h2>Discover: Storefronts</h2><iframe src="/banners/discover/storefronts-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/storefronts-300x250/index.html", true)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover Storefronts 300x600", <div><h2>Discover: Storefronts</h2><iframe src="/banners/discover/storefronts-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/discover/storefronts-300x600/index.html", true)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: Discover Storefronts 728x90", <div><h2>Discover: Storefronts</h2><iframe src="/banners/discover/storefronts-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/discover/storefronts-728x90/index.html", true)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb6} width="300" height="250" className="thumbnail-image" />
						</div>

						{/* Discover: Cityscapes */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover: Cityscapes</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover Cityscapes 160x600", <div className="v-container"><h2 className="view-horizontal-text">Discover: Cityscapes</h2><iframe src="/banners/discover/cityscapes-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/discover/cityscapes-160x600/index.html", true)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover Cityscapes 300x250", <div><h2>Discover: Cityscapes</h2><iframe src="/banners/discover/cityscapes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/cityscapes-300x250/index.html", true)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover Cityscapes 300x600", <div><h2>Discover: Cityscapes</h2><iframe src="/banners/discover/cityscapes-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/discover/cityscapes-300x600/index.html", true)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: Discover Cityscapes 728x90", <div><h2>Discover: Cityscapes</h2><iframe src="/banners/discover/cityscapes-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/discover/cityscapes-728x90/index.html", true)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb7} width="300" height="250" className="thumbnail-image" />
						</div>

						{/* Discover: No */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Discover: No</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_Figma className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover No 300x250", <div><h2>Discover: No</h2><iframe src="/banners/discover/stackable-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/stackable-300x250/index.html", true)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Discover No 300x600", <div><h2>Discover: No</h2><iframe src="/banners/discover/stackable-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/discover/stackable-300x600/index.html", true)}>300x600</div>
										</div>
									</div>
								</div>
							</div>
							<img src={thumb8} width="300" height="250" className="thumbnail-image" />
						</div>

						{/* Plugra */}
						<div className="thumbnail">
							<div className="thumbnail-info">
								<div className="thumbnail-info-top">
									<div className="thumbnail-info-title">Plugra</div>
									<div className="thumbnail-description">Animation • Development</div>
									<div className="container skills-used">
										<Icon_HTML className="" />
										<Icon_CSS className="" />
										<Icon_JavaScript className="" />
										<Icon_GSAP className=" gsap" />
										<Icon_PhotoShop className="" />
									</div>
									<div>
										<div className="thumbnail-view-a-size">Select a Size</div>
										<div className="thumbnail-resizes-container">
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Plugra 160x600", <div className="v-container"><h2 className="view-horizontal-text">Plugra</h2><iframe src="/banners/plugra/retail-160x600/index.html" width="160" height="600"></iframe></div>, "/banners/plugra/retail-160x600/index.html", false)}>160x600</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Plugra 300x250", <div><h2>Plugra</h2><iframe src="/banners/plugra/retail-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/plugra/retail-300x250/index.html", false)}>300x250</div>|
											<div className="thumbnail-resize" onClick={() => trackAndOpenModal("Banner View: Plugra 300x600", <div><h2>Plugra</h2><iframe src="/banners/plugra/retail-300x600/index.html" width="300" height="600"></iframe></div>, "/banners/plugra/retail-300x600/index.html", false)}>300x600</div><span className="view-horizontal">|</span>
											<div className="thumbnail-resize view-horizontal" onClick={() => trackAndOpenModal("Banner View: Plugra 728x90", <div><h2>Plugra</h2><iframe src="/banners/plugra/retail-728x90/index.html" width="728" height="90"></iframe></div>, "/banners/plugra/retail-728x90/index.html", false)}>728x90</div>
										</div>
									</div>
								</div>
							</div>
							<img src="/banners/plugra/retail-300x250.jpg" width="300" height="250" className="thumbnail-image" />
						</div>

						<Peekaboo id="peekaboo-container" onUserInteraction={onUserInteraction} onClick={() => onOpenModal(<div><h2>IRI: Digital Greeting Card</h2><iframe src="https://www.littlerobotmedia.com/media/flash/iri_christmas/index.html" style={{ display: "block", width: "100vw", height: "100vh", border: "none", margin: 0, overflow: "hidden" }} allowFullScreen className="iri" ></iframe></div>, "https://www.littlerobotmedia.com/media/flash/iri_christmas/index.html", false)} />
					</div>
				</div >
			</div >
		</>
	)
}

export default SampleBanners;