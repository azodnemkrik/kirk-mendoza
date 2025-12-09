import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";

const Modal = ({ isOpen, onClose, src, children }) => {
	const backdropRef = useRef(null);
	const contentRef = useRef(null);
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		if (isOpen) {
			// Show the modal
			setShouldRender(true);

			// Animate in
			gsap.to(backdropRef.current, .3, { autoAlpha: 1, ease: "power2.out" });
			gsap.from(contentRef.current, { autoAlpha: 0, scale: 0.8, autoAlpha: 0, y: 20, ease: "back.out" });
		} else if (shouldRender) {
			// Animate out
			gsap.to(backdropRef.current, {
				autoAlpha: 0,
				duration: 0.25,
				ease: "power2.in"
			});
			gsap.to(contentRef.current, {
				scale: 0.8,
				autoAlpha: 0,
				y: 20,
				duration: 0.25,
				ease: "power2.in",
				onComplete: () => setShouldRender(false)
			});
		}
	}, [isOpen, shouldRender]);

	if (!shouldRender) return null;

	let isPlaying = true;
	const gsapTL = { src };

	const scrubberTL = gsap.timeline({});
	scrubberTL.add(gsapTL, 0);

	const scrubber = document.getElementById("scrubber");

	const update = () => {
		scrubber.value = scrubberTL.totalProgress() * 100;
		console.log(scrubber.value);
		if (scrubber.value >= 100) {
			isPlaying = false;
			gsap.set(".pause_circle", { autoAlpha: 0 });
			gsap.set(".play_circle", { autoAlpha: 1 });
		}
		totalProgress.textContent = scrubberTL.time().toFixed(2) + " / " + scrubberTL.duration().toFixed(2);
	}

	return (
		<div ref={backdropRef} className="modal-backdrop" onClick={onClose}>
			<div ref={contentRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close-btn" onClick={onClose}>×</button>
				{children}


				<div className='scrubber-container scrub-top'>
					<input className="scrubber" id="scrubber" type="range" min="0" max="100" value="0"></input>
					<div className='scrub-bottom'>
						<div className='playPauseBtn' id="playPauseBtn">
							<span className="float material-symbols-outlined play_circle"> play_circle </span>
							<span className="float material-symbols-outlined pause_circle"> pause_circle </span>
						</div>
						<div id="totalProgress">totalProgress <span>0.0</span></div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Modal;