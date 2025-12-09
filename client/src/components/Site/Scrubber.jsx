import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const Scrubber = ({ timeline }) => {
	const scrubberRef = useRef(null);
	const updateRef = useRef(null);
	const isPlayingRef = useRef(true); // Use ref to track playing state

	useEffect(() => {
		if (!timeline) return;

		const scrubber = scrubberRef.current;
		const totalProgressEl = document.getElementById("totalProgress");

		console.log("Scrubber mounted with timeline:", timeline);
		console.log("Timeline duration:", timeline.duration());

		// Pause the timeline so we can control it
		timeline.pause();

		// Update scrubber based on timeline progress
		const update = () => {
			const progress = timeline.progress() * 100;
			scrubber.value = progress;

			if (progress >= 100) {
				gsap.set(".pause_circle", { autoAlpha: 0 });
				gsap.set(".play_circle", { autoAlpha: 1 });
				isPlayingRef.current = false;
			}

			if (totalProgressEl) {
				totalProgressEl.textContent = timeline.time().toFixed(2) + " / " + timeline.duration().toFixed(2);
			}
		};

		updateRef.current = update;

		// Add ticker to update scrubber as timeline plays
		gsap.ticker.add(update);

		// Add scrubber interaction
		const handleScrubberInput = (e) => {
			const progress = parseFloat(e.target.value) / 100;
			timeline.progress(progress);
			console.log("Scrubbing to:", progress);
		};

		scrubber.addEventListener('input', handleScrubberInput);

		// Play/Pause button handler
		const playPauseBtn = document.getElementById("playPauseBtn");
		const handlePlayPause = () => {
			console.log("isPlaying:", isPlayingRef.current);
			if (!isPlayingRef.current) {
				// If at end, restart
				if (scrubber.value >= 100) {
					timeline.restart();
				} else {
					timeline.play();
				}
				isPlayingRef.current = true;
				gsap.set(".pause_circle", { autoAlpha: 1 });
				gsap.set(".play_circle", { autoAlpha: 0 });
			} else {
				timeline.pause();
				isPlayingRef.current = false;
				gsap.set(".pause_circle", { autoAlpha: 0 });
				gsap.set(".play_circle", { autoAlpha: 1 });
			}
			console.log("isPlaying:", isPlayingRef.current);
		};

		playPauseBtn.addEventListener("click", handlePlayPause);

		// Start the timeline
		timeline.play();
		isPlayingRef.current = true;
		gsap.set(".pause_circle", { autoAlpha: 1 });
		gsap.set(".play_circle", { autoAlpha: 0 });

		console.log("Scrubber connected to timeline");

		// Cleanup
		return () => {
			gsap.ticker.remove(update);
			scrubber.removeEventListener('input', handleScrubberInput);
			playPauseBtn.removeEventListener('click', handlePlayPause);
		};
	}, [timeline]);

	return (
		<div className='scrubber-container scrub-top'>
			<input 
				ref={scrubberRef}
				className="scrubber" 
				id="scrubber" 
				type="range" 
				min="0" 
				max="100" 
				defaultValue="0"
			/>
			<div className='scrub-bottom'>
				<div className='playPauseBtn' id="playPauseBtn">
					<span className="float material-symbols-outlined play_circle"> play_circle </span>
					<span className="float material-symbols-outlined pause_circle"> pause_circle </span>
				</div>
				<div id="totalProgress">0.0 / 0.0</div>
			</div>
		</div>
	);
};

export default Scrubber;
