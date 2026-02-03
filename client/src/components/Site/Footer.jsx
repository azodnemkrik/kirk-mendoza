import PeekabooTwo from "./PeekabooTwo";

const Footer = ( { id , onOpenModal, onUserInteraction} ) => (
	<footer id={id} style={{
		background: '#222', color: '#fff', textAlign: 'center', padding: '1em 0', marginTop: '0em', fontSize: '1em'
	}}>
		<div className="footer-splitter">
			<div className="footer-left">
				<div><span className="nowrap-text">© {new Date().getFullYear()} Kirk Mendoza.</span> All rights reserved.</div>
			</div>
			<div className="footer-right">
				<a href="https://www.linkedin.com/in/kirkmendoza/" className="social-icon" target="_blank"><i className="fa-brands fa-square-linkedin"></i></a>
				<a href="https://www.facebook.com/kirkmendoza/" className="social-icon" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
				<a href="https://www.instagram.com/mendoza_kirk/" className="social-icon" target="_blank"><i className="fa-brands fa-instagram"></i></a>	
			</div>
		</div>
		<PeekabooTwo id="peekaboo-container-2" onUserInteraction={onUserInteraction} onClick={() => onOpenModal(<div><h2>Kraft Foods: IDEA Marketing</h2><iframe src="https://www.littlerobotmedia.com/media/flash/kraftfoods/index.html" style={{ display: "block", width: "100vw", height: "100vh", border: "none", margin: 0, overflow: "hidden" }} allowFullScreen className="iri" ></iframe></div>, "https://www.littlerobotmedia.com/media/flash/kraftfoods/index.html", false)} />
	</footer>
);

export default Footer;
