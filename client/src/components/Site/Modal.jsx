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

	// Animate in after render
	useEffect(() => {
		if (shouldRender && backdropRef.current && contentRef.current) {
			gsap.fromTo(backdropRef.current,
				{ autoAlpha: 0 },
				{ autoAlpha: 1, duration: 0.3, ease: "power2.out" }
			);
			gsap.fromTo(contentRef.current,
				{ scale: 0.8, autoAlpha: 0, y: 20 },
				{ scale: 1, autoAlpha: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
			);
		}
	}, [shouldRender]);

	// Access iframe's maintl timeline
	useEffect(() => {
		console.log("iframe useEffect - isOpen:", isOpen, "src:", src);
		if (!isOpen || !src) {
			console.log("Exiting early - no isOpen or src");
			return;
		}

		// Wait for next render cycle to ensure iframe is in DOM
		const timeoutId = setTimeout(() => {
			// Get reference to the iframe
			const iframe = document.querySelector('.modal-content iframe');
			console.log("Found iframe element:", iframe);

			if (!iframe) {
				console.warn("Iframe still not found after timeout");
				return;
			}

			// Wait for iframe to load
			const handleIframeLoad = () => {
				console.log("handleIframeLoad!");
				try {
					// Access the iframe's window and get maintl
					const iframeWindow = iframe.contentWindow;
					console.log("iframeWindow:", iframeWindow);
					console.log("All window properties:", Object.keys(iframeWindow));
					console.log("Looking for maintl:", iframeWindow.maintl);

					const gsapTL = iframeWindow.maintl;

					if (gsapTL) {
						console.log("Got maintl from iframe:", gsapTL);
						console.log("Timeline duration:", gsapTL.duration());
						console.log("Timeline progress:", gsapTL.progress());

						let isPlaying = gsapTL.isActive();
						const scrubber = document.getElementById("scrubber");
						const totalProgressEl = document.getElementById("totalProgress");
						console.log("Scrubber element:", scrubber);

						// Pause the iframe timeline so we can control it
						gsapTL.pause();

						// Update scrubber based on iframe timeline
						const update = () => {
							// const progress = gsapTL.progress() * 100;
							// scrubber.value = progress;
							const progress = scrubber.value = gsapTL.progress() * 100;
							// const progress = gsapTL.progress() * 100;
							console.log("Update called - progress:", progress);

							if (progress >= 100) {
								isPlaying = false;
								gsap.set(".pause_circle", { autoAlpha: 0 });
								gsap.set(".play_circle", { autoAlpha: 1 });
							}

							if (totalProgressEl) {
								totalProgressEl.textContent = gsapTL.time().toFixed(2) + " / " + gsapTL.duration().toFixed(2);
							}
						}

						// Add ticker to update scrubber as timeline plays
						gsap.ticker.add(update);

						// Add scrubber interaction
						const handleScrubberInput = (e) => {
							const progress = parseFloat(e.target.value) / 100;
							gsapTL.progress(progress);
							console.log("Scrubbing to:", progress);
						};

						scrubber.addEventListener('input', handleScrubberInput);

						// Start the timeline
						gsapTL.play();

						console.log("Connected maintl to scrubber with ticker");
						console.log("Timeline paused, then played");

						// Cleanup when modal closes
						return () => {
							gsap.ticker.remove(update);
							scrubber.removeEventListener('input', handleScrubberInput);
						};
					} else {
						console.warn("maintl not found in iframe window");
						console.log("Available properties:", Object.keys(iframeWindow).filter(k => k.includes('tl') || k.includes('timeline')));
					}
				} catch (error) {
					console.error("Cannot access iframe content:", error);
					// This will fail if iframe is cross-origin
				}
			};

			iframe.addEventListener('load', handleIframeLoad);

			// Cleanup function
			return () => {
				iframe.removeEventListener('load', handleIframeLoad);
			};
		}, 0);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isOpen, src]); if (!shouldRender) return null;

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

			<div ref={backdropRef} className="modal-backdrop" onClick={onClose}>

				<button className="modal-close-btn" onClick={onClose}>×</button>

				<div ref={contentRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
					{children}

					<div className='scrubber-container scrub-top'>
						<input className="scrubber" id="scrubber" type="range" min="0" max="100" defaultValue="0"></input>
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
		</>
	);
};

export default Modal;