import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Scrubber from "./Scrubber";

// Helper to detect if src is a video file
const isVideoFile = (src) => {
	if (!src) return false;
	const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.m4v'];
	const lowerSrc = src.toLowerCase();
	return videoExtensions.some(ext => lowerSrc.includes(ext));
};

const Modal = ({ isOpen, onClose, src, children, showScrubber = true }) => {
	const backdropRef = useRef(null);
	const contentRef = useRef(null);
	const [shouldRender, setShouldRender] = useState(false);
	const [iframeTimeline, setIframeTimeline] = useState(null);

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
				{ autoAlpha: 1, duration: 0.3, ease: "power2.inOut" }
			);
			gsap.fromTo(contentRef.current,
				{ scale: 0.8, autoAlpha: 0, y: 20 },
				{ scale: 1, autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.inOut" }
			);
		}
	}, [shouldRender]);

	// Access iframe's maintl timeline (skip for videos)
	useEffect(() => {
		console.log("iframe useEffect - isOpen:", isOpen, "src:", src);
		
		// Reset timeline state when src changes or modal closes
		setIframeTimeline(null);
		
		// Skip timeline detection for video files
		if (isVideoFile(src)) {
			console.log("Video file detected, skipping timeline detection");
			return;
		}
		
		if (!isOpen || !src) {
			console.log("Exiting early - no isOpen or src");
			return;
		}

		// Track timeouts and listeners for cleanup
		const timeoutIds = [];
		let iframeElement = null;
		let loadHandler = null;

		// Retry mechanism to find iframe (Safari needs more time)
		let attempts = 0;
		const maxAttempts = 10;
		
		const findIframe = () => {
			attempts++;
			console.log(`Attempt ${attempts} to find iframe...`);
			
			const iframe = document.querySelector('.modal-content iframe');
			
			if (iframe) {
				console.log("Found iframe element:", iframe);
				iframeElement = iframe;
				setupIframeListener(iframe);
			} else if (attempts < maxAttempts) {
				console.log("Iframe not found, retrying in 100ms...");
				const tid = setTimeout(findIframe, 100);
				timeoutIds.push(tid);
			} else {
				console.warn("Iframe not found after", maxAttempts, "attempts");
			}
		};
		
		const setupIframeListener = (iframe) => {

			// Function to check for maintl
			const checkForMaintlWithRetry = () => {
				console.log("checkForMaintlWithRetry started!");
				
				let maintlAttempts = 0;
				const maxMaintlAttempts = 20;
				
				const checkForMaintl = () => {
					maintlAttempts++;
					console.log(`Checking for maintl (attempt ${maintlAttempts}/${maxMaintlAttempts})`);
					
					try {
						// Access the iframe's window and get maintl
						const iframeWindow = iframe.contentWindow;
						console.log("iframeWindow:", iframeWindow);
						console.log("Looking for maintl:", iframeWindow.maintl);
						
						// Try to get maintl (might be undefined if using 'let' instead of 'var')
						let gsapTL = iframeWindow.maintl;
						
						// If not found, try to manually assign it to window for banners using 'let'
						if (!gsapTL && iframeWindow.document) {
							console.log("maintl not on window, checking if we can add it...");
							// Execute a small script in the iframe to expose maintl
							try {
								const script = iframeWindow.document.createElement('script');
								script.textContent = 'if (typeof maintl !== "undefined") { window.maintl = maintl; }';
								iframeWindow.document.body.appendChild(script);
								gsapTL = iframeWindow.maintl;
								console.log("After script injection, maintl:", gsapTL);
							} catch (e) {
								console.error("Failed to inject script:", e);
							}
						}

						if (gsapTL) {
							console.log("Got maintl from iframe:", gsapTL);
							console.log("Timeline duration:", gsapTL.duration());
							console.log("Timeline progress:", gsapTL.progress());
							
							// Set the timeline to state so Scrubber component can use it
							console.log("Setting iframeTimeline state...");
							setIframeTimeline(gsapTL);
							console.log("iframeTimeline state set!");
						} else if (maintlAttempts < maxMaintlAttempts) {
							console.log("maintl not found yet, retrying in 50ms...");
							const tid = setTimeout(checkForMaintl, 50);
							timeoutIds.push(tid);
						} else {
							console.warn("maintl not found in iframe window after max attempts");
							console.log("Available properties:", Object.keys(iframeWindow).filter(k => k.includes('tl') || k.includes('timeline')));
						}
					} catch (error) {
						console.error("Cannot access iframe content:", error);
						// This will fail if iframe is cross-origin
					}
				};
				
				checkForMaintl();
			};

			// Check if iframe is already loaded (cached)
			// readyState can be 'complete' or 'interactive' when already loaded
			const isAlreadyLoaded = iframe.contentDocument && 
				(iframe.contentDocument.readyState === 'complete' || 
				 iframe.contentDocument.readyState === 'interactive');
			
			console.log("Iframe readyState:", iframe.contentDocument?.readyState, "isAlreadyLoaded:", isAlreadyLoaded);
			
			if (isAlreadyLoaded) {
				// Iframe already loaded, check for maintl immediately
				console.log("Iframe already loaded, checking for maintl immediately");
				checkForMaintlWithRetry();
			}
			
			// Also add load listener for future loads or in case readyState check was wrong
			loadHandler = checkForMaintlWithRetry;
			iframe.addEventListener('load', loadHandler);
		};
		
		// Start looking for iframe after a short delay
		const initialTimeoutId = setTimeout(findIframe, 100);
		timeoutIds.push(initialTimeoutId);

		return () => {
			// Clear all pending timeouts
			timeoutIds.forEach(id => clearTimeout(id));
			// Remove load listener if it was added
			if (iframeElement && loadHandler) {
				iframeElement.removeEventListener('load', loadHandler);
			}
		};
	}, [isOpen, src]); if (!shouldRender) return null;

	return (
		<div ref={backdropRef} className="modal-backdrop" onClick={onClose} style={{ opacity: 0, visibility: 'hidden' }}>

				<button className="modal-close-btn" onClick={onClose}>×</button>

				<div ref={contentRef} className="modal-content" onClick={(e) => e.stopPropagation()} style={{ opacity: 0, visibility: 'hidden', transform: 'scale(0.8) translateY(20px)' }}>
					{children}
					{console.log("Rendering Modal - iframeTimeline:", iframeTimeline, "isVideo:", isVideoFile(src))}
					{showScrubber && !isVideoFile(src) && iframeTimeline ? (
						<Scrubber timeline={iframeTimeline} />
					) : showScrubber && !isVideoFile(src) && !iframeTimeline ? (
						<div style={{color: 'white', padding: '10px'}}>Waiting for timeline...</div>
					) : null}
				</div>

			</div>
	);
};

export default Modal;