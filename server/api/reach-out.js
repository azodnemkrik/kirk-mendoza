// server/api/reach-out.js
// Express route to handle contact form submissions and send email using nodemailer

const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

console.log(
	"USER:",
	process.env.CONTACT_EMAIL_USER,
	"PASS:",
	process.env.CONTACT_EMAIL_PASS
);

// Configure your email transport (use your real credentials or environment variables)

// GMAIL EXAMPLE:
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.CONTACT_EMAIL_USER,
//     pass: process.env.CONTACT_EMAIL_PASS,
//   },
// });

// WEBMAIL EXAMPLE:
const transporter = nodemailer.createTransport({
	host: "smtp.dreamhost.com",
	port: 465, // use 465 for SSL, or 587 for STARTTLS
	secure: true, // true for port 465, false for 587
	auth: {
		user: process.env.CONTACT_EMAIL_USER,
		pass: process.env.CONTACT_EMAIL_PASS,
	},
});

router.post("/", async (req, res) => {
	//   const { name, email, subject, message } = req.body;
	//   if (!name || !email || !subject || !message) {
	//     return res.status(400).json({ error: 'All fields are required.' });
	//   }

	const { name, email, subject, message, website } = req.body;
	if (website) {
		// If the hidden field is filled out, it's most likely a bot submission!!
		return res.status(200).json({ error: "Bot detected." });
	}
   
   if (!name || !email || !subject || !message) {
		return res.status(400).json({ error: "All fields are required." });
	}

	const mailOptions = {
		from: email,
		to: process.env.CONTACT_EMAIL_TO, // your destination email address
		subject: `[Contact Form] ${subject}`,
		text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ success: true });
	} catch (error) {
		console.error("Email send error:", error);
		res.status(500).json({ error: "Failed to send email." });
	}
});

module.exports = router;
