// api/reach-out.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { name, email, subject, message, website } = req.body;
	if (website) {
		// Bot has been detected!!
		return res.status(200).json({ error: "Bot has been detected!" });
	}
	if (!name || !email || !subject || !message) {
		return res.status(400).json({ error: "All fields are required." });
	}

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
}

module.exports = router;
