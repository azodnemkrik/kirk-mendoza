import { useEffect } from "react";
import React from "react";

const WhatIDo = ({ id, className }) => {

   useEffect(() => {

   })

   return (
      <div id={id} className={`centered-container aboutBG ${className}`}>
         <video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video>
      </div>
   )
}

export default WhatIDo;