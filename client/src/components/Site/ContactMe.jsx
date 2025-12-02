import { useEffect } from "react";
import React from "react";

const ContactMe  = ({ id, className }) => {

   useEffect(() => {

   })

   return (
      <div id={id} className={`centered-container contact-BG ${className}`}>
         <div className="contact-container">
            {/* <video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video> */}
            <h1>Contact Me</h1>
            <p> This is where Contact information would go. The idea is to provide ways for visitors to get in touch. This will be populated with relevant contact details and a form.</p>
         </div>
      </div>
   )
}

export default ContactMe;