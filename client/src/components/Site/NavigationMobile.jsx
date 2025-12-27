import React from "react";	
import HamburgerMenu from "../HamburgerMenu";
import React_Icon from "../React_Icon";

const NavigationMobile = ( { className } ) => {
	

   return (
      <div className={` ${className}`}>
					 <ul className="nav-right navigation-bar">
						<li onClick={() => { window.location.hash = '#home'; }} className="link-home">
							<div className="container" ><span className="material-symbols-outlined">home</span><span className="linkLabel">Home</span></div>
						</li>
						<li onClick={() => { window.location.hash = '#banners'; }} className="link-banners">
							<div className="container" ><span className="material-symbols-outlined">image_inset</span><span className="linkLabel">Banners</span></div>	
						</li>
						<li onClick={() => { window.location.hash = '#videos'; }} className="link-videos">
							<div className="container" ><span className="material-symbols-outlined">live_tv</span><span className="linkLabel">Videos</span></div>
						</li>
						<li onClick={() => { window.location.hash = '#react'; }} className="link-react">
							<div className="container" ><React_Icon className="icon-react" /><span className="linkLabel">React</span></div>
						</li>
						<li onClick={() => { window.location.hash = '#contact'; }} className="link-contact">
							<div className="container" ><span className="material-symbols-outlined">mail</span><span className="linkLabel">Contact</span></div>
						</li>
					</ul>
					<HamburgerMenu />
      </div>


   )
}

export default NavigationMobile