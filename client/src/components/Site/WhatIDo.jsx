import { useEffect } from "react";
import React from "react";

const WhatIDo = ({ id, className }) => {

   useEffect(() => {

   })

   return (
      <div id={id} className={`centered-container what-i-do-BG ${className}`}>
         <div className="what-i-do-container">
            {/* <video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video> */}
            <h1><span className="accent-word">-What I do-</span></h1>
            <p> I've spent the last 20 years working as a front-end developer, building digital ad experiences that are clean, fast, and easy to use. At the same time, my animation background pulled me into motion graphics and video editing, and that blend of visuals and code is where I do my best work.</p>
         </div>
      </div>
   )
}

export default WhatIDo;