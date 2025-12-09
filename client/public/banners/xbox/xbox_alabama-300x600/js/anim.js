let checkTime, tl1, tlZoom;
let isLoadedVid2 = false;
gsap.ticker.add(FFAnimation);

let playedOnce = false;
let repeatStatus = 0;
let leavesStatus = 13;
let capeStatus = 1;
let displacementElement = document.getElementById("displacement");
let turbulenceElement = document.getElementById("turbulence");
capeTurbulencetl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 });
leavestl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 });
leavesLargetl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 });
dirttl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 });
smoketl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 });
backSmoketl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 });
swordtl = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 });

function FFAnimation() {
    // if (vid2.currentTime > 5 && isHover == true) { vid2.currentTime = 0; vid2.play(); }
    if (vid1.currentTime > 8.6 && isLoadedVid2 == false) {
        // gsap.to(vid2, { alpha: 1 });
        // vid2.currentTime = 0.3;
        // vid2.play();
        // isLoadedVid2 = true;
        gsap.to('#anim2', { alpha: 1 });
        // gsap.currentTime = 0.3;
        // vid2.play();
        isLoadedVid2 = true;

    }

}

function runBanner() {
    $('#init').css('visibility', 'hidden');
    tl1 = 'undefined';
    tlZoom = 'undefined';
    viewTab(vid1);
    vid1.style.visibility = "visible";
    vid1.currentTime = 0;

    createAnimation({});
    vid1.play();
}

