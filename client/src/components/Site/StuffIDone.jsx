import { useEffect, useState } from "react";
import React from "react";

const StuffIDone = ({ id, className }) => {

	useEffect(() => {

	})

	const [activeCard, setActiveCard] = useState(1);

	const handleCardClick = (cardNumber) => {
		setActiveCard(cardNumber);
	}

	return (
		<div id={id} className={`centered-container stuff-i-done-BG ${className}`}>
			<div className="stuff-i-done-container">
				<h1>Stuff I've Done</h1>
				<div className="three-cards-labels-container">
					<h2 onClick={() => { handleCardClick(1) }} className="card-label card-label-1">Banners</h2>
					<h2 onClick={() => { handleCardClick(2) }} className="card-label card-label-2">Video</h2>
					<h2 onClick={() => { handleCardClick(3) }} className="card-label card-label-3">Development</h2>

				</div>
				<div className="three-cards-container">

					{/* <div className="card card-1 hidden"> */}
					<div className={`card card-1 ${activeCard !== 1 ? 'hidden' : ''}`}>
						<p>
							Here's stuff about banners.
						</p>
						<iframe src="/banners/discover/cityscapes-300x250/index.html" width="300" height="250"></iframe>
					</div>
					<div className={`card card-2 ${activeCard !== 2 ? 'hidden' : ''}`}>
						<p>
							Here's stuff about videos.
						</p>
						<video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video>
					</div>
					<div className={`card card-3 ${activeCard !== 3 ? 'hidden' : ''}`}>
						<p>
							Here's stuff about development.
						</p>
						<p>Remember Flash? See some classic work.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StuffIDone;