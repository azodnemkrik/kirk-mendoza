import { gsap } from "gsap/dist/gsap";

const Modal = ({ isOpen, onClose, src, children }) => {
   if (isOpen) return null;

   let isPlaying = true;
   const gsapTL = {src};

   const scrubberTL = gsap.timeline({  });
   scrubberTL.add(gsapTL, 0);
   
   const scrubber = document.getElementById("scrubber");

   const update = () => {
      scrubber.value = scrubberTL.totalProgress() * 100;
      console.log(scrubber.value);
      if (scrubber.value >= 100) {
         isPlaying = false;
         gsap.set(".pause_circle", {autoAlpha: 0});
         gsap.set(".play_circle", {autoAlpha: 1});
      }
      totalProgress.textContent = scrubberTL.time().toFixed(2) + " / " + scrubberTL.duration().toFixed(2);
   }

   return (
      <div className="modal-backdrop" onClick={onClose}>
         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={onClose}>×</button>
            {children}
            <iframe src={src} width="300" height="250"></iframe>


            <div className='scrubber-container scrub-top'>
               <input className="scrubber" id="scrubber" type="range" min="0" max="100" value="0"></input>
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
   );
};

export default Modal;