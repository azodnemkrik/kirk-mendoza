import { useEffect, useState } from "react";
import React from "react";
import thumb1 from '../../banners/visit_mississippi/visit_mississippi-300x250.jpg';
import thumb2 from '../../banners/discover/stackable-300x250.jpg';
import thumb3 from '../../banners/refocus/30-percent-more-film-300x250.jpg';
import thumb4 from '../../banners/microsoft/microsoft_neutral-300x250.jpg';
import thumb5 from '../../banners/xbox/xbox_titan-300x250.jpg';
import thumb6 from '../../banners/borden/crisps_n_cubes-300x250.jpg';

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
						<p>These are some banner examples. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, voluptatum.</p>
						{/* Banner Grid */}
						<div className="thumbnails-container">
							<img onClick={() => { }} src={thumb1} width="300" height="250" className="thumbnail"/>
							<img onClick={() => { }} src={thumb2} width="300" height="250" className="thumbnail"/>
							<img onClick={() => { }} src={thumb3} width="300" height="250" className="thumbnail"/>
							<img onClick={() => { }} src={thumb4} width="300" height="250" className="thumbnail"/>
							<img onClick={() => { }} src={thumb5} width="300" height="250" className="thumbnail"/>
							<img onClick={() => { }} src={thumb6} width="300" height="250" className="thumbnail"/>
						</div>

					</div>

					{/* Card 2 */}
					<div className={`card card-2 ${activeCard !== 2 ? 'hidden' : ''}`}>
						<p>Here's stuff about videos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit asperiores ipsa repellendus alias earum dicta cupiditate natus odio suscipit.</p>
						<video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video>
					</div>

					{/* Card 3 */}
					<div className={`card card-3 ${activeCard !== 3 ? 'hidden' : ''}`}>
						<p>Here's stuff about development.</p>
						<p>Remember Flash? See some classic work.</p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default StuffIDone;