let maintl;
let seekStart = 0;
let isAnimating = true; // Prevents multiple clicks
let autoPlay = true;   // 15 second Autoplay, starts OFF
const bannerSize = { width:"300" , height: "250"};
let pixelate = false;
let background = false;
let ember_stage = new EmberStage(document.querySelector('#ember_canvas'), false, false);

(function () {

  // -- <DETECT FOR TOUCH OR DESKTOP - START> -- \\
  let myEvent = ('ontouchstart' in document.documentElement) ? 'touchend' : 'click'
  console.log("myEvent: " + myEvent)

  if (myEvent == 'touchend') {
      // Chance to adjust anything for Mobile / Destop specific 
      // Example - gsap.set(".somethingDesktop", { autoAlpha: 0 })
  }

  // Get Swipe Direction
  function getSwipeDirection() {
      let movementX = swipeFunc.touches["touchmove"].x - swipeFunc.touches["touchstart"].x
      let movementY = swipeFunc.touches["touchmove"].y - swipeFunc.touches["touchstart"].y
      // console.log("\n" + movementX, movementY)

      if (Math.abs(movementX) < 30 && Math.abs(movementY) < 30) {
          return 'none'
      }
      if (movementX <= -30 && Math.abs(movementY) < 30) {
          return 'RIGHT'
      }
      if (movementX >= 30 && Math.abs(movementY) < 30) {
          return 'LEFT'
      }
  }
  
  // Swipe Function
  const swipeFunc = {
      touches: {
          "touchstart": { "x": -1, "y": -1 },
          "touchmove": { "x": -1, "y": -1 },
          "touchend": false,
          "direction": "undetermined"
      },
      touchHandler: function (event) {
          let touch
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
                              // console.log("\nI got the LEFT message")
                              onNavClick({target: navLeft})
                          }
                          if (getSwipeDirection() === 'RIGHT') {
                              // console.log("\nI got the RIGHT message")
                              onNavClick({target: navRight})
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
  // -- <DETECT FOR TOUCH OR DESKTOP - END> -- \\




  // -- <NAVIGATION SETUP - START> -- \\
  // Buttons
  const navLeft = document.querySelector(".navLeft")
  navLeft.buttonType = "LEFT"

  const navRight = document.querySelector(".navRight")
  navRight.buttonType = "RIGHT"

  // Animation Horizontal Positions - There are 5 positions for the 3 videos
  const farLeftPosition = -185
  const leftPosition = -93
  const centerPosition = 59
  const rightPosition = 211
  const farRightPosition = 343
  const startScale = .7

  // Videos
  const vid3 = document.querySelector(".vid3")
  const vid2 = document.querySelector(".vid2")
  const vid1 = document.querySelector(".vid1")

  // Video Identifiers
  let leftVid = vid3
  let centerVid = vid2
  let rightVid = vid1
  let currentCount = 1 // on load, 1 is the center video, 0 is left, 2 is right
  let previousCount = undefined

  // Video Setup
  function videoSetup() {
    let yPosition = 16    // Adjustment for top position of full carousel
    let xPosition = -140  // Spaciing - Width of 1 video thumbnail and then some
    let offsetX = 196     // Adjustment to make full carousel centered
    for (let i = 5 ; i >= 0 ; i--) {
      const iVid = document.querySelector(".vid"+(i+1))
      iVid.play()
      iVid.pause()
      gsap.set(iVid, {x: (i * xPosition) + offsetX , y: yPosition , scale: startScale })
      // console.log(i, "x:", (i*xPosition)+offsetX, "y:", yPosition)
    }
  }

  videoSetup()

  
  // On Navigation Click - button or swipe
  function onNavClick(e) {
    console.log("onNavClick, isAnimating", isAnimating, e.type)
    autoPlay = false
    toggleAutoplay(autoPlay)
    let checkType = e.target.buttonType
    if(!isAnimating){
      previousCount = currentCount

      switch(checkType) {
        case "RIGHT":
          currentCount--
          if(currentCount < 0){
            currentCount = 2
          }
          break

        case "LEFT":
          currentCount++
          if(currentCount > 2){
            currentCount = 0
          }          
          break
      }
    console.log(`${checkType}, previousCount: ${previousCount}, currentCount: ${currentCount}`)
    updateCarousel(checkType)
    }
  }
  


  
  // AutoPlay
  const waitDuration = 4000
  let autoPlayTimeOut = undefined
  let autoPlayInterval = undefined
  let stopVideoTimeOut = undefined

  function toggleAutoplay(bool=true) {
    console.log("toggleAutoplay is called")
    autoPlay = bool 
    if(autoPlay == true){
      autoPlayInterval = setInterval(autoPlayAction, waitDuration) // Store the interval ID
      autoPlayTimeOut = setTimeout(toggleAutoplay, 15000, false)
      stopVideoTimeOut = setTimeout(() => {
        centerVid.pause()
      }, 14500)
    } else {
      clearTimeout(autoPlayTimeOut) // Clear the timeout
      clearInterval(autoPlayInterval) // Clear the interval using the stored ID
      clearTimeout(stopVideoTimeOut) // Clear the timeout
    }
    console.log("autoPlay", autoPlay)
  }

  function autoPlayAction() {
    if(autoPlay){
      currentCount--
      if(currentCount < 0){
        currentCount = 2
      }
      updateCarousel("RIGHT")
    }
  }


  

  // Desktop Mouse Events
  let mouseOverTimer = undefined

  function onNavOver(e) {
    // Stop Autoplay
    autoPlay = false

    clearInterval(mouseOverTimer)   // Clear Mouseover Interval
    clearTimeout(autoPlayTimeOut)   // Clear Autoplay Timeout
    clearInterval(autoPlayInterval) // Clear Autoplay Interval
    onNavClick(e)                   // Update the carousel 

    // Set Interval for next Mouseover 1 second == 1000 milliseconds
    mouseOverTimer = setInterval(function() {
      onNavClick(e)
    }, 1000)

    // Determine which button is being hovered, animate & show that button
    if (e.target == navRight) {
      gsap.to (navRight , .25, { opacity: 1 , ease: Power1.easeInOut})
    } else {
      gsap.to (navLeft , .25, { opacity: 1 , ease: Power1.easeInOut})
    }
  }

  function onNavOut(e) {
    // Stop Autoplay
    autoPlay = false

    clearInterval(mouseOverTimer)   // Clear Mouseover Interval
    clearTimeout(autoPlayTimeOut)   // Clear Autoplay Timeout
    clearInterval(autoPlayInterval) // Clear Autoplay Interval

    // Hide both buttons on mouseout
    gsap.to (navRight , .25, { opacity: 0 , ease: Power1.easeInOut})
    gsap.to (navLeft , .25, { opacity: 0 , ease: Power1.easeInOut})
  }

  // Add onNavOver Event Listeners
  navLeft.addEventListener('mouseover', onNavOver)
  navRight.addEventListener('mouseover', onNavOver)  

  navLeft.addEventListener('mouseout', onNavOut)
  navRight.addEventListener('mouseout', onNavOut)  


  // Update Carousel
  function updateCarousel(direction) {

  // currentCount determines which video is in the center
    switch (currentCount) {

      case 0:
        leftVid = vid2
        centerVid = vid1
        rightVid = vid3
        break

      case 1:
        leftVid = vid3
        centerVid = vid2
        rightVid = vid1
        break

      case 2:
        leftVid = vid1
        centerVid = vid3
        rightVid = vid2
        break
    }

    // Actions for side videos when MOVING LEFT
    if (direction == "LEFT") {
      gsap.to (leftVid , .25, { x: farRightPosition , zIndex: 20 , scale: startScale , ease: Power1.easeIn, boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)"})
      gsap.set(leftVid , { x: farLeftPosition , delay: .25})
      gsap.to(leftVid , .25, { x: leftPosition , ease: Power1.easeOut , delay: .25})
      gsap.to (rightVid , .5, { x: rightPosition , zIndex: 20 , ease: Power1.easeInOut})
      gsap.to (rightVid , .35, { scale: startScale , ease: Power1.easeInOut, boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)"})

    // Actions for side videos when MOVING RIGHT
  } else if (direction == "RIGHT") {
      gsap.to (leftVid , .5, { x: leftPosition , zIndex: 20 , ease: Power1.easeInOut})
      gsap.to (leftVid , .35, { scale: startScale , ease: Power1.easeInOut, boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)"})
      gsap.to (rightVid , .25, { x: farLeftPosition , zIndex: 20 , scale: startScale , ease: Power1.easeIn, boxShadow:  "0px 0px 0px 0px rgba(0, 0, 0, 0)"})
      gsap.set(rightVid , { x: farRightPosition , delay: .25})
      gsap.to(rightVid , .25, { x: rightPosition , ease: Power1.easeOut , delay: .25})
    }

    // Actions for center video
    gsap.to (centerVid , .5, { x: centerPosition , zIndex: 21 , ease: Power1.easeInOut,      
      onStart: function() {
        isAnimating = true
        leftVid.pause()
        rightVid.pause()
      }
    })
    gsap.to (centerVid , .5, { scale: 1 , ease: Back.easeOut , delay: .45 , boxShadow: "0px 10px 10px 10px rgba(0, 0, 0, 0.55)",
      onComplete: function() {
        isAnimating = false
        centerVid.play()
      }
    })
  }
  // -- <NAVIGATION SETUP - END> -- \\



  
  // SplitText 1 through 3
  let split1 = new SplitText(".text4", { type: "chars", position: "relative" });
  let split2 = new SplitText(".text5", { type: "chars", position: "relative" });
  
  
  // GSAP Timeline
  maintl = gsap.timeline();

  maintl
    // Frame 0
    .add("frame0", 0)
    .set(".arrowWhite", { x: -30 }, "frame0")
    .set(".arrowGreen", { x: 0 }, "frame0")
    .set(".green_shape", { autoAlpha: 0 , scaleX: 1.6 }, "frame0")
    .set([split1.chars, split2.chars], { autoAlpha: 0 , scale: 0 }, "frame0")
    .set(centerVid , { zIndex: 21 } , "frame0")
    .to(".stage", 0.05, { autoAlpha: 1 , onStart: function(){ isAnimating = true }}, "frame0")
    .fromTo(".doomLogo" , 2 , {scale: .9  },{ scale: 1 , ease: Power0.easeNone}, "frame0")


    // Frame 1
    .add("frame1", "+=0")
    .set(".logo", { autoAlpha: 0 , y: 173 }, "frame1")
    .set(".text2", { autoAlpha: 0 , y: 0 }, "frame1")
    .set(".text3", { autoAlpha: 0 , y: 0 }, "frame1")
    .set(".text3esrb", { autoAlpha: 0  }, "frame1")
    .to(".doomLogo, .text1" , .25 ,{ autoAlpha: 0 }, "frame1")
    .to(ember_stage , .25 ,{ autoAlpha: 0 }, "frame1")
    

    .set(".text1", { autoAlpha: 0 }, "frame1")
    .from(".background", 1 , { autoAlpha: 0 , scale: 1.2 }, "frame1")
    .to(split1.chars, .5, { autoAlpha: 1, stagger: { each: .1, axis: "x", from: "start" } , scale: 1 , ease: Back.easeOut }, "frame1+=.1")
    .to(split2.chars, .45, { autoAlpha: 1, stagger: { each: .08, axis: "x", from: "end" } , scale: 1 , ease: Back.easeOut }, "frame1+=.2")
    .to(".green_shape", .8 , { autoAlpha: 1 , scaleX :1 , ease: Power1.easeOut }, "frame1+=.3")
    .to(".text2", 1 , { autoAlpha: 1 , y: -26 }, "frame1+=.4")
    .to(".text3esrb", 1 , { autoAlpha: 1 }, "frame1+=.4")
    .from(".cta-button", .8 , { autoAlpha: 0 , y :15 , ease: Power1.easeOut }, "frame1+=.75")
    .to(".logo", 1 , { autoAlpha: 1 }, "frame1+=.4")

    // Frame 2
    .add("frame2", 2)
    .from(".carouselVid", 2, { x: "+=1000", ease: Power4.easeInOut } , "frame2")
    .set (centerVid , { zIndex: 21 } , "frame3")
    .to (centerVid , .5, { scale: 1 , ease: Back.easeOut , boxShadow: "0px 10px 10px 10px rgba(0, 0, 0, 0.55)",
      onComplete: function() {
        isAnimating = false;
        toggleAutoplay(autoPlay)
        centerVid.play()
        console.log("isAnimating:", isAnimating)
      }
    }, "frame2+=1.5")
    .seek(seekStart)
    // .pause()
    ;








  // Arrow CTA Animation
    let arrowCtaPlaying = false;
    let tlCta = gsap.timeline();
    tlCta
      .add("frame1", 0)
      .set([".ctaBackgroundArrow", ".cta-button"], { transformOrigin: "center center" })
      .set(".cta-text", { textRendering: "geometricPrecision", fontSmoothing: "antialiased" })
      .from(".ctaBackgroundArrow", .5 , { x: -200 , scale: 1.2 , ease: Power1.easeInOut, 
          onStart: function () { arrowCtaPlaying = true; }
      } , "frame1")
      .to(".cta-text" , .2 , { color: "#FFFFFF" }, "frame1")
      .fromTo(".arrowGreen", .5 , { x: 0 }, { x: 30 , ease: Power1.easeInOut } , "frame1" )
      .fromTo(".arrowWhite", .5 , { x: -30 } , { x: 0 , ease: Power1.easeInOut } , "frame1")
      .to(".cta-button" , .35, { scale: 1.05 , ease: Power2.easeInOut} , "frame1")
  
      .add(() => {
          tlCta.pause();
          // arrowCtaPlaying = false;
      }, "frame1+=.6")
      
      .add("frame2", "+=0")
      .to(".ctaBackgroundArrow", .5 , { x: 200 , scale: 1.2 , ease: Power1.easeInOut,
        onComplete: function () { arrowCtaPlaying = false; }
      } , "frame2")
      .to(".cta-text" , .2 , { color: "#054b16"}, "frame2")
      .fromTo(".arrowGreen", .5 , { x: -30 } , { x: 0 , ease: Power1.easeInOut } , "frame2")
      .fromTo(".arrowWhite", .5 , { x: 0 }, { x: 30 , ease: Power1.easeInOut } , "frame2" )
      .to(".cta-button" , .35, { scale: 1 , ease: Power2.easeInOut} , "frame2")
      .pause();



  // CTA Roll Over Detection using MouseMove Listener
  const ctaButton = document.querySelector('.cta-button')
  document.addEventListener('mousemove', (event) => {

    // Get the mouse position 
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the object position, size for boundaries
    const objectRect = ctaButton.getBoundingClientRect();
    const objejectLeft = objectRect.left;
    const objectTop = objectRect.top;
    const objectWidth = objectRect.width;
    const objectHeight = objectRect.height;

    // Check if the mouse is inside the object boundaries
    if (mouseX >= objejectLeft && mouseX <= objejectLeft + objectWidth && mouseY >= objectTop && mouseY <= objectTop + objectHeight) {
      if(!arrowCtaPlaying){
        tlCta.restart();

    //  Perform other actions needed
        autoPlay = false
        toggleAutoplay(autoPlay)
        centerVid.play()
      }
      // console.log("Mouse is inside the object")
    } else {
      if(arrowCtaPlaying){
        tlCta.play();
      }
      // console.log("Mouse is outside the object")
    }
  })

  // Add other listeners
  document.querySelector('.cta-button').addEventListener(myEvent, function () {
    window.open(clickTag);
  })

})();