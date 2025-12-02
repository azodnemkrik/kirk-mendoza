import { useEffect } from "react";
import React from "react";

const CaseStudies  = ({ id, className }) => {

   useEffect(() => {

   })

   return (
      <div id={id} className={`centered-container case-studies-BG ${className}`}>
         <div className="case-studies-container">
            {/* <video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video> */}
            <h1>Case Studies</h1>
            <p> This is where Case Study information would go. The idea is to share samples but have supporting text that explains the context and impact of each project.</p>
         </div>
      </div>
   )
}

export default CaseStudies;