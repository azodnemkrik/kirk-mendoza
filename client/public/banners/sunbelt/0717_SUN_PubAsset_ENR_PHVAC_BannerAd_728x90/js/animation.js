let maintl
var isExpanded = false
let seekStart = 0 // What second to start the animation from - useful for development.\
let isAnimating = false
let currentPage = 2
let previousPage = 0

// Infinite scroll variables
let itemsWrapper
let itemContainers
let scrollPosition = 0
let scrollSpeed = 0
let targetScrollSpeed = 0
let itemWidth = 130
let totalItems = 7
let totalItemsWidth = 0
let scrollDirection = 1
let isScrolling = false
let animationFrame
let stage

// Google Enabler variables
Enabler.setExpandingPixelOffsets("0", "0", "728", "315")

window.onload = function () {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}

function enablerInitHandler() {

	// Get stage element once DOM is loaded
	stage = document.querySelector('.stage')
	btnLeft = document.querySelector('.btnLeft')
	btnRight = document.querySelector('.btnRight')
	itemsWrapper = document.querySelector('.items-wrapper')


	// -- <DETECT FOR TOUCH OR DESKTOP> -- \\
	var myEvent = ('ontouchstart' in document.documentElement) ? 'touchend' : 'click'
	console.log("myEvent: " + myEvent)
	if (myEvent == 'touchend') {
		// Mobile
		// TweenMax.set(".arrowBtn" , { autoAlpha: 0 })
	}

	function getSwipeDirection() {
		var movementX = swipeFunc.touches["touchmove"].x - swipeFunc.touches["touchstart"].x
		var movementY = swipeFunc.touches["touchmove"].y - swipeFunc.touches["touchstart"].y
		console.log(movementX, movementY)
		if (Math.abs(movementX) < 30 && Math.abs(movementY) < 30) {
			console.log('none')
			return 'none'
		}
		if (movementX <= -30 && Math.abs(movementY) < 30) {
			console.log('RIGHT')
			return 'RIGHT'
		}
		if (movementX >= 30 && Math.abs(movementY) < 30) {
			console.log('LEFT')
			return 'LEFT'
		}
	}

	// -- <SWIPE FUNCTIONS> -- \\
	var swipeFunc = {
		touches: {
			"touchstart": { "x": -1, "y": -1 },
			"touchmove": { "x": -1, "y": -1 },
			"touchend": false,
			"direction": "undetermined"
		},
		touchHandler: function (event) {
			var touch
			if (typeof event !== 'undefined') {
				event.preventDefault()
				if (typeof event.touches !== 'undefined') {
					touch = event.touches[0]
					switch (event.type) {
						case 'touchstart':
							swipeFunc.touches[event.type].x = touch.pageX
							swipeFunc.touches[event.type].y = touch.pageY
							touching = true
						case 'touchmove':
							swipeFunc.touches[event.type].x = touch.pageX
							swipeFunc.touches[event.type].y = touch.pageY
							break
						case 'touchend':
							touching = false
							if (getSwipeDirection() === 'LEFT') {
								onBtnClick({ target: btnLeft })
							}
							if (getSwipeDirection() === 'RIGHT') {
								onBtnClick({ target: btnRight })
							}
							break
						default:
							break
					}
				}
			}
		},
		init: function () {
			document.querySelector('.stage').addEventListener('touchstart', swipeFunc.touchHandler, false)
			document.querySelector('.stage').addEventListener('touchmove', swipeFunc.touchHandler, false)
			document.querySelector('.stage').addEventListener('touchend', swipeFunc.touchHandler, false)
		}
	}
	swipeFunc.init()

	setupItemPositions()

	function onBtnClick(e) {
		if (!isAnimating) {
			isAnimating = true

			console.log(e.target)
			previousPage = currentPage
			if (e.target == btnRight) {
				currentPage++
				if (currentPage > 6) {
					currentPage = 0
				}
			}
			if (e.target == btnLeft) {
				currentPage--
				if (currentPage < 0) {
					currentPage = 6
				}
			}
			console.log("currentPage", currentPage)

			updateLabels()

			const swipeDirection = getSwipeDirection();
			updateCarousel(swipeDirection)
		}
	}

	function updateLabels() {

		// ALL to RESET
		gsap.to(".label-container", 0.3, { autoAlpha: 0, scale: .5, ease: Back.easeIn })
		let allItems = document.querySelectorAll(".vehicle")
		allItems.forEach((item) => {
			item.classList.remove("selected")
		})

		let curCount = currentPage + 1
		let curLabel = document.querySelectorAll(".label-container-" + curCount)
		let curItem = document.querySelectorAll(".item-" + curCount)
		if (myEvent == 'touchend') {
			curItem.forEach(item => item.classList.add("selected"))
		}
		gsap.to(curLabel, 0.3, { autoAlpha: 1, scale: 1, ease: Back.easeOut })

	}

	function updateCarousel(direction) {
		// const newX = currentPage * itemWidth 
		let newX
		switch (direction) {
			case "LEFT":
				newX = itemWidth
				break;

			case "RIGHT":
				newX = itemWidth * -1
				break;
		}
		scrollPosition += newX
		console.log("updateCarousel", direction, newX, scrollPosition)
		gsap.to(".items-wrapper", .5, {
			x: scrollPosition, onComplete: () => {
				checkForJump()
				isAnimating = false
			}
		})
	}

	function checkForJump() {
		if ((scrollPosition == 0) || (scrollPosition == totalItemsWidth * -2)) {
			scrollPosition = -totalItemsWidth
			gsap.set(itemsWrapper, { x: scrollPosition })
			console.log("RESET SCROLLPOSITION")
		}
	}

	// GSAP Timeline
	maintl = gsap.timeline();

	maintl
		.set('.expanded', { y: -225 }) // Changed to 0 for testing
		.set('.btn-close', { autoAlpha: 0 })
		.set('.label-container', { autoAlpha: 0, scale: .5 })
		.set('.item-container', { scale: .01, transformOrigin: "50% 100%" })
		.add("frame0", .25)
		.to(".stage", 0.05, { autoAlpha: 1 })

		// Frame 1
		.add("frame1", "+=0")
		.from('.text1a, .text1b', .5, { autoAlpha: 0, y: 40, stagger: 0.2, ease: Power1.easeInOut }, "frame1")
		.from('.byline-text, .byline-graphic, .expand-button', 1, { x: 160, stagger: 0.1, ease: Power3.easeInOut }, "frame1")
		.from('.bess1, .bess2', .5, { scale: 0, stagger: 0.1, ease: Back.easeOut, transformOrigin: "50% 100%" }, "frame1")

		// Frame 2
		.add("frame2", "+=0")
		.seek(seekStart);


	function setupItemPositions() {

		itemContainers = document.querySelectorAll('.item-container')
		if (!itemsWrapper) {
			console.error('items-wrapper not found!')
			return
		}

		if (itemContainers.length === 0) {
			console.error('No item-containers found!')
			return
		}

		// Calculate the width of original 7 items
		totalItemsWidth = totalItems * itemWidth

		// Add event listeners to original items
		itemContainers.forEach(item => {
			item.addEventListener('mouseover', itemRollOver)
			item.addEventListener('mouseout', itemRollOut)
		})

		// Clone items for seamless loop
		cloneItemsForInfiniteScroll()

		// Start at an offset so we have room to scroll in both directions
		// scrollPosition = totalItemsWidth 
		scrollPosition = -totalItemsWidth

		gsap.set(itemsWrapper, { x: scrollPosition })

		// Set up Mouse events
		setupMouseEvents()

		// Start Animation loop
		if (myEvent != 'touchend') {
			startScrollAnimation()
		}
	}

	function cloneItemsForInfiniteScroll() {
		// Clone all items to add them to them before and after the original 7
		const originalItems = Array.from(itemContainers)

		// Clone items, 1 sets after original for scrolling right
		let cloneCount
		if (myEvent != 'touchend') {
			cloneCount = 2 // For desktop, clone 2 sets after original)
		} else {
			cloneCount = 1 // For mobile, clone 1 set after original
		}
		for (i = 0; i < cloneCount; i++) {
			originalItems.forEach(item => {
				const clone = item.cloneNode(true)
				clone.classList.add('cloned-item')
				clone.addEventListener('mouseover', itemRollOver)
				clone.addEventListener('mouseout', itemRollOut)
				// clone.addEventListener(myEvent, function () {
				// 	window.open(clickTag);
				// })
				itemsWrapper.appendChild(clone);
			})
		}

		// Clone 1 set before original for scrolling left, use REVERSE to add from before original 7 and work outward
		originalItems.slice().reverse().forEach(item => {
			const clone = item.cloneNode(true)
			clone.classList.add('cloned-item-prepend')
			// Insert BEFORE the original
			itemsWrapper.insertBefore(clone, itemsWrapper.firstChild)
		})

		// Update the reference to include ALL cloned items
		itemContainers = document.querySelectorAll('.item-container')
		itemContainers.forEach(item => {
			item.addEventListener('mouseover', itemRollOver)
			item.addEventListener('mouseout', itemRollOut)
			// item.addEventListener(myEvent, function () {
			// 	window.open(clickTag);
			// })

		})
	}

	// --<DESKTOP CONTROLS - START>-- \\
	function setupMouseEvents() {
		const stageWidth = 728
		const halfWidth = stageWidth * .5
		const navZone = document.querySelector('.navZone')

		stage.addEventListener('mouseenter', () => {
			isScrolling = true
		})

		stage.addEventListener('mouseleave', () => {
			isScrolling = false
			targetScrollSpeed = 0
		})

		stage.addEventListener('mousemove', (e) => {
			if (!isScrolling) return;

			const rect = stage.getBoundingClientRect()
			const mouseX = e.clientX - rect.left
			const mouseY = e.clientY - rect.top

			// Left half
			if (mouseY > 100 && mouseY < 250) { // Only scroll if mouse is in the top 200px
				if (mouseX < halfWidth) {
					scrollDirection = -1
					const intensity = (halfWidth - mouseX) / halfWidth
					targetScrollSpeed = intensity * 5 // 5px per frame
				} else {
					// Right half
					scrollDirection = 1
					const intensity = (mouseX - halfWidth) / halfWidth
					targetScrollSpeed = intensity * 5 // 5px per frame
				}
			}
		})
	}

	function startScrollAnimation() {
		function animate() {
			// Smooth accelration / deceleration
			if (isScrolling) {
				scrollSpeed += (targetScrollSpeed - scrollSpeed) * 0.1
			} else {
				scrollSpeed *= 0.95 // Gradual stop
			}

			// Update scroll position
			scrollPosition += scrollSpeed * scrollDirection

			// Handle infinite loop - reset position when we've scrolled one full set
			if (scrollPosition >= totalItemsWidth * 3) {
				scrollPosition = totalItemsWidth
			} else if (scrollPosition <= 0) {
				scrollPosition = totalItemsWidth * 2
			}

			// Apply transform
			gsap.set(itemsWrapper, { x: -scrollPosition, force3D: true })

			animationFrame = requestAnimationFrame(animate)
		}

		animate()
	}

	function itemRollOver() {
		// When mouse is over an item, show the label
		const label = this.querySelector('.label-container')
		if (label) {
			// gsap.to(label, 0.3, { autoAlpha: 1, ease: Power2.easeInOut })
			gsap.to(label, 0.3, { autoAlpha: 1, scale: 1, ease: Back.easeOut })
		}
	}

	function itemRollOut() {
		// When mouse leaves an item, hide the label
		const label = this.querySelector('.label-container')
		if (label) {
			// gsap.to(label, 0.3, { autoAlpha: 0, ease: Power2.easeInOut })
			gsap.to(label, 0.3, { autoAlpha: 0, scale: .5, ease: Back.easeIn })
		}
	}

	// Clean up animation frame on page unload
	window.addEventListener('beforeunload', () => {
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
		}
	});
	// --<DESKTOP CONTROLS - END>-- \\



	document.querySelector(".expand-button").addEventListener(myEvent, actionClickHandler);
	document.querySelector(".btn-close").addEventListener(myEvent, actionClickHandler);
	document.querySelector('.stage').className = "stage"


	// Add other listeners
	// document.querySelector('.stage').addEventListener('mouseover', rollOverCta)
	const ctaButton = document.querySelector('.cta-button');
	ctaButton.addEventListener(myEvent, function () {
		window.open(clickTag);
	})



	function expandStartHandler() {
		// Perform expand animation.
		// Optionally, should you want the direction to expand in call:
		// Enabler.getExpandDirection(); //
		// When animation finished must call
		gsap.to(".expanded", .65, { y: 0, ease: Power2.easeInOut, onComplete: Enabler.finishExpand() })
		gsap.to('.banner', .65, { height: 315, ease: Power2.easeInOut })
		gsap.to('.item-container', .5, { scale: 1, ease: Back.easeOut, transformOrigin: "50% 100%", stagger: 0.05 })
		gsap.to('.expand-button', .25, { autoAlpha: 0, ease: Power2.easeInOut })
		gsap.to('.btn-close', .25, { autoAlpha: 1, ease: Power2.easeInOut, delay: .25 })
		gsap.delayedCall(1.5, updateLabels)
		// Enabler.finishExpand();
	}

	function expandFinishHandler() {
		// Convenience callback for setting
		// final state when expanded.
		isExpanded = true;
	}

	function collapseStartHandler() {
		// Perform collapse animation.
		// When animation finished must call
		gsap.to(".expanded", .65, { y: -225, ease: Power2.easeInOut, onComplete: Enabler.finishCollapse() })
		gsap.to('.expand-button', .25, { autoAlpha: 1, ease: Power2.easeInOut, delay: .25 })
		gsap.to('.btn-close', .15, { autoAlpha: 0, ease: Power2.easeInOut })
		gsap.to('.banner', .65, { height: 90, ease: Power2.easeInOut })
		// Enabler.finishCollapse();
	}

	function collapseFinishHandler() {
		// Convenience callback for setting
		// final state when collapsed.
		isExpanded = false;
	}

	function actionClickHandler() {
		isExpanded ? Enabler.requestCollapse() : Enabler.requestExpand();
	}

	Enabler.addEventListener(
		studio.events.StudioEvent.EXPAND_START,
		expandStartHandler);
	Enabler.addEventListener(
		studio.events.StudioEvent.EXPAND_FINISH,
		expandFinishHandler);
	Enabler.addEventListener(
		studio.events.StudioEvent.COLLAPSE_START,
		collapseStartHandler);
	Enabler.addEventListener(
		studio.events.StudioEvent.COLLAPSE_FINISH,
		collapseFinishHandler);
	// actionBtn.addEventListener(
	// 	'click',
	// 	actionClickHandler,
	// 	false);

};