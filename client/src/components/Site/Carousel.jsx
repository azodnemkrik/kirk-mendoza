import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null);
	const imageRefs = useRef([]);
	const isAnimating = useRef(false);

	const totalImages = images.length;

	// Initialize carousel
	useEffect(() => {
		if (imageRefs.current.length === 0) return;

		// Set initial positions - hide all except first
		imageRefs.current.forEach((img, index) => {
			if (index === 0) {
				gsap.set(img, { autoAlpha: 1, x: 0 });
			} else {
				gsap.set(img, { autoAlpha: 0, x: 100 });
			}
		});
	}, [images]);

	const goToSlide = (newIndex, direction = 'next') => {
		if (isAnimating.current || newIndex === currentIndex) return;
		
		isAnimating.current = true;

		const currentImg = imageRefs.current[currentIndex];
		const nextImg = imageRefs.current[newIndex];

		const timeline = gsap.timeline({
			onComplete: () => {
				isAnimating.current = false;
				setCurrentIndex(newIndex);
			}
		});

		// Determine animation direction
		const exitX = direction === 'next' ? -100 : 100;
		const enterX = direction === 'next' ? 100 : -100;

		// Animate current image out
		timeline.to(currentImg, {
			x: exitX,
			autoAlpha: 0,
			duration: 0.5,
			ease: "power2.inOut"
		}, 0);

		// Animate next image in
		timeline.fromTo(nextImg,
			{ x: enterX, autoAlpha: 0 },
			{ x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.inOut" },
			0
		);
	};

	const handlePrev = () => {
		const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
		goToSlide(newIndex, 'prev');
	};

	const handleNext = () => {
		const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
		goToSlide(newIndex, 'next');
	};

	const handleDotClick = (index) => {
		const direction = index > currentIndex ? 'next' : 'prev';
		goToSlide(index, direction);
	};

	return (
		<div className="carousel" ref={carouselRef}>
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
	);
};

export default Carousel;