function createAnimation() {
    tl1 = gsap.timeline()
        .set('#introesbr2', { alpha: 1 })
        .set('#logo', { alpha: 1, fill: "#ffffff" })

        .set('#headline1', { alpha: 0, x: "+=50", fill: "#ffffff" }, "<")
        .set('#headline2', { alpha: 0, x: "+=50" }, "<")
        .set('#green_shape', { alpha: 0, x: "+=50" }, "<")
        .set('#anim2', { alpha: 0, zIndex: -1 })
        .set('.flash-cover', { autoAlpha: 0 })
        .set('.portal, .jump-gradient', { autoAlpha: 0 }, "<")

        .set('#introesbr2', { duration: 0.01, z: 1, x: "0", alpha: 0, ease: "power2.out" }, "<1.5")
        .to('#intro', { duration: 0.01, z: 1, x: "0", alpha: 0, ease: "power2.out" }, "<")
        .from('.text-gradient', { autoAlpha: 0 , duration: .25 }, 1.25)

        .to('#headline1', { duration: 0.8, z: 1, x: "0", alpha: 1, ease: "power2.out", stagger: 0.2 }, "<0.3")
        .to('#green_shape', { duration: 0.6, z: 1, alpha: 1, x: "0", ease: "power1.out" }, "<0.5")
        .to('#headline2', { duration: 0.8, z: 1, x: "0", alpha: 1, ease: "power2.out", stagger: 0.2 }, "<0.3")
        .to("#cta", {
            duration: 0.5, alpha: 1, x: "0", z: 1, ease: "power1.out", onComplete: () => {
                mouseOverEnabled = true;
            }
        }, "<0.3")

        .to('#disclaimer', { duration: 1, z: 1, x: "0", alpha: 1, color: "#ffffff", ease: "power1.out" }, "<0.5")

        .to(".endframe-gradient", { duration: 0.4, opacity: 0.5 }, "<")

        .to('#logo', { duration: 0.4, z: 1, fill: "#2f2f2f" }, "<5")
        .fromTo('#headline1, #headline2 ', { color: "#ffffff" }, { duration: 0.4, z: 1, color: "#2f2f2f" }, "<")
        .to('.text-gradient', { autoAlpha: 0 , y: -10, duration: .4, }, "<")
        .to('.jump-gradient', { autoAlpha: 1 , duration: .4, }, "<")
        .set('.flash-cover', { autoAlpha: .50 }, "<")
        .to('.flash-cover', .4, { autoAlpha: 0, ease: "power1.out" }, "<")
        .set('.portal', { autoAlpha: 1 }, "<")
        .fromTo('.portal', 4, { x: 40, scale: .15, rotation: 0 }, { x: -50, scale: 1.5, rotation: 120, ease: Power4.easeOut }, "<")
        .to('.portal', 1.5, { autoAlpha: 0, ease: Power4.easeOut, delay: .3 }, "<")
        .fromTo('.bg', 1.5, { scale: 3 }, { scale: 1, ease: Power4.easeOut }, "-=3.85")
        .fromTo('#anim2', 1.5, { alpha: 0, scale: .5, zIndex: -1, attr: { borderRadius: 300 } }, {
            alpha: 1, scale: 1, zIndex: 0, attr: { borderRadius: 0 }, ease: Power4.easeOut, onStart: function () {
                if (playedOnce == false) {
                    playLoop(false)
                } else {
                    playLoop(true)
                }
            }
        }, "-=3.85")
        .to(".endframe-gradient", { duration: 0.4, opacity: 0.65 }, "<")
        .to('#rHit', 0.7, {
            alpha: 0.5, ease: "power2.out",
            onComplete: function () {
                isReplay = true;
                out();
            }
        }, "<")
        .seek(0);

    tlZoom = gsap.timeline()
    tlZoom
        .to('#anim2', 1, { scale: 1.2, x: -5, y: 15, ease: "power1.inOut" })
        .pause();

    feTurb = document.querySelector('#feturbulence');

    capeTurbulencetl
        .add("frame1", 0)
        .to(turbulenceElement, 20, {
            onUpdate: function () {
                // Calculate base frequency for x and y
                let baseFrequencyX;
                let baseFrequencyY;
                // console.log(this.progress());

                if (this.progress() <= 0.5) {
                    baseFrequencyX = (this.progress()) * 0.05;
                    baseFrequencyY = (this.progress()) * 0.05;
                } else {
                    baseFrequencyX = (1 - this.progress()) * 0.05;
                    baseFrequencyY = (1 - this.progress()) * 0.05;
                }
                // console.log(baseFrequencyX, baseFrequencyY);

                // Set the base frequency attribute
                feTurb.setAttribute('baseFrequency', `${baseFrequencyX} ${baseFrequencyY}`);
            }
        }, "frame1")

    // .add("frame2", "+=0")
    // .to(turbulenceElement, 2, { attr: { baseFrequency: "0.02 0.02" }, ease: Sine.easeNone }, "frame2")

    // Leaves
    leavestl
        .add("leaf1", 0)
        .to('.leaf1', .84, { rotationX: 5, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf1")
        .fromTo('.leaf1', 1.06, { rotationY: -1 }, { rotationY: 1, repeat: leavesStatus, yoyo: true, ease: Power1.easeInOut, transformOrigin: "0% 100%" }, "leaf1")
        .to('.leaf1', .8, { rotationZ: 3, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf1")

        .add("leaf2", 0)
        .to('.leaf2', 1.04, { rotationX: 6, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf2")
        .fromTo('.leaf2', .92, { rotationY: -23 }, { rotationY: 23, repeat: leavesStatus, yoyo: true, ease: Power1.easeInOut, transformOrigin: "0% 100%" }, "leaf2")
        .to('.leaf2', .90, { rotationZ: 3, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf2")

        .add("leaf3", 0)
        .to('.leaf3', 1.06, { rotationX: 3, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf3")
        .fromTo('.leaf3', 1.02, { rotationY: -5 }, { rotationY: 5, repeat: leavesStatus, yoyo: true, ease: Power1.easeInOut, transformOrigin: "0% 100%" }, "leaf3")
        .to('.leaf3', .76, { rotationZ: 3, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf3")

        .add("leaf4", 0)
        .to('.leaf4', .8, { rotationX: 2, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf4")
        .fromTo('.leaf4', .74, { rotationY: -5 }, { rotationY: 13, repeat: leavesStatus, yoyo: true, ease: Power1.easeInOut, transformOrigin: "0% 100%" }, "leaf4")
        .to('.leaf4', .44, { rotationZ: 4, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 100%" }, "leaf4")

        .add("leaf5", 0)
        .to('.leaf5', 1.0, { rotationX: 8, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 0%" }, "leaf5")
        .fromTo('.leaf5', .8, { rotationY: 0 - 3 }, { rotationY: 3, repeat: leavesStatus, yoyo: true, ease: Power1.easeInOut, transformOrigin: "0% 0%" }, "leaf5")
        .to('.leaf5', 1.2, { rotationZ: -10, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "0% 0%" }, "leaf5")

        .add("leaf6", 0)
        .to('.leaf6', .8, { rotationX: 15, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "20% 80%" }, "leaf6")
        .fromTo('.leaf6', 1.08, { rotationY: 0 }, { rotationY: 20, repeat: leavesStatus, yoyo: true, ease: Power1.easeInOut, transformOrigin: "20% 80%" }, "leaf6")
        .to('.leaf6', .88, { rotationZ: 10, repeat: leavesStatus, yoyo: true, ease: Power2.easeInOut, transformOrigin: "20% 80%" }, "leaf6")

        .add("leaf7", 0)
        .fromTo('.leaf7', .5, { autoAlpha: 0 }, { autoAlpha: .5, repeatDelay: 2.5 }, "leaf7")
        .fromTo('.leaf7', 3, { x: -20, rotation: 0 }, { x: 160, rotation: 20, ease: Power1.easeOut, transformOrigin: "50% 50%" }, "leaf7")
        .seek(0)
    // .pause();

    function randomAngle() {
        var randomAngle = Math.random() * 360;
        // console.log ('randomAngle: ' + randomAngle);
        return randomAngle;
    }

    leavesLargetl
        .add("leavesLarge", 0)
        .fromTo('.largeLeaf1', 4, { x: -40, y: 320, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle() * -1, rotationZ: randomAngle() }, { x: 350, y: 0, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle(), rotationZ: randomAngle(), ease: Power1.easeIn, transformOrigin: "50% 50%" }, "leavesLarge")
        .fromTo('.largeLeaf2', 3, { x: -50, y: 310, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle() * -1, rotationZ: randomAngle() }, { x: 360, y: 100, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle(), rotationZ: randomAngle(), ease: Power1.easeIn, transformOrigin: "50% 50%" }, "leavesLarge+=1")
        .fromTo('.largeLeaf3', 4, { x: -55, y: 350, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle() * -1, rotationZ: randomAngle() }, { x: 350, y: 200, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle(), rotationZ: randomAngle(), ease: Power1.easeIn, transformOrigin: "50% 50%" }, "leavesLarge+=3")
        .fromTo('.largeLeaf4', 2, { x: -150, y: 370, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle() * -1, rotationZ: randomAngle() }, { x: 357, y: 225, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle(), rotationZ: randomAngle(), ease: Power1.easeIn, transformOrigin: "50% 50%" }, "leavesLarge+=3.5")
        .fromTo('.largeLeaf5', 5, { x: -70, y: 294, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle() * -1, rotationZ: randomAngle() }, { x: 370, y: 50, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle(), rotationZ: randomAngle(), ease: Power1.easeIn, transformOrigin: "50% 50%" }, "leavesLarge+=6")
        .fromTo('.largeLeaf6', 2.5, { x: -100, y: 250, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle() * -1, rotationZ: randomAngle() }, { x: 365, y: 400, scale: 1.5, rotationX: randomAngle(), rotationY: randomAngle(), rotationZ: randomAngle(), ease: Power1.easeIn, transformOrigin: "50% 50%" }, "leavesLarge+=8")

    // Dirt
    dirttl
        .add("dirt1", 0)
        .from('.dirt1', 1, { autoAlpha: 0, stagger: .1 }, "dirt1")
        .fromTo('.dirt1', 4, { x: 160, y: 270, scale: .5, rotation: -40 }, { x: 410, y: 130, scale: 1, rotation: -240, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .1 }, "dirt1")
        .to('.dirt1', 1, { autoAlpha: 0, stagger: .1 }, "dirt1+=3")

        .add("dirt2", 1)
        .from('.dirt2', 1, { autoAlpha: 0, stagger: .1 }, "dirt2")
        .fromTo('.dirt2', 5, { x: 260, y: 120, scale: 1, rotation: -40 }, { x: 510, y: -50, scale: .25, rotation: -240, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .1 }, "dirt2")
        .to('.dirt2', .5, { autoAlpha: 0, stagger: .1 }, "dirt2+=3.5")

        .add("dirt3", 3)
        .from('.dirt3', 1, { autoAlpha: 0, stagger: .15 }, "dirt3")
        .fromTo('.dirt3', 5, { x: 60, y: 470, scale: .25, rotation: -40 }, { x: 510, y: -50, scale: .75, rotation: -270, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .15 }, "dirt3")
        .to('.dirt3', .5, { autoAlpha: 0, stagger: .15 }, "dirt3+=3.5")

        .add("dirt4", 5)
        .from('.dirt4', 1, { autoAlpha: 0, stagger: .1 }, "dirt4")
        .fromTo('.dirt4', 5, { x: 160, y: 500, scale: .45, rotation: -40 }, { x: 610, y: -150, scale: .65, rotation: -290, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .1 }, "dirt4")
        .to('.dirt4', .5, { autoAlpha: 0, stagger: .1 }, "dirt4+=3.5")

        .add("dirt5", 7)
        .from('.dirt5', 1, { autoAlpha: 0, stagger: .1 }, "dirt5")
        .fromTo('.dirt5', 5, { x: 80, y: 400, scale: .45, rotation: -40 }, { x: 510, y: -100, scale: .65, rotation: -260, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .1 }, "dirt5")
        .to('.dirt5', .5, { autoAlpha: 0, stagger: .1 }, "dirt5+=3.5")

        .add("dirt6", 9)
        .from('.dirt6', 1, { autoAlpha: 0, stagger: .1 }, "dirt6")
        .fromTo('.dirt6', 5, { x: 120, y: 450, scale: .75, rotation: -40 }, { x: 610, y: -100, scale: .25, rotation: -260, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .1 }, "dirt6")
        .to('.dirt6', .5, { autoAlpha: 0, stagger: .1 }, "dirt6+=3.5")

        .add("dirt7", 10)
        .from('.dirt7', 1, { autoAlpha: 0, stagger: .1 }, "dirt7")
        .fromTo('.dirt7', 5, { x: 20, y: 450, scale: .75, rotation: -40 }, { x: 610, y: -100, scale: .25, rotation: -260, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .1 }, "dirt7")
        .to('.dirt7', .5, { autoAlpha: 0, stagger: .1 }, "dirt7+=3.5")

        .add("dirt8", 11)
        .from('.dirt8', 1, { autoAlpha: 0, stagger: .1 }, "dirt8")
        .fromTo('.dirt8', 5, { x: 82, y: 472, scale: .75, rotation: -40 }, { x: 610, y: -100, scale: .25, rotation: -260, ease: Power0.easeNone, transformOrigin: "0% 100%", stagger: .1 }, "dirt8")
        .to('.dirt8', .5, { autoAlpha: 0, stagger: .1 }, "dirt8+=3.5")
        .seek(0)
    // .pause();

    // Smoke
    smoketl
        .add("smoke1", 0)
        .fromTo('.smoke1', 1, { autoAlpha: 0 }, { autoAlpha: .2 }, "smoke1")
        .fromTo('.smoke1', 6, { x: 50, y: 288, scale: 1, rotation: -0 }, { x: 350, y: 240, scale: 2, rotation: 40, ease: Power0.easeNone, transformOrigin: "50% 50%" }, "smoke1")
        .to('.smoke1', 1, { autoAlpha: 0 }, "smoke1+=5")

        .add("smoke2", .5)
        .fromTo('.smoke2', 1, { autoAlpha: 0 }, { autoAlpha: .2 }, "smoke2")
        .fromTo('.smoke2', 6, { x: 50, y: 288, scale: 3, rotation: -0 }, { x: 350, y: 240, scale: 2.5, rotation: 110, ease: Power0.easeNone, transformOrigin: "50% 50%" }, "smoke2")
        .to('.smoke2', 1, { autoAlpha: 0 }, "smoke2+=5")

        .add("smoke3", 2)
        .fromTo('.smoke3', 1, { autoAlpha: 0 }, { autoAlpha: .2 }, "smoke3")
        .fromTo('.smoke3', 6, { x: 0, y: -288, scale: 3, rotation: -0 }, { x: 350, y: -240, scale: 2.5, rotation: -110, ease: Power0.easeNone, transformOrigin: "50% 50%" }, "smoke3")
        .to('.smoke3', 1, { autoAlpha: 0 }, "smoke3+=5")
        .seek(0)

    backSmoketl
        .add("smoke4", 0)
        .fromTo('.smoke4', 1, { autoAlpha: .25 }, { autoAlpha: .20 }, "smoke4")
        .fromTo('.smoke4', 12, { x: -500, y: -0, scale: 5, rotation: 0 }, { x: 600, y: 0, scale: 5, rotation: 60, ease: Power0.easeNone, transformOrigin: "50% 50%" }, "smoke4")

        .add("smoke5", 0)
        .fromTo('.smoke5', 1, { autoAlpha: 0 }, { autoAlpha: .25 }, "smoke5")
        .fromTo('.smoke5', 6, { x: 0, y: -0, scale: 5, rotation: -60 }, { x: 550, y: 0, scale: 5, rotation: 0, ease: Power0.easeNone, transformOrigin: "50% 50%" }, "smoke5")
        .seek(0)
}

function playLoop(aBoolean) {
    console.log("playLoop: " + aBoolean);
    if (aBoolean == false) {
        gsap.to(vid1, 6, {
            alpha: 1, onComplete: function () {
                capeTurbulencetl.pause();
                leavestl.pause();
                leavesLargetl.pause();
                dirttl.pause();
                smoketl.pause();
                backSmoketl.pause();
                swordtl.pause();
            }
        });
    } else {
        capeTurbulencetl.play();
        leavestl.play();
        leavesLargetl.play();
        dirttl.play();
        smoketl.play();
        backSmoketl.play();
        swordtl.play();
    }
}