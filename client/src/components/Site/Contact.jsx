import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({ id, className, onOpenModal }) => {

	const [activeCard, setActiveCard] = useState(1);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	// const reachOut = "https://formspree.io/f/mayvlgrq";

	const navigate = useNavigate();

	const reachOut = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		setName(formData.get("name"));
		setEmail(formData.get("email"));
		setSubject(formData.get("subject"));
		setMessage(formData.get("message"));
		const visitor = {
			name,
			email,
			subject,
			message
		}
		console.log(visitor)

		// Submission Logic
		try {
			await axios.post('/api/reach-out', visitor);
			alert("Your message sent successfully!");
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
			// navigate('/');
			window.location.hash = '#home'
		} catch (error) {
			alert("Something went wrong. Please try again later.");
			console.error(error);
		}

		// try {
		// 	// const { data } = await axios.post('/api/reach-out', visitor)
		// 	const { data } = await axios.post('#', visitor)
		// 	console.log(visitor)
		// 	alert("Your message sent successfully!");
		// 	navigate('/')
		// } catch (error) {
		// 	console.error(error)
		// }
	}

	return (
		<>
			<div id={id} className={`centered-container ${className}`}>

				<div className="contact-container label-container">
					<h1 className="section-label section-label-contact"><div>Contact<span className="material-symbols-outlined asIcon">mail</span></div></h1>
				</div>

				<div className="contact-container2 section-container">

					<div className="section-content contact-content">
						<h2>Let's work <span className="accent-blue">together</span>!</h2>
						<p>Have a project in mind? Tell me about your project and how I can help. Looking forward to hearing from you!</p>

						<form className="contact-form" onSubmit={reachOut} >

							<div>
								<label> Name*</label><br />
								<input className="name" type="text" name="name" required placeholder="Inigo Montoya" value={name} onChange={e => setName(e.target.value)} />
							</div>

							<div>
								<label>Email*</label><br />
								<input className="email" type="email" name="email" required placeholder="mniim_ykmf@ptd.com" value={email} onChange={e => setEmail(e.target.value)} />
							</div>

							<input type="text" name="website" autoComplete="off" tabIndex="-1" style={{ position: 'absolute', left: '-99999px', visibility: 'hidden' }} />

							<div><label>Subject</label><br />
								<select className="subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)}>
									<option value="" defaultValue >-- Select One --</option>
									<option value="I've got a QUESTION..." selected >I've got a QUESTION...</option>
									<option value="I'd like to COLLABORATE..." >I'd like to COLLABORATE...</option>
									<option value="I'd like to HIRE YOU...">I'd like to HIRE YOU...</option>
									<option value="I'm just SAYING HI!">I'm just SAYING HI!</option>
								</select>
							</div>

							<div>
								<label>Message</label><br />
								<textarea className="message" name="message" placeholder='"Hey Kirk, Nice site... Do you happen to have 6 fingers on your right hand?"' value={message} onChange={e => setMessage(e.target.value)} />
							</div>

							<button className="formSubmit" type="submit" ><p>Submit</p></button>

						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;