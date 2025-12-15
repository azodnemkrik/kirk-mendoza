import { useEffect } from "react";
import React from "react";

const ContactMe = ({ id, className }) => {

	useEffect(() => {

	})

	return (
		<div id={id} className={`centered-container contact-BG ${className}`}>
			<div className="contact-container">
				{/* <video src="https://www.kirk-mendoza.com/video/kirk-mendoza_motion-graphics.mp4" type="video/mp4" autoPlay loop muted width="auto" min-width="100%" height="20%" background="cover"></video> */}
				<h1>Contact Me</h1>
				<p> This is where Contact information would go. The idea is to provide ways for visitors to get in touch. This will be populated with relevant contact details and a form.</p>
				<form action={contact}>
					<div className="two-column-layout">
						<label>
							First:<br /> <input className="two-column-form-left" type="text" name="first_name" />
						</label>
						<label>
							<span className="bumpLabel">Last:</span><br /> <input className="two-column-form-right" type="text" name="last_name" />
						</label>
					</div>
					<div className="two-column-layout">
						<label>
							Username:<br /> <input className="two-column-form-left" type="text" name="username" />
						</label>
						<label>
							Password:<br /> <input className="two-column-form-right" type="text" name="password" />
						</label>
					</div>
					<label>
						Organization Code: <span className="hint">(provided by your Administrator)</span><br /> <input type="text" name="org_code" />
					</label>

					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe;