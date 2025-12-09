let bannerSize, isReplay = false, loadBody, loadFont = false, loadVideo = false, loadedVideos = 0, isHover = false;
const vid1 = $("#vid1").get(0);
setSize('#outline, #aria-text, #vid1', 1);
loadingFont();
showCopy(1);

loadingVideo(vid1, videoSrc[0]);

//check loading
function loaded(type) {
  if (type === 'font') loadFont = true;
  if (type === 'body') loadBody = true
  if (type === 'video1') loadVideo = true;

  if (loadFont && loadBody && loadVideo) runBanner();
}

//////// interaction with mouse //////////////////////////////////////////////////////////////////////
$("#outline")
  .on("mouseenter", function () {
    playedOnce = true;
    console.log("playedOnce: ", playedOnce);
    playLoop(true);
    mOver = 1;
    if (arrowCtaPlaying !== 1) tlArrowCta.restart();
    if (isLoadedVid2 == true) {
      tlZoom.play();
      isHover = true;
    }
  })

  .on("mouseleave", function (e) {
    mOver = 0;
    if (arrowCtaPlaying != 1) tlArrowCta.play();

    if (isLoadedVid2 == true) {
      tlZoom.reverse();
    }
  })
  .on("click", function () {
    window.open(clickTag);
  });

$("#rHit")
  .on("mouseover", function () {
    if (isReplay === true) $("#rHit").addClass("solid");
  })
  .on("mouseout", function () {
    $("#rHit").removeClass("solid");
  })
  .on("click", function () {
    if (isReplay === true) replay();
  });
$("#aria-button").on("click", function () {
  window.open(clickTag);
});
///////////////////////////////////////////////////////////////////////////////////////////////////

function replay() {
  isReplay = isHover = false;
  $('#rHit').removeClass("solid");

  vid1.style.visibility = "visible";
  vid1.currentTime = 0;
  vid1.play();

  tl1.restart();
  capeTurbulencetl.restart();
  leavestl.restart();
  leavesLargetl.restart();
  dirttl.restart();
  smoketl.restart();
  backSmoketl.restart();
  swordtl.restart();
}