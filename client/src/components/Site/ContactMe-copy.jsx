import { useEffect } from "react";
import React from "react";

const ContactMe = ({ id, className }) => {

	const reachOut = async () => {
		const name = formData
	}



	return (
		<>
			<div id={id} className={`centered-container ${className}`}>

				<div className="banners-container">
					<h1 onClick={() => { handleCardClick(1) }} className={`card-label card-label-banners`}>Banners<span className="material-symbols-outlined asIcon">image_inset</span></h1>
				</div>

				<div className="banners-container2">
					<div className="section-content">
						<div className="thumbnails-container">
							<p>These are some examples. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt in ratione dolorem facere neque ut, id quibusdam et eum fugit enim quos eaque dolores est! Suscipit quibusdam ab beatae. Illum facere labore est corporis fugit accusantium numquam earum itaque provident harum. Laborum in quibusdam vel iusto aliquam molestiae facere?</p>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Visit<br />Mississippi</div>
										<div className="thumbnail-description">Animation • Development</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Visit Mississippi</h2><iframe src="/banners/visit_mississippi/visit_mississippi-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/visit_mississippi/visit_mississippi-300x250/index.html", false)} className="nav-link">View</div>
										<div className="container skills-used">
										</div>
									</div>
								</div>
								<img src={thumb1} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Borden<br />Cheese</div>
										<div className="thumbnail-description">Animation • Development</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Borden Cheese</h2><iframe src="/banners/borden/crisps_n_cubes-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/borden/crisps_n_cubes-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
										</div>
									</div>
								</div>
								<img src={thumb2} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Refocus</div>
										<div className="thumbnail-description">Animation • Development</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Refocus</h2><iframe src="/banners/refocus/30-percent-more-film-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/refocus/30-percent-more-film-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
										</div>
									</div>
								</div>
								<img src={thumb3} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Microsoft</div>
										<div className="thumbnail-description">Animation • Development<br />Project Management</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Microsoft</h2><iframe src="/banners/microsoft/microsoft_neutral-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/microsoft/microsoft_neutral-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
										</div>
									</div>
								</div>
								<img src={thumb4} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">XBox</div>
										<div className="thumbnail-description">Animation • Development<br />Project Management</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>XBox</h2><iframe src="/banners/xbox/xbox_titan-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/xbox/xbox_titan-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
										</div>
									</div>
								</div>
								<img src={thumb5} width="300" height="250" className="thumbnail-image" />
							</div>
							<div className="thumbnail">
								<div className="thumbnail-info">
									<div className="thumbnail-info-top container">
										<div className="thumbnail-info-title">Discover</div>
										<div className="thumbnail-description">Animation • Development</div>
									</div>
									<div className="thumbnail-info-bottom container">
										<div onClick={() => onOpenModal(<div><h2>Discover</h2><iframe src="/banners/discover/stackable-300x250/index.html" width="300" height="250"></iframe></div>, "/banners/discover/stackable-300x250/index.html")} className="nav-link">View</div>
										<div className="container skills-used">
										</div>
									</div>
								</div>
								<img src={thumb6} width="300" height="250" className="thumbnail-image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

		// <>
		// 	<div id={id} className={`centered-container ${className}`}>

		// 		<div className="contact-container">
		// 			<h1 className="card-label card-label-contact">Contact Me<span className="material-symbols-outlined">mail</span></h1>
		// 		</div>

		// 		<div className="contact-container2">
		// 			<div className="section-content">
		// 				<p> This is where Contact information would go. The idea is to provide ways for visitors to get in touch. This will be populated with relevant contact details and a form.</p>
		// 				<form action={reachOut}>
		// 					<div className="two-column-layout">
		// 						<label>
		// 							Name:<input className="" type="text" name="name" />
		// 						</label>
		// 						<label>
		// 							Email<input className="" type="text" name="email" />
		// 						</label>
		// 					</div>
		// 					<div className="two-column-layout">
		// 						<label>
		// 							Subject:<br /> <input className="" type="text" name="subject" />
		// 						</label>
		// 						<label>
		// 							Message:<br /> <input className="" type="text" name="message" />
		// 						</label>
		// 					</div>

		// 					<button type="submit">Submit</button>
		// 				</form>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	)
}

export default ContactMe;