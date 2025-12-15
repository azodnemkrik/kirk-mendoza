import { gsap } from "gsap/dist/gsap"
import { useEffect, useState, useRef } from "react"

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const tlRef = useRef(null);

	useEffect(() => {
		// Initialize timeline after component mounts
		tlRef.current = gsap.timeline({ paused: true })
			.add("frame1")
			.to("#bar1", .25, { y: 15, ease: "power2.in" }, "frame1")
			.to("#bar3", .25, { y: -15, ease: "power2.in" }, "frame1")
			.to("#menu", .5, { rotate: 180, transformOrigin: "50% 50%", ease: "power2.inOut" }, "frame1")
			// .add("frame2", "+=0")
			.to("#bar1", .25, { rotation: 45, ease: "power2.out", transformOrigin: "50% 50%" }, "frame1+=.25")
			.to("#bar2", .25, { autoAlpha: 0, ease: "power2.out", transformOrigin: "50% 50%" }, "frame1+=.25")
			.to("#bar3", .25, { rotation: -45, ease: "power2.out", transformOrigin: "50% 50%" }, "frame1+=.25");
	}, []);

	useEffect(() => {
		if (!tlRef.current) return;
		
		if (isOpen) {
			// Show X.
			tlRef.current.play();
		} else {
			// Show 3 bars.
			tlRef.current.reverse();
		}
	}, [isOpen]);

	return (
		<svg id="hamburger-menu" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
			<g id="menu">
				<line id="bar3" x1="1" y1="36" x2="41" y2="36" style={{ fill: "none", stroke: "#ccc", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2px" }} />
				<line id="bar2" x1="1" y1="21" x2="41" y2="21" style={{ fill: "none", stroke: "#ccc", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2px" }} />
				<line id="bar1" x1="1" y1="6" x2="41" y2="6" style={{ fill: "none", stroke: "#ccc", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2px" }} />
			</g>
		</svg>
	);
}

export default HamburgerMenu