import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";

const Carousel = ({ images, onUserInteraction }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null);
	const imageRefs = useRef([]);
	const isAnimating = useRef(false);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	const totalImages = images.length;

	// Initialize carousel
	useEffect(() => {
		if (imageRefs.current.length === 0) return;

		// Set initial positions - hide all except first
		imageRefs.current.forEach((img, index) => {
			if (index === 0) {
				gsap.set(img, { opacity: 1, xPercent: 0 });
			} else {
				gsap.set(img, { opacity: 0, xPercent: 100 });
			}
		});
	}, [images]);

	const goToSlide = (newIndex, direction = 'next') => {
		if (isAnimating.current || newIndex === currentIndex) return;

		isAnimating.current = true;

		const currentImg = imageRefs.current[currentIndex];
		const nextImg = imageRefs.current[newIndex];

		// Update the current index immediately for UI feedback
		setCurrentIndex(newIndex);

		const timeline = gsap.timeline({
			onComplete: () => {
				isAnimating.current = false;
			}
		});

		// Determine animation direction - use full width (100%)
		const exitXPercent = direction === 'next' ? -100 : 100;
		const enterXPercent = direction === 'next' ? 100 : -100;

		// Animate current image out
		timeline.to(currentImg, {
			xPercent: exitXPercent,
			duration: 0.5,
			ease: "power2.inOut"
		}, 0);

		// Animate next image in
		timeline.fromTo(nextImg,
			{ xPercent: enterXPercent, opacity: 1 },
			{ xPercent: 0, duration: 0.5, ease: "power2.inOut" },
			0
		);
	};

	const handlePrev = () => {
		const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
		if (onUserInteraction) {
			onUserInteraction(`Carousel Click: Prev (to ${newIndex + 1})`);
		}
		goToSlide(newIndex, 'prev');
	};

	const handleNext = () => {
		const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
		if (onUserInteraction) {
			onUserInteraction(`Carousel Click: Next (to ${newIndex + 1})`);
		}
		goToSlide(newIndex, 'next');
	};

	const handleDotClick = (index) => {
		const direction = index > currentIndex ? 'next' : 'prev';
		if (onUserInteraction) {
			onUserInteraction(`Carousel Click: Dot ${index + 1}`);
		}
		goToSlide(index, direction);
	};

	// Touch event handlers
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (isAnimating.current) return;

		const swipeThreshold = 50; // Minimum distance for a swipe
		const diffX = touchStartX.current - touchEndX.current;

		if (Math.abs(diffX) > swipeThreshold) {
			if (diffX > 0) {
				if (onUserInteraction) {
					onUserInteraction("Carousel Swipe: Next");
				}
				// Swiped left - go to next
				handleNext();
			} else {
				if (onUserInteraction) {
					onUserInteraction("Carousel Swipe: Prev");
				}
				// Swiped right - go to prev
				handlePrev();
			}
		}

		// Reset values
		touchStartX.current = 0;
		touchEndX.current = 0;
	};

	return (
		<div className="carousel-wrapper">
			<div
				className="carousel"
				ref={carouselRef}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div className="carousel-inner">
					{images.map((image, index) => (
						<div
							key={index}
							ref={(el) => (imageRefs.current[index] = el)}
							className="carousel-slide"
						>
							<img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
						</div>
					))}
				</div>

				{/* Navigation Arrows */}
				<button
					className="carousel-arrow carousel-arrow-left"
					onClick={handlePrev}
					aria-label="Previous slide"
				>
					<span className="material-symbols-outlined">chevron_left</span>
				</button>
				<button
					className="carousel-arrow carousel-arrow-right"
					onClick={handleNext}
					aria-label="Next slide"
				>
					<span className="material-symbols-outlined">chevron_right</span>
				</button>

				{/* Dot Navigation */}
				<div className="carousel-dots">
					{images.map((_, index) => (
						<button
							key={index}
							className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
							onClick={() => handleDotClick(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
