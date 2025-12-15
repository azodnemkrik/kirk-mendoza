import { useEffect } from "react";
import React from "react";

const ContactMe = ({ id, className }) => {

	const reachOut = async () => {
		const name = formData
	}

	useEffect(() => {

	})

	return (
		<div id={id} className={`centered-container contact-BG ${className}`}>
			<div className="contact-container">
				{/* <video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video> */}
				<h1>Contact Me</h1>
				<p> This is where Contact information would go. The idea is to provide ways for visitors to get in touch. This will be populated with relevant contact details and a form.</p>
				<form action={reachOut}>
					<div className="two-column-layout">
						<label>
							Name:<input className="" type="text" name="name" />
						</label>
						<label>
							Email<input className="" type="text" name="email" />
						</label>
					</div>
					<div className="two-column-layout">
						<label>
							Subject:<br /> <input className="" type="text" name="subject" />
						</label>
						<label>
							Message:<br /> <input className="" type="text" name="message" />
						</label>
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe;